const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const svgPath = path.join(publicDir, 'favicon.svg');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function generateFavicons() {
  console.log('🎨 Gerando favicons a partir do SVG...\n');

  const svgBuffer = fs.readFileSync(svgPath);

  for (const { name, size } of sizes) {
    const outputPath = path.join(publicDir, name);

    try {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(outputPath);

      console.log(`✅ Criado: ${name} (${size}x${size})`);
    } catch (error) {
      console.error(`❌ Erro ao criar ${name}:`, error.message);
    }
  }

  // Criar favicon.ico (32x32)
  try {
    const icoPath = path.join(publicDir, 'favicon.ico');
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(icoPath);

    console.log(`✅ Criado: favicon.ico (32x32)`);
  } catch (error) {
    console.error('❌ Erro ao criar favicon.ico:', error.message);
  }

  console.log('\n✨ Todos os favicons foram gerados com sucesso!');
  console.log('\n📱 Arquivos criados:');
  console.log('   - favicon.svg (original)');
  console.log('   - favicon.ico');
  console.log('   - favicon-16x16.png');
  console.log('   - favicon-32x32.png');
  console.log('   - apple-touch-icon.png');
  console.log('   - android-chrome-192x192.png');
  console.log('   - android-chrome-512x512.png');
}

generateFavicons().catch(console.error);
