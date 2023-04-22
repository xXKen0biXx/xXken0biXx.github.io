// Initialize button and click count
 <button id="buttonnn">click Me!</button>
var button = document.body.getElementById('buttonnn');
let clickCount = 0;

// Function to move the button to a random location
function moveButton() {
  let marginTop = Math.floor(Math.random() * 400);
  let marginLeft = Math.floor(Math.random() * 700);
  button.style.marginTop = marginTop + "px";
  button.style.marginLeft = marginLeft + "px";
}

// Function to handle button clicks
function handleClick() {
  clickCount++;
  if (clickCount === 3) {
    alert("You Have Been Caught!");
    clickCount = 0;
    setTimeout(startLevel, 1000);
  }
}

// Function to start a new level
function startLevel() {
  let timeout = 500 - (100 * level);
  if (timeout < 0) {
    timeout = 0;
  }
  button.removeEventListener("mouseover", moveButton);
  button.removeEventListener("click", handleClick);
  level++;
  alert("Level " + level);
  setTimeout(function() {
    button.addEventListener("mouseover", moveButton);
    button.addEventListener("click", handleClick);
  }, timeout);
}

// Initialize game
let level = 0;
startLevel();