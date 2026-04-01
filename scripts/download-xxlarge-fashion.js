const fs = require('fs');
const path = require('path');
const https = require('https');

const data = {
  photosNYFashionWeek: [
  'https://images.pixieset.com/03865588/1c1c8d1df17758c2c149db5cfd89097d-xxlarge.jpg',
  'https://images.pixieset.com/03865588/2b8a3a3c60c5c696ddfe41aeaf251dcf-xxlarge.jpg',
  'https://images.pixieset.com/03865588/2c60476caa5a3fead7e9cf635858d290-xxlarge.jpg',
  'https://images.pixieset.com/03865588/3afa8290b1fcc4abe915f212ac5f9112-xxlarge.jpg',
  'https://images.pixieset.com/03865588/3c90d559e9333565bfdf240972def231-xxlarge.jpg',
  'https://images.pixieset.com/03865588/3d5686dc9a1f6c3e97fc57e65af801ef-xxlarge.jpg',
  'https://images.pixieset.com/03865588/4b57d4c4078715823ccdc8c99c7119d2-xxlarge.jpg',
  'https://images.pixieset.com/03865588/5f3d8805db3e7df0bcc103fcb2d7f0ef-xxlarge.jpg',
  'https://images.pixieset.com/03865588/6a94dd2bc755be351b7c85cfab120d39-xxlarge.jpg',
  'https://images.pixieset.com/03865588/fdc8a9c7d8e4610feb997b11e04df6a7-xxlarge.jpg',
  'https://images.pixieset.com/03865588/f84d0f200f452f7807c47c160c1caddf-xxlarge.jpg',
  'https://images.pixieset.com/03865588/f8ac78e73d426b36b72f164d0b562d59-xxlarge.jpg',
  'https://images.pixieset.com/03865588/e3954ab4bc25dc059b25cd43c120e19e-xxlarge.jpg',
  ]
};

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
         reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
         return;
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => resolve(dest));
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  for (const [folderName, urls] of Object.entries(data)) {
    const dir = path.join(__dirname, '..', 'public', 'assets', 'images', folderName);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    console.log(`Downloading ${urls.length} images for ${folderName}...`);
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const destFile = path.join(dir, `${i + 1}.jpg`);
      
      try {
        await downloadImage(url, destFile);
        console.log(`  Downloaded: ${folderName}/${i + 1}.jpg`);
      } catch (err) {
        console.error(`  Error downloading ${url}:`, err.message);
      }
    }
  }
}

main().catch(console.error);
