document.addEventListener("DOMContentLoaded", function() {
    const name = prompt("Please enter your name:");
    if (name) {
        document.querySelector('.greeting h2').textContent = `Good morning, ${name}`;
    }
});
const greeting = document.getElementsByClassName('greetings');
function setGreeting() {
    let today = new Date(),
      hour = today.getHours();
  
    if (hour < 12) {
      // morning
      greeting.textContent = "Good morning, ";
    } else if (hour < 18) {
      // afternoon
      greeting.textContent = "Good afternoon, ";
    } else {
      // evening
      greeting.textContent = "Good evening, ";
    }
  }
  setGreeting();


// Get the elements
const openPopup = document.getElementById('openPopup');
const popupCard = document.getElementById('popupCard');
const closePopup = document.getElementById('closePopup');

// Function to open the popup card
openPopup.addEventListener('click', function(event) {
    event.preventDefault();
    popupCard.style.display = 'flex';
});

// Function to close the popup card
closePopup.addEventListener('click', function() {
    popupCard.style.display = 'none';
});

// Function to update the custom message
function updateCustomMessage(customMessage) {
    document.getElementById('customMessage').textContent =
    customMessage;
}

setTimeout(function() {
    const newMessage = "Have a great day ahead!";
    updateCustomMessage(newMessage);
}, 5000);

const messages = [
    "You matter.",
  "You're awesome!",
  "You did great today!",
  "I believe in you!",
  "You are loved!",
  "You are worthy",
  "Keep going!",
  "I love you!",
  "Make it happen.",
  "Be a light.",
  "Know your worth.",
  "Things will get better",
  "Be good. Do good.",
  "Follow your heart.",
  "Stay hopeful!",
  "You are strong!",
  "Protect your peace.",
  "Be still.",
  "You are beautiful!",
  "Keep on fighting!",
];

// Function to update the custom message
function updateCustomMessage() {
    // Get a random index
    const randomIndex = Math.floor(Math.random() * messages.length);
    // Get the random message
    const randomMessage = messages[randomIndex];
    // Update the content of the element
    document.getElementById('customMessage').textContent = randomMessage;
}



// for(var i = 0; i < messages.length; i++){
//     setTimeout(updateCustomMessage, 5000);
// }
