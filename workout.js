window.onload = () => {
  // Ask for push notification permission as soon as the page loads
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }

  // Workout duration timer setup
  const startTimerBtn = document.getElementById("start-timer-button");
  let totalSeconds = 0;
  let workoutInterval = null;
  let isWorkoutRunning = false;
  let isPaused = false;

  startTimerBtn.textContent = "START"; // show "START" at the beginning

  const updateTimerDisplay = () => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    startTimerBtn.textContent = `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  startTimerBtn.addEventListener("click", () => {
    if (!isWorkoutRunning) {
      // Start for the first time
      isWorkoutRunning = true;
      isPaused = false;

      // ✅ Undim all cards on first start
      document.querySelectorAll(".exercise-card.dimmed").forEach((card) => {
        card.classList.remove("dimmed");
      });

      workoutInterval = setInterval(() => {
        totalSeconds++;
        updateTimerDisplay();
      }, 1000);
    } else if (!isPaused) {
      // Pause
      clearInterval(workoutInterval);
      isPaused = true;
    } else {
      // Resume
      isPaused = false;
      workoutInterval = setInterval(() => {
        totalSeconds++;
        updateTimerDisplay();
      }, 1000);
    }
  });

  const savedAnswers = localStorage.getItem("userAnswers");
  const userAnswers = JSON.parse(savedAnswers) || {};

  console.log(userAnswers);

  const muscleGroups =
    userAnswers["What muscle groups do you want to focus on?"];
  const selected = selectExercises(
    muscleGroups,
    numberOfExercises(userAnswers)
  );
  const NUM_EXERCISE_CARDS = numberOfExercises(userAnswers);

  function createExerciseCard(exercise) {
    const card = document.createElement("div");
    card.className = "exercise-card dimmed";

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
        ${Array(exercise.sets)
          .fill(0)
          .map(
            () => `
          <div class="exercise-card-individual-split">
            <input type="number" placeholder="${exercise.reps}" min="0" />
            <input type="number" placeholder="100" min="0" step="5" />
          </div>`
          )
          .join("")}
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
        // 🔁 Pause the timer
        clearInterval(timerInterval);
        isTimerRunning = false;
        button.classList.add("paused"); // 🔁 Add pause style
        return;
      }

      // 🔁 Start or resume the timer
      isTimerRunning = true;
      button.classList.remove("paused"); // 🔁 Remove pause style
      updateTimer();

      timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          button.textContent = "Rest Timer";
          isTimerRunning = false;
          timeLeft = 180;
          button.classList.remove("paused");

          // ✅ Push notification
          if (Notification.permission === "granted") {
            new Notification("Rest Over!", {
              body: `Time to move on to your next workout: ${exercise.name}`,
            });
          }
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
    container.insertBefore(card, document.getElementById("finish-button"));
  });

  // Handle active card highlighting
  const cards = document.querySelectorAll(".exercise-card");

  cards.forEach((card) => {
    card.addEventListener("pointerdown", () => {
      cards.forEach((c) => c.classList.remove("active-card"));
      card.classList.add("active-card");
    });
  });

  // Enable Finish button after first interaction with any card
  const finishButton = document.getElementById("finish-button");
  finishButton.classList.add("disabled"); // Start disabled

  let finishEnabled = false;

  cards.forEach((card) => {
    card.addEventListener("pointerdown", () => {
      if (!finishEnabled) {
        finishButton.classList.remove("disabled");
        finishEnabled = true;
      }
    });
  });
};

// Placeholder functions you should define elsewhere:
function selectExercises(muscleGroups, count) {
  // Mock example logic for selecting exercises
  return Array(count)
    .fill()
    .map((_, i) => ({
      name: `Exercise ${i + 1}`,
      sets: 3,
      reps: 10,
    }));
}

function numberOfExercises(userAnswers) {
  // Example: extract number from userAnswers or default to 3
  return userAnswers["How many exercises do you want to do?"] || 3;
}
