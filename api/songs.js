import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const musicDir = path.join(process.cwd(), 'public', 'music');

  // Read the music directory and list mp3 files
  fs.readdir(musicDir, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Unable to scan directory' });
    }

    // Filter mp3 files and create a list of song objects
    const songs = files.filter(file => file.endsWith('.mp3')).map(file => ({
      title: file.replace('.mp3', ''),
      src: `/music/${file}`  // Ensure the correct path for the client to access
    }));

    res.status(200).json(songs);  // Send list of songs to the frontend
  });
}
