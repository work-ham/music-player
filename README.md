# Cool Music Player

A simple and interactive music player built with HTML, CSS, and JavaScript that allows you to play audio files from a specified directory. The player features a user-friendly interface, shuffle play, and essential playback controls.

## Features

- Play, pause, next, and previous song controls.
- Shuffle play feature to play songs randomly.
- Displays the currently playing song title.
- Clickable playlist to select and play songs.

## Technologies Used

- **HTML**: Structure of the web application.
- **CSS**: Styling and layout of the user interface.
- **JavaScript**: Functionality and interactivity.
- **Node.js**: Backend server to serve audio files and song data.
- **Express**: Web framework for Node.js to handle requests and serve static files.

## Installation

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Clone the Repository

```bash
git clone https://github.com/your-username/music-player.git
cd music-player

###Install Dependencies
```bash
npm install

##Setup
Place your music files in the music directory inside the project folder.
Update the server code if necessary to ensure it reads the music files correctly.
Start the Server
```bash
node server.js

## Access the Application
Open your web browser and go to http://localhost:3000 to access the music player.

## Usage
Click on any song title in the playlist to start playing it.
Use the play, pause, next, and previous buttons to control playback.
Enable shuffle mode to randomly play songs.
```Code Structure
index.html: The main HTML file containing the structure of the music player.
style.css: The CSS file for styling the music player.
script.js: The JavaScript file containing the functionality of the music player.
server.js: The Node.js server file to serve audio files and song data.

## Troubleshooting
If you encounter issues with the audio not playing, ensure the file paths to the music files are correct in the server code.
Make sure your browser supports audio playback for the formats you're using.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## Fork the project.
Create your feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
Font Awesome for the icon library.
Node.js and Express for the backend server.
The community for inspiration and support.

```Feel free to replace `https://github.com/your-username/music-player.git` with your actual repository link, 
