# Birthday Countdown Calculator

<img src="./images/Screenshot 2024-08-22 212541.jpg"/>

<a href="https://inspiring-crisp-168de5.netlify.app/">birthday-countdown-calculator🔗</a>

## Overview

The Birthday Countdown Calculator is a JavaScript-based tool that calculates the remaining time until your next birthday. By inputting your birth date, the calculator displays the number of days, hours, minutes, and seconds left until the next occurrence of your birthday.

## Features

- **Real-Time Countdown**: Once the date is submitted, the application dynamically updates the countdown every second, showing the exact time left until your next birthday.
- **User-Friendly Validation**: The application checks if the user has entered a valid date and provides helpful error messages if the input is missing or invalid.
- **Automatic Year Adjustment**: If your birthday for the current year has already passed, the calculator automatically adjusts to count down to your birthday in the following year.
- **Birthday Celebration Message**: If your birthday is today, the application displays a "Happy Birthday 🎉" message.

## How It Works

### 1. **User Interface Elements**

- `daysEl`, `hoursEl`, `minutesEl`, `secondsEl`: These elements display the remaining time until your next birthday.
- `form`: The form element that contains the date input field and submit button.
- `fieldContainer`: The container that holds the date input field and any validation messages.
- `dateInput`: The input field where the user enters their birth date.

### 2. **Form Submission and Validation**

When the user submits the form:

- The `showNextBirthday` function is triggered, which first validates the input using the `formValidation` function.
- If the input is invalid (e.g., the date field is empty), an error message is displayed.
- If the input is valid, the countdown timer starts and the result is displayed.

### 3. **Calculating the Next Birthday**

The application calculates the next birthday based on the user's input:

- It first assumes the birthday will occur in the current year.
- If the current date is past the user's birthday, it adjusts to the next year.
- If today is the user's birthday, a special "Happy Birthday" message is shown.

### 4. **Countdown Timer**

The `countDown` function calculates the remaining time in seconds, then converts it into days, hours, minutes, and seconds. These values are updated in the UI every second using `setInterval`.

### 5. **Time Formatting**

The `timeFormat` function ensures that the displayed time always has two digits (e.g., "04" instead of "4").

### 6. **Error Handling**

If the user does not enter a date, the application displays an error message asking them to provide their birthday.

## How to Use

1. Enter your birth date in the input field.
2. Click the submit button.
3. The remaining time until your next birthday will be displayed and updated every second.

## Conclusion

This Birthday Countdown Calculator is a simple yet effective tool to keep track of the time left until your next birthday. Whether you're planning a celebration or just curious, it provides a real-time countdown with a clean and intuitive interface.
