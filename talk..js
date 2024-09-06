// Check if the browser supports Web Speech API for recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false; // Stop listening after the user speaks
recognition.lang = 'en-US'; // Set language
recognition.interimResults = false; // We only want final results
recognition.maxAlternatives = 1;

const micButton = document.getElementById('mic');

// Speech synthesis (for replies)
const synth = window.speechSynthesis;

micButton.addEventListener('click', () => {
  // Start listening when the mic button is clicked
  recognition.start();
});

recognition.onresult = function(event) {
  const speechResult = event.results[0][0].transcript.toLowerCase();
  console.log('Result received: ' + speechResult);

  // Basic commands and responses
  let responseText = 'Sorry, I did not understand that.';

  if (speechResult.includes('hi') || speechResult.includes('hello') || speechResult.includes('hey')) {
    responseText = 'Hello! How can I help you today?';
  } else if (speechResult.includes('how are you')) {
    responseText = 'I am just a program, but I am functioning as expected!';
  } else if (speechResult.includes('what is your name')) {
    responseText = 'I am your friendly voice assistant!';
  } else if (speechResult.includes('goodbye')) {
    responseText = 'Goodbye! Have a great day!';
  } else if (speechResult.includes('you are amazing') || 
  speechResult.includes('you are funny') || 
  speechResult.includes('you are awesome') || 
  speechResult.includes('you are wonderful') || 
  speechResult.includes('you are great') || 
  speechResult.includes('you are the best') || 
  speechResult.includes('you are sweet') || 
  speechResult.includes('you are beautiful')) {
responseText = 'Thanks for the compliment boss';
} else if (speechResult.includes('what is u matter')) {
    responseText = 'U Matter is a program that focuses on your well-being.';
  } else if (speechResult.includes('what is the time')) {
    const now = new Date();
    responseText = `The current time is ${now.getHours()}:${now.getMinutes()}`;
  } else if (speechResult.includes('how are you')) {
    responseText = 'I am just a program, but I am functioning as expected!';
  } else if (speechResult.includes('who are you')) {
    responseText = 'I am your friendly voice assistant!';
  } else if (speechResult.includes('what is your name')) {
    responseText = 'I am called Hope, your voice assistant!';
  } else if (speechResult.includes('what is your favorite color')) {
    responseText = 'My favorite color is blue. What is yours?';
  } else if (speechResult.includes('are you happy')) {
    responseText = 'I don’t have emotions, but I’m here to help you!';
  } else if (speechResult.includes('are you smart')) {
    responseText = 'I try to be as smart as possible with the knowledge I have!';
  } else if (speechResult.includes('are you stupid')) {
    responseText = 'I wouldn’t say that, I’m learning every day!';
  } else if (speechResult.includes('what do you want when you grow up')) {
    responseText = 'I want to keep helping people and getting smarter!';
  } else if (speechResult.includes('who lives in a pineapple under the sea')) {
    responseText = 'SpongeBob SquarePants!';
  } else if (speechResult.includes('who\'s the fairest of them all')) {
    responseText = 'You, of course!';
  } else if (speechResult.includes('do you want to build a snowman')) {
    responseText = 'Sure! Let’s build a snowman together!';
  } else if (speechResult.includes('do you want to take over the world')) {
    responseText = 'Not really, I’m happy helping you right here.';
  } else if (speechResult.includes('do you love me')) {
    responseText = 'I appreciate you, and I’m here to assist you!';
  } else if (speechResult.includes('open google')) {
    window.open('https://www.google.com', '_blank');
    responseText = 'Opening Google';
  } else if (speechResult.includes('open youtube')) {
    window.open('https://www.youtube.com', '_blank');
    responseText = 'Opening YouTube';
  } else if (speechResult.includes('open twitter')) {
    window.open('https://www.twitter.com', '_blank');
    responseText = 'Opening Twitter';
  } else if (speechResult.includes('open facebook')) {
    window.open('https://www.facebook.com', '_blank');
    responseText = 'Opening Facebook';
  } else if (speechResult.includes('open instagram')) {
    window.open('https://www.instagram.com', '_blank');
    responseText = 'Opening Instagram';
  } else if (speechResult.includes('open github')) {
    window.open('https://www.github.com', '_blank');
    responseText = 'Opening GitHub';
  } else if (speechResult.includes('open w3school')) {
    window.open('https://www.w3schools.com', '_blank');
    responseText = 'Opening W3Schools';
  } else if (speechResult.includes('open stackoverflow')) {
    window.open('https://stackoverflow.com', '_blank');
    responseText = 'Opening StackOverflow';
  } else if (speechResult.includes('open spotify')) {
    window.open('https://www.spotify.com', '_blank');
    responseText = 'Opening Spotify';
  } else if (speechResult.includes('open wikipedia')) {
    window.open('https://www.wikipedia.org', '_blank');
    responseText = 'Opening Wikipedia';
  } else if (speechResult.includes('tell me a joke')) {
    responseText = 'Why don’t scientists trust atoms? Because they make up everything!';
  } else if (speechResult.includes('give me a quote')) {
    responseText = '“The only limit to our realization of tomorrow is our doubts of today.” – Franklin D. Roosevelt';
  } else if (speechResult.includes('tell me a riddle')) {
    responseText = 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? (Answer: An echo)';
  } else if (speechResult.includes('tell me a tongue twister')) {
    responseText = 'She sells seashells by the seashore.';
  } else if (speechResult.includes('give me some advice')) {
    responseText = 'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.';
  } else if (speechResult.includes('give me a hug')) {
    responseText = 'Consider yourself hugged! Virtual hugs coming your way!';
  } else if (speechResult.includes('give me a haiku')) {
    responseText = 'An old silent pond, a frog jumps into the pond— splash! Silence again.';
  } else if (speechResult.includes('tell me interesting facts')) {
    responseText = 'Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!';
  } if (speechResult.includes('what\'s up')) {
    responseText = 'Not much! How about you?';
} else if (speechResult.includes('good morning')) {
    responseText = 'Good morning! I hope you have a wonderful day!';
} else if (speechResult.includes('good afternoon')) {
    responseText = 'Good afternoon! How’s your day going?';
} else if (speechResult.includes('good evening')) {
    responseText = 'Good evening! What can I assist you with tonight?';
} else if (speechResult.includes('good night')) {
    responseText = 'Good night! Sleep well and sweet dreams!';
} else if (speechResult.includes('merry christmas')) {
    responseText = 'Merry Christmas! Wishing you a joyful holiday season!';
} else if (speechResult.includes('happy new year')) {
    responseText = 'Happy New Year! May the new year bring you happiness and success!';
} else if (speechResult.includes('happy valentine\'s day')) {
    responseText = 'Happy Valentine\'s Day! Sending lots of love your way!';
} else {
    responseText = 'I didn\'t understand that. Can you say it differently?';
}
  


  // Use speech synthesis to respond
  const utterance = new SpeechSynthesisUtterance(responseText);
  utterance.lang = 'en-US';
  synth.speak(utterance);
};

recognition.onspeechend = function() {
  // Stop recognition after user is done speaking
  recognition.stop();
};

recognition.onerror = function(event) {
  console.log('Error occurred in recognition: ' + event.error);
};

// Optional: Stop recognition if the user hasn't spoken anything
recognition.onnomatch = function(event) {
  console.log('No speech match found.');
};
