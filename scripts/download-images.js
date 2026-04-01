const fs = require('fs');
const path = require('path');
const https = require('https');

const constantsPath = path.join(process.cwd(), 'app', 'shared', 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');
const outDir = path.join(process.cwd(), 'public', 'assets', 'images');

const download = (url, dest) => new Promise((resolve, reject) => {
  https.get(url, res => {
    if (res.statusCode !== 200) return reject(new Error('Status: ' + res.statusCode));
    const writeStream = fs.createWriteStream(dest);
    res.pipe(writeStream);
    writeStream.on('finish', () => {
      writeStream.close();
      resolve();
    });
    writeStream.on('error', reject);
  }).on('error', reject);
});

async function run() {
  const varRegex = /export const (\w+) = \[([\s\S]*?)\]/g;
  let match;
  const blocks = [...content.matchAll(varRegex)];
  const promises = [];

  for (const block of blocks) {
    const varName = block[1];
    if (varName === 'photos') continue;

    const arrContent = block[2];
    const urlRegex = /'([^']+)'/g;
    const urls = [...arrContent.matchAll(urlRegex)];
    if (!urls.length) continue;

    const destDir = path.join(outDir, varName);
    fs.mkdirSync(destDir, { recursive: true });

    let newArrContent = arrContent;
    for (let i = 0; i < urls.length; i++) {
        const urlStr = urls[i][0];
        const url = urls[i][1];
        const filename = `${i+1}.jpg`;
        const localPath = path.join(destDir, filename);
        const webPath = `/assets/images/${varName}/${filename}`;

        newArrContent = newArrContent.replace(urlStr, `'${webPath}'`);
        console.log(`Downloading ${url} -> ${localPath}`);
        promises.push(download(url, localPath));
    }
    content = content.replace(block[0], `export const ${varName} = [${newArrContent}]`);
  }
  
  await Promise.all(promises);
  fs.writeFileSync(constantsPath, content);
  console.log('Done organizing images and updating constants.ts');
}

run();
