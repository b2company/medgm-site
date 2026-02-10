const fs = require('fs');
const path = require('path');

// SVG base64 encoding
const svgContent = fs.readFileSync(path.join(__dirname, '../public/favicon.svg'), 'utf8');

console.log('📦 Gerando favicons...\n');
console.log('O arquivo favicon.svg já foi criado!');
console.log('\nPara gerar os outros formatos (ICO, PNG), você pode:');
console.log('\n1. Usar o site: https://realfavicongenerator.net/');
console.log('   - Faça upload do arquivo public/favicon.svg');
console.log('   - Baixe e extraia os arquivos gerados em /public/\n');
console.log('2. Ou instalar sharp e usar um gerador automático:');
console.log('   npm install --save-dev sharp');
console.log('   (depois podemos criar um script automatizado)\n');
console.log('✅ Por enquanto, o favicon.svg já está funcionando!');
