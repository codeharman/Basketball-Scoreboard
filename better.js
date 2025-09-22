// This is the better verision of the functionality

const homeScoreboard = document.getElementById('home-countBtn');
const guestSoreboard = document.getElementById('guest-countBtn');
let homePoints = 0;
let guestPoints = 0;

function updateScore (teams, points) {
  if (teams === 'home') {
    homePoints += points;
    homeScoreboard.textContent = homePoints;
  } else {
    guestPoints += points;
    guestSoreboard.textContent = guestPoints;
  }
};