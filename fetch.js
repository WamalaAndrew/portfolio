import fs from 'fs';

async function download() {
  const images = {
    'hero.jpeg': 'https://picsum.photos/seed/lawyerhero/800/1000',
    'about.jpeg': 'https://picsum.photos/seed/lawyerabout/800/800',
    'insights.jpeg': 'https://picsum.photos/seed/lawyerinsights/1000/600'
  };

  for (const [name, url] of Object.entries(images)) {
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(`src/assets/${name}`, Buffer.from(buffer));
    console.log('Downloaded', name, buffer.byteLength);
  }
}
download();

