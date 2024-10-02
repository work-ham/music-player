const express = require('express');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const app = express();
const musicDir = path.join(__dirname, 'music');

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Serve music files with correct Content-Type
app.get('/music/:filename', (req, res) => {
    const filePath = path.join(musicDir, req.params.filename);
    const mimeType = mime.getType(filePath);

    res.setHeader('Content-Type', mimeType);

    const fileStream = fs.createReadStream(filePath);
    fileStream.on('error', (err) => {
        if (err.code === 'ENOENT') {
            res.status(404).send('File not found');
        } else {
            res.status(500).send('Server error');
        }
    });
    fileStream.pipe(res);
});

// API to get list of songs (automatically read from music folder)
app.get('/api/songs', (req, res) => {
    fs.readdir(musicDir, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Unable to scan directory' });
        }

        // Filter only mp3 files and create a list of song objects
        const songs = files.filter(file => file.endsWith('.mp3')).map(file => ({
            title: file.replace('.mp3', ''),  // Send song title without extension
            src: `/music/${file}`  // Send file path for the player to access
        }));

        res.json(songs);  // Send list of songs to the frontend
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
