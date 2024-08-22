const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const form = document.getElementById("form");
const fieldContainer = document.querySelector(".field-container");
const dateInput = document.getElementById("date");

let countdownInterval;

function showNextBirthday(e) {
  e.preventDefault();

  if (!formValidation()) {
    return false;
  }

  const birthday = new Date(dateInput.value);
  const currentTime = new Date();

  // Set the next birthday to this year first
  let nextBirthday = new Date(
    currentTime.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );

  // If the birthday has already passed this year, use next year
  if (nextBirthday < currentTime) {
    nextBirthday.setFullYear(currentTime.getFullYear() + 1);
  } else if (nextBirthday === currentTime) {
    document.querySelector("h1").textContent = "Happy Birthday 🎉";
  }

  // Clear any previous interval
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  // Start a new countdown
  countDown(nextBirthday);
  countdownInterval = setInterval(() => countDown(nextBirthday), 1000);
}

function countDown(nextBirthday) {
  const currentTime = new Date();
  console.log(currentTime, typeof currentTime);
  const totalSeconds = Math.floor((nextBirthday - currentTime) / 1000);

  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const days = Math.floor(totalSeconds / 3600 / 24);

  secondsEl.innerHTML = timeFormat(seconds);
  minutesEl.innerHTML = timeFormat(minutes);
  hoursEl.innerHTML = timeFormat(hours);
  daysEl.innerHTML = days;
}

function timeFormat(time) {
  return time < 10 ? `0${time}` : time;
}

function formValidation() {
  // Clear previous error messages
  const existingError = fieldContainer.querySelector(".error");
  if (existingError) {
    fieldContainer.removeChild(existingError);
  }

  // Check if the date input is empty
  if (!dateInput.value) {
    const errMessage = document.createElement("p");
    errMessage.classList.add("error");
    errMessage.innerHTML = `
      <i class="fa-solid fa-circle-info"></i> Please enter your birthday
    `;
    fieldContainer.appendChild(errMessage);
    return false; // Return false if validation fails
  } else {
    document.querySelector(".result").style.display = "block";
  }

  return true; // Return true if validation passes
}

// Initial call
form.addEventListener("submit", showNextBirthday);
