// api/songs.js
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    const musicDir = path.join(__dirname, '../public/music');
    
    fs.readdir(musicDir, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Unable to scan directory' });
        }

        const songs = files.filter(file => file.endsWith('.mp3')).map(file => ({
            title: file.replace('.mp3', ''),  // Remove file extension for title
            src: `/music/${file}`  // Relative path to music files
        }));

        res.status(200).json(songs);  // Return song list
    });
};
