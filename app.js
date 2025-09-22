

// Scoreboard functionality here

  // home scoredboard counter

const homeScoreboard = document.getElementById('home-countBtn');
let homeCount = 0;

// +1 button

function homePlusOne() {
  homeCount += 1;
  homeScoreboard.textContent = homeCount;
};

// +2 button

function homePlusTwo() {
  homeCount += 2;
  homeScoreboard.textContent = homeCount;
};

// +3 button

function homePlusThree() {
  homeCount += 3;
  homeScoreboard.textContent = homeCount;
};

// Guest scoreboard counter

const guestScoreboard = document.getElementById('guest-countBtn');
let guestCount = 0;

// +1 button

function guestPlusOne() {
  guestCount += 1;
  guestScoreboard.textContent = guestCount;
};

// +2 button

function guestPlusTwo() {
  guestCount += 2;
  guestScoreboard.textContent = guestCount;
}

// +3 button

function guestPlusThree() {
  guestCount += 3;
  guestScoreboard.textContent = guestCount;
}