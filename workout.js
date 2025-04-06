window.onload = () => {
  const savedAnswers = localStorage.getItem("userAnswers");

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

  let userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || {};

  console.log(userAnswers);

  muscleGroups = userAnswers["What muscle groups do you want to focus on?"];

  console.log(muscleGroups);

  let selected = selectExercises(muscleGroups, numberOfExercises(userAnswers));
  console.log(selected);

  const NUM_EXERCISE_CARDS = numberOfExercises(userAnswers); // or any number you want

  function createExerciseCard(exercise) {
    const card = document.createElement("div");
    card.className = "exercise-card";
    card.innerHTML = `
    <div class="exercise-card-header full-width">
      <div class="exercise-name">
        <h2 class="exercise-name">${exercise.name}</h2>
      </div>
      <div class="exercise-rest">
        <button class="rest-button">Rest Timer</button>
      </div>
    </div>
    <div class="exercise-card-sub-header full-width">
      <h3>Reps</h3>
      <h3>Weight (lbs)</h3>
    </div>
    <div class="exercise-card-splits">
      ${Array(exercise.sets)
        .fill(0)
        .map(
          () => `
        <div class="exercise-card-individual-split">
          <input type="number" placeholder="${exercise.reps}" min="0" />
          <input type="number" placeholder="100" min="0" step="5" />
        </div>
      `
        )
        .join("")}
    </div>
  `;
    return card;
  }

  // Add cards to DOM
  const container = document.getElementById("main-body");
  selected.slice(0, NUM_EXERCISE_CARDS).forEach((exercise) => {
    const card = createExerciseCard(exercise);
    container.insertBefore(card, document.querySelector(".ok-finish")); // insert before the finish button
  });
};
