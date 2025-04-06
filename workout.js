window.onload = () => {
  const savedAnswers = localStorage.getItem("userAnswers");
  const userAnswers = JSON.parse(savedAnswers) || {};

  console.log(userAnswers);

  const muscleGroups = userAnswers["What muscle groups do you want to focus on?"];
  const selected = selectExercises(muscleGroups, numberOfExercises(userAnswers));
  const NUM_EXERCISE_CARDS = numberOfExercises(userAnswers);

  function createExerciseCard(exercise) {
    const card = document.createElement("div");
    card.className = "exercise-card";

    const cardHTML = `
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
        ${Array(exercise.sets).fill(0).map(() => `
          <div class="exercise-card-individual-split">
            <input type="number" placeholder="${exercise.reps}" min="0" />
            <input type="number" placeholder="100" min="0" step="5" />
          </div>`).join("")}
      </div>
    `;

    card.innerHTML = cardHTML;

    // Timer logic for this card's button
    const button = card.querySelector(".rest-button");
    let timeLeft = 180; // 3 minutes in seconds
    let timerInterval = null;
    let isTimerRunning = false;

    const updateTimer = () => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      button.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    button.addEventListener("click", () => {
      if (isTimerRunning) {
        // Pause
        clearInterval(timerInterval);
        isTimerRunning = false;
        return;
      }

      // Start or resume
      isTimerRunning = true;
      updateTimer();

      timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          button.textContent = "Rest Timer";
          isTimerRunning = false;
          timeLeft = 180;
        } else {
          timeLeft--;
          updateTimer();
        }
      }, 1000);
    });

    return card;
  }

  // Add cards to the DOM
  const container = document.getElementById("main-body");
  selected.slice(0, NUM_EXERCISE_CARDS).forEach((exercise) => {
    const card = createExerciseCard(exercise);
    container.insertBefore(card, document.querySelector(".ok-finish"));
  });
};

// Placeholder functions you should define elsewhere:
function selectExercises(muscleGroups, count) {
  // Mock example logic for selecting exercises
  return Array(count).fill().map((_, i) => ({
    name: `Exercise ${i + 1}`,
    sets: 3,
    reps: 10
  }));
}

function numberOfExercises(userAnswers) {
  // Example: extract number from userAnswers or default to 3
  return userAnswers["How many exercises do you want to do?"] || 3;
}
