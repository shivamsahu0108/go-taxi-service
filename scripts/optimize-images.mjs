import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('public/images');
const targets = [
  { input: 'logo.png', output: 'logo.webp', width: 160, quality: 82 },
  { input: 'service/Dumna.jpg', output: 'service/Dumna.webp', width: 640, quality: 75 },
  { input: 'service/Jabalpur-Sightseeing.jpg', output: 'service/Jabalpur-Sightseeing.webp', width: 640, quality: 75 },
  { input: 'service/outstation-taxi.jpg', output: 'service/outstation-taxi.webp', width: 640, quality: 75 },
  { input: 'service/Wedding-Group-Travel.jpg', output: 'service/Wedding-Group-Travel.webp', width: 640, quality: 75 },
  { input: 'JabalpurPlace/Jabalpur-Sightseeing.jpg', output: 'JabalpurPlace/Jabalpur-Sightseeing.webp', width: 720, quality: 75 },
  { input: 'JabalpurPlace/Dhuandhar-Falls.png', output: 'JabalpurPlace/Dhuandhar-Falls.webp', width: 720, quality: 75 },
  { input: 'JabalpurPlace/Madan-Mahal-Fort.jpg', output: 'JabalpurPlace/Madan-Mahal-Fort.webp', width: 720, quality: 75 },
];

for (const target of targets) {
  const inputPath = path.join(root, target.input);
  const outputPath = path.join(root, target.output);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await sharp(inputPath)
    .resize({ width: target.width, withoutEnlargement: true })
    .webp({ quality: target.quality, effort: 5 })
    .toFile(outputPath);
  const inputSize = (await fs.stat(inputPath)).size;
  const outputSize = (await fs.stat(outputPath)).size;
  console.log(`${target.input}: ${Math.round(inputSize / 1024)} KB -> ${Math.round(outputSize / 1024)} KB`);
}