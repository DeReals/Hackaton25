window.onload = () => {
  const savedAnswers = localStorage.getItem("userAnswers");
  const userAnswers = JSON.parse(savedAnswers);

  // Select all buttons with class 'rest-button'
  const restButtons = document.querySelectorAll(".rest-button");

  restButtons.forEach((button, index) => {
    let timeLeft = 180; // 3:00 in seconds
    let timerInterval; // Variable to store the timer interval
    let isTimerRunning = false; // Flag to check if the timer is already running

    // Update the button text with the time
    const updateTimer = () => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      button.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    // Start the timer when the button is clicked
    button.addEventListener("click", () => {
      if (isTimerRunning) {
        return; // Don't start a new timer if one is already running
      }

      // Start the timer and mark it as running
      isTimerRunning = true;

      timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
          clearInterval(timerInterval); // Stop the timer
          button.textContent = "Rest Timer"; // Reset button text when done
          isTimerRunning = false; // Allow restarting the timer
        } else {
          timeLeft--;
          updateTimer();
        }
      }, 1000);
    });
  });
};
