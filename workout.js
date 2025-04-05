window.onload = () => {
  const savedAnswers = localStorage.getItem("userAnswers");

  if (savedAnswers) {
    const userAnswers = JSON.parse(savedAnswers);
    console.log("Loaded answers from localStorage:", userAnswers);

    // Example: Show selected muscle groups
    const workoutContainer = document.getElementById("workout-container");
    const muscleGroups =
      userAnswers["What muscle groups do you want to focus on?"];

    if (muscleGroups && muscleGroups.length > 0) {
      workoutContainer.innerHTML = `<h2>Your workout will focus on:</h2><ul>${muscleGroups
        .map((muscle) => `<li>${muscle}</li>`)
        .join("")}</ul>`;
    } else {
      workoutContainer.innerHTML = `<p>No muscle groups selected.</p>`;
    }
  } else {
    window.location.href = "index.html"; // Or wherever your questions are
  }
};
