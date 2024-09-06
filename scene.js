document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('music-popup');
    const closeBtn = document.getElementById('close-popup');
    const audioPlayer = document.getElementById('music-player');
    const audioSource = document.getElementById('audio-source');
    const nowPlayingTitle = document.getElementById('now-playing-title');
  
    const tracks = {
      lake: {
        title: "Lake Sunset",
        src: "r1.mp3" 
      },
      river: {
        title: "River Forest",
        src: "r2.mp3" 
      },
      rain: {
        title: "Rain",
        src: "r3.mp3" 
      },
      waterfall: {
        title: "Waterfall",
        src: "r4.mp3" 
      },
      snow: {
        title: "Snow",
        src: "r5.wav" 
      },
      mountain: {
        title: "Mountain",
        src: "r6.mp3" 
      }
    };
  
    function openPopupAndPlay(track) {
      audioSource.src = track.src;
      nowPlayingTitle.textContent = `Now Playing: ${track.title}`;
      audioPlayer.load(); // Load the new audio source
      audioPlayer.play(); // Start the music
      popup.style.display = 'block'; // Show the popup
    }
  
    // Lake Sunset Button
    document.getElementById('play-btn-lake').addEventListener('click', (e) => {
      e.preventDefault();
      openPopupAndPlay(tracks.lake);
    });
  
    // River Forest Button
    document.getElementById('play-btn-river').addEventListener('click', (e) => {
      e.preventDefault();
      openPopupAndPlay(tracks.river);
    });
  
    // Rain Button
    document.getElementById('play-btn-rain').addEventListener('click', (e) => {
      e.preventDefault();
      openPopupAndPlay(tracks.rain);
    });

    document.getElementById('play-btn-waterfall').addEventListener('click', (e) => {
        e.preventDefault();
        openPopupAndPlay(tracks.waterfall);
      });
  
      
      document.getElementById('play-btn-snow').addEventListener('click', (e) => {
        e.preventDefault();
        openPopupAndPlay(tracks.snow);
      });
  
      
      document.getElementById('play-btn-mountain').addEventListener('click', (e) => {
        e.preventDefault();
        openPopupAndPlay(tracks.mountain);
      });
    
  
    // Close the popup and pause the music
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none'; // Hide the popup
      audioPlayer.pause(); // Pause the music
    });
  
    // Close the popup when clicking outside of it
    window.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.display = 'none';
        audioPlayer.pause(); // Pause music when popup is closed
      }
    });
  });
  
  