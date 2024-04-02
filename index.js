const fs = require('fs').promises;
import { parseFile } from 'music-metadata';
import path from 'path';

async function renameFile(filePath) {
    const oldPath = path.join(__dirname, 'music', filePath);
    const metadata = await parseFile(oldPath);
    const newPath = path.join(__dirname, 'music-updated', metadata.common.artist + ' - ' + metadata.common.title + '.mp3');

    try {
        await fs.rename(oldPath, newPath);
        console.log('File renamed and moved successfully');
    } catch (error) {
        console.error('Error renaming and moving file:', error);
    }
}

(async () => {
    try {
        const files = await fs.readdir(path.join(__dirname, 'music'));
        const mp3Files = files.filter(file => path.extname(file) === '.mp3');
        for (const file of mp3Files) {
            await renameFile(file);
        }
    } catch (error) {
        console.error(error.message);
    }
})();
