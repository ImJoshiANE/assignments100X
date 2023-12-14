// Creating  instance of an date
const date = new Date();

// Getting hour minute and seconds from it
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// Used to determine which format of time being used
let hourFormate24 = true;

// Getting html elements for hour, minute and second
let hourElement = document.getElementsByClassName("hours")[0];
let minuteElement = document.getElementsByClassName("minutes")[0];
let secondElement = document.getElementsByClassName("seconds")[0];

// get buttonElement
let buttonElement = document.getElementsByClassName("myButton")[0];
console.log(buttonElement);

// Logic for updatting time
const updateTime = () => {
  if (hourFormate24) {
    hourElement.innerHTML = `${hours} :`;
    minuteElement.innerHTML = `${minutes} ::`;
    secondElement.innerHTML = `${seconds}`;
  } else {
    if (hours >= 12) {
      hourElement.innerHTML = `${hours > 12 ? hours % 12 : hours} :`;
      minuteElement.innerHTML = `${minutes} ::`;
      secondElement.innerHTML = `${seconds} PM`;
    } else {
      hourElement.innerHTML = `${hours == 0 ? 12 : hours} :`;
      minuteElement.innerHTML = `${minutes} ::`;
      secondElement.innerHTML = `${seconds} AM`;
    }
  }
};

// Logic for increasing time every second
const increaseTime = () => {
  seconds++;
  if (seconds === 60) {
    minutes++;
    if (minutes === 60) {
      hours++;
      if (hours === 24) {
        hours = 0;
      }
      minutes = 0;
    }
    seconds = 0;
  }
  updateTime();
};

// Logic for switching between 24 hour and 12 hour formate
const switchFormat = () => {
  hourFormate24 = !hourFormate24;
  
  if(hourFormate24) buttonElement.innerHTML = "12 Hour Format";
  else buttonElement.innerHTML = "24 Hour Format";
  
  updateTime();
};

// setInterval
// Instead of this we can call getHours, getMinutes etc everysecond and update it
setInterval(() => {
  increaseTime();
}, 999);

buttonElement.onclick = switchFormat;