document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('music-popup');
    const closeBtn = document.querySelector('.close');
    const audioPlayer = document.getElementById('music-player');
    const audioSource = document.getElementById('audio-source');
    const nowPlayingTitle = document.getElementById('now-playing-title');
  
    // Function to generate a random hex color
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    // Track data
    const tracks = {
      card1: {
        title: "Healing Water",
        artist: "Steve Oxen",
        src: "r1.mp3"
      },
      card2: {
        title: "Kiss the Sky",
        artist: "Aakash Gandhi",
        src: "r2.mp3"
      },
      card3: {
        title: "They Said I Can't",
        artist: "David Fesliyan",
        src: "r3.mp3"
      },
      card4: {
        title: "They Said I Can't",
        artist: "David Fesliyan",
        src: "r4.mp3"
      },
      card5: {
        title: "They Said I Can't",
        artist: "David Fesliyan",
        src: "r5.wav"
      },
      card6: {
        title: "They Said I Can't",
        artist: "David Fesliyan",
        src: "r6.mp3"
      },
    };
  
    // Function to open the popup and play the selected track with random background
    function openPopupAndPlay(track) {
      // Set the popup's background to a random color
      const randomBgColor = getRandomColor();
      popup.style.backgroundColor = randomBgColor;
  
      // Update the Now Playing title
      nowPlayingTitle.textContent = `${track.title} - ${track.artist}`;
      
      // Update the audio source and play
      audioSource.src = track.src;
      audioPlayer.load(); // Load the new audio source
      audioPlayer.play(); // Play the audio
      
      // Show the popup
      popup.style.display = 'block';
    }
  
    // Event listeners for each card
    document.getElementById('card1').addEventListener('click', () => openPopupAndPlay(tracks.card1));
    document.getElementById('card2').addEventListener('click', () => openPopupAndPlay(tracks.card2));
    document.getElementById('card3').addEventListener('click', () => openPopupAndPlay(tracks.card3));
    document.getElementById('card4').addEventListener('click', () => openPopupAndPlay(tracks.card4));
    document.getElementById('card5').addEventListener('click', () => openPopupAndPlay(tracks.card5));
    document.getElementById('card6').addEventListener('click', () => openPopupAndPlay(tracks.card6));
    // Add event listeners for other cards similarly
  
    // Close the popup when the close button is clicked
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
      audioPlayer.pause(); // Pause the audio
      audioPlayer.currentTime = 0; // Reset the audio to the start
    });
  
    // Close the popup when clicking outside of it
    window.addEventListener('click', (event) => {
      if (event.target === popup) {
        popup.style.display = 'none';
        audioPlayer.pause();
        audioPlayer.currentTime = 0; // Reset the audio to the start
      }
    });
  });
  
  