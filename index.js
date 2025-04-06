const questions = [
  {
    question: "What is your gender?",
    options: ["Male", "Female", "Other"],
    type: "multiple-choice",
    showOkButton: false,
  },
  {
    question: "What is your age?",
    type: "text",
    showOkButton: true,
  },
  {
    question: "What is your weight (in lbs)?",
    type: "text",
    showOkButton: true,
  },
  {
    question: "What is your experience level?",
    options: ["Beginner", "Intermediate", "Advanced"],
    type: "multiple-choice",
    showOkButton: false,
  },
  {
    question: "What do you want to train?",
    options: ["Push", "Pull", "Legs", "Select Individually"],
    type: "multiple-choice",
    showOkButton: false,
  },
  {
    question: "What muscle groups do you want to focus on?",
    options: [
      "Chest",
      "Back",
      "Shoulders",
      "Quads",
      "Hamstrings",
      "Calves",
      "Biceps",
      "Triceps",
      "Forearms",
      "Abs",
    ],
    type: "multiple-choice",
    showOkButton: true,
  },
];

// Load the saved state from localStorage
function loadState() {
  const savedAnswers = localStorage.getItem("userAnswers");
  const savedIndex = localStorage.getItem("currentQuestionIndex");

  if (savedAnswers) {
    userAnswers = JSON.parse(savedAnswers);
  } else {
    userAnswers = {};
  }

  if (savedIndex !== null) {
    currentQuestionIndex = parseInt(savedIndex);
  } else {
    currentQuestionIndex = 0;
  }
}

// Save the current state to localStorage
function saveState() {
  localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
  localStorage.setItem("currentQuestionIndex", currentQuestionIndex);
}

let currentQuestionIndex = 0;
let userAnswers = {};

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("question-options");
  const okButtonElement = document.getElementById("ok-button");
  const backButtonElement = document.getElementById("back-button");

  const currentQuestion = questions[currentQuestionIndex];

  questionElement.innerText = currentQuestion.question;
  optionsElement.innerHTML = ""; // Clear old content

  // Render based on question type
  if (currentQuestion.type === "multiple-choice") {
    currentQuestion.options.forEach((option) => {
      const optionButton = document.createElement("button");
      optionButton.innerText = option;
      optionButton.classList.add("option-button");

      optionButton.addEventListener("click", () =>
        handleOptionClick(optionButton)
      );
      optionsElement.appendChild(optionButton);
    });
  } else if (currentQuestion.type === "text") {
    const input = document.createElement("input");
    input.type = "number"; // or "text" if needed
    input.classList.add("text-input");
    input.id = "text-input";

    // Pre-fill saved value if it exists
    const savedValue = userAnswers[currentQuestion.question];
    if (savedValue) input.value = savedValue;

    // Listen for Enter key
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        handleOkClick();
      }
    });

    optionsElement.appendChild(input);
  }

  // Handle Ok button visibility
  if (currentQuestion.showOkButton) {
    okButtonElement.style.display = "block";
    okButtonElement.onclick = handleOkClick;
  } else {
    okButtonElement.style.display = "none";
  }

  backButtonElement.style.display =
    currentQuestionIndex === 0 ? "none" : "block";
}

// Handle when an option button is clicked
function handleOptionClick(optionButton) {
  console.log("Button clicked:", optionButton.innerText);

  // Toggle the 'selected' class to change button appearance
  optionButton.classList.toggle("selected");

  // Save the answer to the userAnswers object
  const currentQuestion = questions[currentQuestionIndex];
  userAnswers[currentQuestion.question] = optionButton.innerText;

  // Save the state after an option is selected
  saveState();

  // If no Ok button is required, move to the next question
  if (!currentQuestion.showOkButton) {
    moveToNextQuestion();
  }
}

function handleOkClick() {
  const currentQuestion = questions[currentQuestionIndex];
  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.style.display = "none";
  errorMessageElement.innerText = "";

  if (currentQuestion.type === "text") {
    const input = document.getElementById("text-input");
    const value = input.value.trim();

    if (!value) {
      errorMessageElement.innerText = "Please enter a valid input.";
      errorMessageElement.style.display = "block";
      return;
    }

    userAnswers[currentQuestion.question] = value;
  } else if (currentQuestion.showOkButton) {
    const selectedOptions = [];
    const selectedButtons = document.querySelectorAll(
      ".option-button.selected"
    );
    selectedButtons.forEach((button) => {
      selectedOptions.push(button.innerText);
    });

    if (selectedOptions.length === 0) {
      errorMessageElement.innerText = "Please select at least one option.";
      errorMessageElement.style.display = "block";
      return;
    }

    userAnswers[currentQuestion.question] = selectedOptions;
  }

  saveState();
  moveToNextQuestion();
}

function loadingScreen() {
  // Hide the main content
  document.getElementById("question-container").style.display = "none";

  // Show the loading screen
  document.getElementById("loading-container").style.display = "flex";

  // Save state before redirect
  saveState();

  // Wait for a few seconds before redirecting (simulate loading)
  setTimeout(() => {
    window.location.href = "workout.html"; // Redirect to your desired page
  }, 3000); // 3 seconds
}

function moveToNextQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestion.question];

  // Special logic for "What do you want to train?"
  if (currentQuestion.question === "What do you want to train?") {
    if (userAnswer === "Select Individually") {
      currentQuestionIndex++; // Move to muscle group question
      loadQuestion();
      saveState();
      return;
    } else {
      // Pre-fill muscle groups based on training type
      const muscleGroups = {
        Push: ["Chest", "Shoulders", "Triceps"],
        Pull: ["Back", "Biceps", "Forearms", "Abs"],
        Legs: ["Quads", "Hamstrings", "Calves"],
      };

      // Save the pre-filled muscle groups
      userAnswers["What muscle groups do you want to focus on?"] =
        muscleGroups[userAnswer] || [];

      // Go to loading screen
      console.log(
        "Auto-selected muscle groups:",
        userAnswers["What muscle groups do you want to focus on?"]
      );
      loadingScreen();
      return;
    }
  }

  // Increment question index
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;

  // If all questions have been answered
  if (currentQuestionIndex === 0) {
    console.log("All questions answered. Saving results:", userAnswers);
    loadingScreen(); // Show loading screen
  } else {
    loadQuestion(); // Load the next question
  }

  // Save the state
  saveState();
}

function moveToPreviousQuestion() {
  // Check if we are on the first question
  if (currentQuestionIndex === 0) {
    console.log("Back button is disabled on the first question.");
    return; // Prevent further execution
  }

  // Hide any error messages
  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.style.display = "none";
  errorMessageElement.innerText = "";

  // Decrement the question index
  currentQuestionIndex--;

  // Load the previous question
  loadQuestion();

  // Save the state after moving to the previous question
  saveState();
}

// Call loadState function to load saved data, then load the first question
window.onload = () => {
  localStorage.clear();
  loadState();
  loadQuestion();
  // Attach event listener to the Back button
  const backButtonElement = document.getElementById("back-button");
  if (backButtonElement) {
    backButtonElement.addEventListener("click", moveToPreviousQuestion);
  }
};
