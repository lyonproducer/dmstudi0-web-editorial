const fs = require('fs');
const path = require('path');
const https = require('https');

const data = {
  photosRyan: [
    'https://images.pixieset.com/668051111/11a31913d6c795d769b51e6690788153-xxlarge.jpg',
    'https://images.pixieset.com/668051111/0c5318c7c5c9097937fcb379a5ad2845-xxlarge.jpg',
    'https://images.pixieset.com/668051111/fee72b0d5b6378fda97b10f818d5b479-xxlarge.jpg',
    'https://images.pixieset.com/668051111/fee72b0d5b6378fda97b10f818d5b479-xxlarge.jpg',
    'https://images.pixieset.com/668051111/a5816bd64001233fb088e96d47cca15d-xxlarge.jpg',
    'https://images.pixieset.com/668051111/786895670156c900496681c9cb36ae21-xxlarge.jpg',
    'https://images.pixieset.com/668051111/8743bce064ab89a8d33988a81317848d-xxlarge.jpg',
    'https://images.pixieset.com/668051111/8743bce064ab89a8d33988a81317848d-xxlarge.jpg',
    'https://images.pixieset.com/668051111/89ad48b494c2a486dbd388b1b2224ffc-xxlarge.jpg',
    'https://images.pixieset.com/668051111/30fe1dcbb5953c40f31ee8dd837b2bd8-xxlarge.jpg',
  ],
  photosBodaElSalvador: [
    'https://images.pixieset.com/045817011/f5c707dd630634ce7393ac75ea683fc2-xxlarge.jpg',
    'https://images.pixieset.com/045817011/7ced86eb1222f31e8567ea1eab26452e-xxlarge.jpg',
    'https://images.pixieset.com/045817011/0b825b24b552a4557c9c9521bbdabc4d-xxlarge.jpg',
    'https://images.pixieset.com/045817011/0c0471b9aa0cf25d0f9d63d1dc15c9f3-xxlarge.jpg',
    'https://images.pixieset.com/045817011/1d5b219983b84424763c6de54704a596-xxlarge.jpg',
    'https://images.pixieset.com/045817011/2e58389b39eb559a98a8775e2ac469e5-xxlarge.jpg',
    'https://images.pixieset.com/045817011/2fcd0b85397fe1251cb7235540e1e1cc-xxlarge.jpg',
    'https://images.pixieset.com/045817011/2fcd0b85397fe1251cb7235540e1e1cc-xxlarge.jpg',
    'https://images.pixieset.com/045817011/5a7d8e15343b3aec323048e800881606-xxlarge.jpg',
    'https://images.pixieset.com/045817011/5b9e2953d2c831e9dcafa6383c9111ab-xxlarge.jpg',
  ],
  photosBabySofia: [
    'https://images.pixieset.com/794693801/fe6c0a402b86c48fbe172cc1aff6d8ac-xxlarge.jpg',
    'https://images.pixieset.com/794693801/fae7de256f8456a1627d5dd775e48c6c-xxlarge.jpg',
    'https://images.pixieset.com/794693801/f9d4eba80a23fedc77c78004baad5db2-xxlarge.jpg',
    'https://images.pixieset.com/794693801/f0c6fabd84f63aa21b13e00d943b0bef-xxlarge.jpg',
    'https://images.pixieset.com/794693801/d727583da42a58e7a448e8538beeb593-xxlarge.jpg',
    'https://images.pixieset.com/794693801/cfc2b4f5adeb38c74d9ffa658dad6e37-xxlarge.jpg',
    'https://images.pixieset.com/794693801/bfe0e052a67f0a18e74edb6c901e7da9-xxlarge.jpg',
    'https://images.pixieset.com/794693801/b287c0121670af38f8c2989a4e37d6be-xxlarge.jpg',
    'https://images.pixieset.com/794693801/96754a23afc13f30631641762db57268-xxlarge.jpg',
    'https://images.pixieset.com/794693801/3dc51adef8fef8468f40f78207c733e3-xxlarge.jpg',
  ],
  photosBabyEzra: [
    'https://images.pixieset.com/549702011/c25e4dab34691c9570f2a5a7625382ec-xxlarge.jpg',
    'https://images.pixieset.com/549702011/1cc62b9cec319450b036b2ea0ff76ad4-xxlarge.jpg',
    'https://images.pixieset.com/549702011/1cc62b9cec319450b036b2ea0ff76ad4-xxlarge.jpg',
    'https://images.pixieset.com/549702011/2d0094211f2fbb8b215f09e503871b92-xxlarge.jpg',
    'https://images.pixieset.com/549702011/2e4396c6f727705057d25bf7fd153706-xxlarge.jpg',
    'https://images.pixieset.com/549702011/3bcabb534f900d0a6efc78a54248855a-xxlarge.jpg',
    'https://images.pixieset.com/549702011/3cc2f972aa5a4fdd00e671f6ffb8ca67-xxlarge.jpg',
    'https://images.pixieset.com/549702011/3dfcb73a0b5a0e38c3d201da965182e1-xxlarge.jpg',
    'https://images.pixieset.com/549702011/4ad88f09bdf4e918ce50730792269476-xxlarge.jpg',
    'https://images.pixieset.com/549702011/8f7e3aa7d798b098b3e962bacdcf102c-xxlarge.jpg',
    'https://images.pixieset.com/549702011/289028a89d0de913be9a001983dd5458-xxlarge.jpg',
    'https://images.pixieset.com/549702011/2448ae1716f6dc05b645077c96976a68-xxlarge.jpg',
  ],
  photosAtlantaAutos: [
    'https://images.pixieset.com/823350701/1c4f03cafc512cf116220406ae92ca28-xxlarge.jpg',
    'https://images.pixieset.com/823350701/0ce371a2830da4554ca8892f15b91569-xxlarge.jpg',
    'https://images.pixieset.com/823350701/2bf9542591edd2f58808a5ee0c071f19-xxlarge.jpg',
    'https://images.pixieset.com/823350701/3b66f5d699b8da17374b6709baa82c10-xxlarge.jpg',
    'https://images.pixieset.com/823350701/4d02d18fdab5c94ddd8ec34eab3b1d15-xxlarge.jpg',
    'https://images.pixieset.com/823350701/6bdaa83dd0c7a8d1b0919ca4d82e1ec3-xxlarge.jpg',
    'https://images.pixieset.com/823350701/07de87c2ccec5b32a7dbe6c72783abae-xxlarge.jpg',
    'https://images.pixieset.com/823350701/10e93e2dc7ec28e89634b0abde347a73-xxlarge.jpg',
    'https://images.pixieset.com/823350701/56bce95105cadebbc2df2e14b0deedb5-xxlarge.jpg',
    'https://images.pixieset.com/823350701/97b5ff2862a1f978c6272f66d99de10f-xxlarge.jpg',
    'https://images.pixieset.com/823350701/faafe4c127b1226401ed422f8717e52b-xxlarge.jpg',
  ],
  photosJaycito: [
    'https://images.pixieset.com/26258869/0f0117af7cadcc0b2b2f803fa20ec562-xxlarge.jpg',
    'https://images.pixieset.com/26258869/1adaa738fd7a7d294d7a23dc1d8544a6-xxlarge.jpg',
    'https://images.pixieset.com/26258869/2e00d2586684c3ea5bedcfe068979af1-xxlarge.jpg',
    'https://images.pixieset.com/26258869/6e4e2b1ac8229b4902a7003303800078-xxlarge.jpg',
    'https://images.pixieset.com/26258869/015a120336988fb95977e9d58ac292e2-xxlarge.jpg',
    'https://images.pixieset.com/26258869/045dd743352c1be04b30678effd405db-xxlarge.jpg',
    'https://images.pixieset.com/26258869/95d8e8207a78dc14fa2b49694bcc1c3d-xxlarge.jpg',
    'https://images.pixieset.com/26258869/657a4df73ec2bc249b41ff8c680d6c68-xxlarge.jpg',
    'https://images.pixieset.com/26258869/964712caaf273e5ddf8073c8832c9f9d-xxlarge.jpg',
    'https://images.pixieset.com/26258869/ea5285c2cabd24df8e3ef5fd5265bbde-xxlarge.jpg',
  ],
  photosLisaForGlamour: [
    'https://images.pixieset.com/64265169/0b88d966eaf4d3df5a64faf82db0a9e9-xxlarge.jpg',
    'https://images.pixieset.com/64265169/1b36ec2752ab41af01fcb817d386fa02-xxlarge.jpg',
    'https://images.pixieset.com/64265169/3bab428e9077744718dac383adfdbb03-xxlarge.jpg',
    'https://images.pixieset.com/64265169/3b09e2772d71e2717cdaa43e4801e392-xxlarge.jpg',
    'https://images.pixieset.com/64265169/7a318576d120222022be605a5aa8a4e0-xxlarge.jpg',
    'https://images.pixieset.com/64265169/9ab6b2a512dcd688f7dab6b186d676ce-xxlarge.jpg',
    'https://images.pixieset.com/64265169/fd121e70135f2279327e64b0a388a86a-xxlarge.jpg',
    'https://images.pixieset.com/64265169/f2f76742ae3304747e9aef612bc9652b-xxlarge.jpg',
    'https://images.pixieset.com/64265169/e6038c03326f189b012ad0f70ce1da74-xxlarge.jpg',
    'https://images.pixieset.com/64265169/ec94c21336024af8a3c36f229308713c-xxlarge.jpg',
    'https://images.pixieset.com/64265169/ec94c21336024af8a3c36f229308713c-xxlarge.jpg',
    'https://images.pixieset.com/64265169/d7af5e5861397bdbd5a42cf166b5e209-xxlarge.jpg',
    'https://images.pixieset.com/64265169/f29b393fa93bc747bf6b7a445384b0e0-xxlarge.jpg',
  ],
  photosBodaAnayLucas: [
    'https://images.pixieset.com/33120199/f14911352e46a8cccaea59c4f458cfb8-xxlarge.jpg',
    'https://images.pixieset.com/33120199/f26bb695f950fd1deeb2823f07b56dff-xxlarge.jpg',
    'https://images.pixieset.com/33120199/e8e946518b083447ddeca0b6ab267df4-xxlarge.jpg',
    'https://images.pixieset.com/33120199/8c75157757438bfd8fbc50ddaae53dc4-xxlarge.jpg',
    'https://images.pixieset.com/33120199/f5c5f943c0893d80aa6dc081f1e60ec6-xxlarge.jpg',
    'https://images.pixieset.com/33120199/2e8b2568734b65cbe25bbe6f0524573c-xxlarge.jpg',
    'https://images.pixieset.com/33120199/fdd94573082aa1da06238504ca1b4e78-xxlarge.jpg',
    'https://images.pixieset.com/33120199/1be79f9a92b7b6f359a480ff14489675-xxlarge.jpg',
    'https://images.pixieset.com/33120199/2d383053f6e06b9c657ffcef4a6980dc-xxlarge.jpg',
    'https://images.pixieset.com/33120199/59f17b9d6f24e2923881016dd012a3a3-xxlarge.jpg',
    'https://images.pixieset.com/33120199/0b8863c4e738a0e5c0f226f0cde2217f-xxlarge.jpg',
    'https://images.pixieset.com/33120199/fd1bece1ac21c1bd0e4ec6b8d2e4deb5-xxlarge.jpg',
    'https://images.pixieset.com/33120199/fd0d65a37b88b43d7b1f8c5df51b5f69-xxlarge.jpg',
    'https://images.pixieset.com/33120199/ed390aa4ba12863d04932c936b8bbf85-xxlarge.jpg',
    'https://images.pixieset.com/33120199/f482e024f372461cc1b959488e808b2e-xxlarge.jpg',
    'https://images.pixieset.com/33120199/ed390aa4ba12863d04932c936b8bbf85-xxlarge.jpg',
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
