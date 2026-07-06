const sharp = require('sharp');
const fs = require('fs');

async function removeBlackBackground(file) {
    const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    
    for (let i = 0; i < data.length; i += 4) {
        if (data[i] < 35 && data[i+1] < 35 && data[i+2] < 35) {
            // Anti-aliasing edges: fade out near-black pixels
            data[i+3] = 0; 
        } else if (data[i] < 60 && data[i+1] < 60 && data[i+2] < 60) {
            data[i+3] = Math.max(0, data[i+3] - 150);
        }
    }
    
    await sharp(data, {
        raw: {
            width: info.width,
            height: info.height,
            channels: 4
        }
    }).toFile(file + '.tmp.png');
    
    fs.renameSync(file + '.tmp.png', file);
}

Promise.all([
    removeBlackBackground('public/integrations/tiktok.png'),
    removeBlackBackground('public/integrations/cursor.png'),
    removeBlackBackground('public/integrations/figma.png')
]).then(() => console.log('Done')).catch(console.error);
