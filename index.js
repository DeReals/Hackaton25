// Array to hold multiple questions
const questions = [
  {
    question: "What is your gender?",
    options: ["Male", "Female"],
    showOkButton: false,
  },
  {
    question: "What is your experience level?",
    options: ["Beginner", "Novice", "Intermediate", "Advanced", "Elite"],
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

// Function to load the current question and options dynamically
function loadQuestion() {
  // Get the question and options container elements
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("question-options");
  const okButtonElement = document.getElementById("ok-button");

  const currentQuestion = questions[currentQuestionIndex];

  // Load the question text into the h2 element
  questionElement.innerText = currentQuestion.question;

  // Clear any previous options
  optionsElement.innerHTML = "";

  // Loop through the options and create a button for each
  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.innerText = option;
    optionButton.classList.add("option-button");

    // Pass the optionButton itself, not just the option text
    optionButton.addEventListener("click", () =>
      handleOptionClick(optionButton)
    );

    optionsElement.appendChild(optionButton);
  });

  // Display the "Ok" button if needed
  if (currentQuestion.showOkButton) {
    okButtonElement.style.display = "block"; // Show the Ok button
    okButtonElement.addEventListener("click", handleOkClick);
  } else {
    okButtonElement.style.display = "none"; // Hide the Ok button
  }
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
  console.log("Ok button clicked!");
  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion.showOkButton) {
    // Get all the selected options for muscle groups
    const selectedOptions = [];
    const selectedButtons = document.querySelectorAll(
      ".option-button.selected"
    ); // Get all selected buttons

    selectedButtons.forEach((button) => {
      selectedOptions.push(button.innerText); // Push the text of the selected button
    });

    if (selectedOptions.length === 0) {
      // Alert if no options were selected
      alert("Please select at least one option.");
      return; // Stop further execution
    }

    // Save the selected options to the userAnswers object
    userAnswers[currentQuestion.question] = selectedOptions;

    console.log("You selected: " + selectedOptions.join(", "));
  }

  // Save the state after Ok button is clicked
  saveState();

  // After Ok button is clicked, move to the next question
  moveToNextQuestion();
}

// Function to move to the next question
function moveToNextQuestion() {
  // Increment question index
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;

  // If all questions have been answered, redirect to workout.html
  if (currentQuestionIndex === 0) {
    console.log("All questions answered. Saving results:", userAnswers);
    window.location.href = "workout.html"; // Redirect to workout.html after all questions are answered
  } else {
    loadQuestion();
  }

  // Save the state after moving to the next question
  saveState();
}

// Call loadState function to load saved data, then load the first question
window.onload = () => {
  localStorage.clear();
  loadState();
  loadQuestion();
};
