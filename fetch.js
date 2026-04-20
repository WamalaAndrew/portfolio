import fs from 'fs';
const base64 = fs.readFileSync('src/assets/hero.jpeg', 'utf8');
console.log(base64.substring(0, 100));
