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
- **Vercel**: Hosting for static files and serverless functions.
- **Node.js**: Used locally for development purposes.

## Installation

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Clone the Repository

```bash
git clone https://github.com/work-ham/music-player.git
cd music-player
```
### Install Dependencies

```bash
npm install
```

### Setup

Place your music files in the `music/` directory inside the project folder.

### Start the Development Server

To test locally, use Vercel's development server:

```bash
vercel dev
```

### Deploying to Vercel

Sign up or log in to Vercel. Deploy the project by linking it to your GitHub repository or using the Vercel CLI:

```bash
vercel --prod
```

This will deploy the project to production.

### Access the Application

After deploying, open your web browser and go to the Vercel-provided URL to access the music player.

## Usage

- Click on any song title in the playlist to start playing it.
- Use the play, pause, next, and previous buttons to control playback.
- Enable shuffle mode to randomly play songs.

## Code Structure

- `index.html`: The main HTML file containing the structure of the music player.
- `style.css`: The CSS file for styling the music player.
- `script.js`: The JavaScript file containing the functionality of the music player.
- `api/songs.js`: The serverless function that serves the list of songs.

## Troubleshooting

If you encounter issues with the audio not playing, ensure the file paths to the music files are correct and that they are supported formats in your browser.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

### Steps to Contribute

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Font Awesome for the icon library.
- Node.js for the backend.
- The Vercel platform for hosting.
- The community for inspiration and support.








