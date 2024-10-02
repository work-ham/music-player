document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio-player');
    const songList = document.getElementById('song-list');
    const playPauseButton = document.getElementById('play-pause-btn'); // Play/Pause button reference
    const shuffleButton = document.getElementById('shuffle-btn');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const currentSongTitle = document.getElementById('song-title');
    const shuffleCheckbox = document.getElementById('shuffle-checkbox'); // Shuffle checkbox
    let songs = [];
    let currentSongIndex = 0;
    let isShuffleEnabled = false; // To track if shuffle is enabled

    // Fetch the list of songs from the server
    function loadSongs() {
        fetch('/api/songs')
            .then(response => response.json())
            .then(data => {
                songs = data;
                updateSongList();
            })
            .catch(err => console.error('Error fetching songs:', err));
    }

    // Update the song list UI
    function updateSongList() {
        songList.innerHTML = ''; // Clear current list
        songs.forEach((song, index) => {
            const songItem = document.createElement('li');
            songItem.textContent = song.title;
            songItem.addEventListener('click', () => playSong(index));
            songList.appendChild(songItem);
        });
    }

    // Play a selected song
    function playSong(index) {
        currentSongIndex = index;
        audio.src = songs[currentSongIndex].src;
        audio.play();
        updateActiveSong();
        currentSongTitle.textContent = songs[currentSongIndex].title; // Update current song title display
        updatePlayPauseButton(); // Update button text
    }

    // Highlight the currently playing song
    function updateActiveSong() {
        const songItems = songList.getElementsByTagName('li');
        Array.from(songItems).forEach((item, index) => {
            item.classList.toggle('active', index === currentSongIndex);
        });
    }

    // Play the next song
    function playNextSong() {
        if (isShuffleEnabled) {
            currentSongIndex = Math.floor(Math.random() * songs.length); // Select a random song index
        } else {
            currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop back to first song if at the end
        }
        playSong(currentSongIndex);
    }

    // Play the previous song
    function playPreviousSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop to last song if at the beginning
        playSong(currentSongIndex);
    }

    // Shuffle play checkbox event listener
    shuffleCheckbox.addEventListener('change', function () {
        isShuffleEnabled = this.checked; // Toggle shuffle state
    });

    // Next button event listener
    nextButton.addEventListener('click', playNextSong);

    // Previous button event listener
    prevButton.addEventListener('click', playPreviousSong);

    // Play/Pause button event listener
    playPauseButton.addEventListener('click', togglePlayPause);

    // Toggle play/pause
    function togglePlayPause() {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Pause'; // Change button text to 'Pause'
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play'; // Change button text to 'Play'
        }
    }

    // Autoplay next song when the current one ends
    audio.addEventListener('ended', playNextSong);

    // Load and display songs on page load
    loadSongs();

    // Update the play/pause button text based on the audio state
    audio.addEventListener('play', () => playPauseButton.textContent = 'Pause');
    audio.addEventListener('pause', () => playPauseButton.textContent = 'Play');
});
