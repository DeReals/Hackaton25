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
    question: "What muscle groupds do you want to focus on?",
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

let currentQuestionIndex = 0;

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
  currentQuestion.options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.innerText = option;
    optionButton.classList.add("option-button");
    optionButton.addEventListener("click", () => handleOptionClick(option));
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

// Handle when an option is clicked
function handleOptionClick(option) {
  console.log("You selected: " + option);
  // After an answer is selected, move to the next question with a swipe animation
  moveToNextQuestion();
}

// Handle when the Ok button is clicked
function handleOkClick() {
  console.log("Ok button clicked!");
  // After Ok button is clicked, move to the next question with a swipe animation
  moveToNextQuestion();
}

// Function to move to the next question with animation
function moveToNextQuestion() {
  const questionContainer = document.getElementById("question-container");

  // Add swipe-left animation
  questionContainer.classList.add("swipe-left");

  // Wait for the animation to finish before updating the question
  setTimeout(() => {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    loadQuestion();

    // Remove the animation class after it finishes
    questionContainer.classList.remove("swipe-left");
  }, 500); // Matches the duration of the animation
}

// Call loadQuestion function when the page loads
window.onload = loadQuestion;
