function restTime(userAnswers) {
  time = 0;

  switch (userAnswers["What is your experience level?"]) {
    case "Beginner":
      time = 4;
      break;
    case "Intermediate":
      time = 3;
      break;
    case "Advanced":
      time = 2;
      break;
  }

  localStorage.setItem("suggestedRest", time);
}

function numberOfExercises(userAnswers) {
  num = 0;

  switch (userAnswers["What is your experience level?"]) {
    case "Beginner":
      num = 3;
      break;
    case "Intermediate":
      num = 5;
      if (
        userAnswers["What muscle groups do you want to focus on?"].length == 2
      ) {
        num = 4;
      }
      break;
    case "Advanced":
      num = 6;
      if (
        userAnswers["What muscle groups do you want to focus on?"].length == 2
      ) {
        num = 4;
      }
      break;
  }

  if (userAnswers["What muscle groups do you want to focus on?"].length == 1) {
    num = 3;
  }

  return num;
}

function selectExercises(muscleGroups, numExercises, level) {
  const exercises = {
    Chest: [
      { name: "Push-ups", reps: 10, sets: 3 },
      { name: "Bench Press", reps: 8, sets: 4 },
      { name: "Incline Dumbbell Press", reps: 10, sets: 3 },
      { name: "Chest Flys", reps: 12, sets: 3 },
      { name: "Dips", reps: 10, sets: 3 },
      { name: "Chest Press Machine", reps: 10, sets: 3 },
      { name: "Cable Crossovers", reps: 12, sets: 3 },
    ],
    Back: [
      { name: "Deadlifts", reps: 5, sets: 5 },
      { name: "Pull-ups", reps: 10, sets: 3 },
      { name: "Bent-over Rows", reps: 8, sets: 4 },
      { name: "Lat Pulldown", reps: 10, sets: 3 },
      { name: "T-Bar Rows", reps: 8, sets: 2 },
      { name: "Face Pulls", reps: 12, sets: 3 },
      { name: "Seated Rows", reps: 10, sets: 3 },
    ],
    Shoulders: [
      { name: "Overhead Press", reps: 8, sets: 4 },
      { name: "Lateral Raises", reps: 12, sets: 5 },
      { name: "Front Raises", reps: 12, sets: 3 },
      { name: "Rear Delt Flys", reps: 12, sets: 3 },
      { name: "Arnold Press", reps: 10, sets: 3 },
      { name: "Dumbbell Shoulder Press", reps: 8, sets: 4 },
      { name: "Upright Rows", reps: 10, sets: 3 },
    ],
    Quads: [
      { name: "Back Squats", reps: 6, sets: 3 },
      { name: "Front Squats", reps: 8, sets: 4 },
      { name: "Leg Press", reps: 10, sets: 3 },
      { name: "Walking Lunges", reps: 12, sets: 3 },
      { name: "Leg Extensions", reps: 15, sets: 3 },
      { name: "Step-ups", reps: 10, sets: 3 },
      { name: "Split Squats", reps: 10, sets: 3 },
    ],
    Hamstrings: [
      { name: "Romanian Deadlifts", reps: 10, sets: 3 },
      { name: "Leg Curls", reps: 12, sets: 4 },
      { name: "Good Mornings", reps: 10, sets: 3 },
      { name: "Glute-Ham Raises", reps: 10, sets: 3 },
      { name: "Kettlebell Swings", reps: 12, sets: 3 },
      { name: "Cable Kickbacks", reps: 12, sets: 3 },
      { name: "Single-Leg Deadlifts", reps: 10, sets: 3 },
    ],
    Calves: [
      { name: "Standing Calf Raises", reps: 15, sets: 4 },
      { name: "Seated Calf Raises", reps: 20, sets: 3 },
      { name: "Donkey Calf Raises", reps: 15, sets: 3 },
      { name: "Leg Press Calf Extensions", reps: 15, sets: 3 },
      { name: "Jump Rope", reps: 100, sets: 3 },
      { name: "Box Jumps", reps: 12, sets: 3 },
    ],
    Biceps: [
      { name: "Barbell Curls", reps: 10, sets: 3 },
      { name: "Dumbbell Curls", reps: 10, sets: 4 },
      { name: "Hammer Curls", reps: 12, sets: 3 },
      { name: "Preacher Curls", reps: 10, sets: 3 },
      { name: "Concentration Curls", reps: 12, sets: 3 },
      { name: "Cable Curls", reps: 15, sets: 3 },
      { name: "Chin-ups", reps: 8, sets: 3 },
    ],
    Triceps: [
      { name: "Tricep Dips", reps: 10, sets: 3 },
      { name: "Skull Crushers", reps: 8, sets: 4 },
      { name: "Tricep Pushdowns", reps: 12, sets: 3 },
      { name: "Overhead Tricep Extension", reps: 12, sets: 3 },
      { name: "Close-grip Bench Press", reps: 8, sets: 4 },
      { name: "Diamond Push-ups", reps: 10, sets: 3 },
      { name: "Cable Kickbacks", reps: 12, sets: 3 },
    ],
    Forearms: [
      { name: "Wrist Curls", reps: 12, sets: 3 },
      { name: "Reverse Wrist Curls", reps: 12, sets: 3 },
      { name: "Farmer's Carries", reps: 12, sets: 3 },
      { name: "Hammer Curls", reps: 12, sets: 3 },
      { name: "Reverse Curls", reps: 12, sets: 3 },
      { name: "Dead Hangs", reps: 30, sets: 4 },
    ],
    Abs: [
      { name: "Crunches", reps: 20, sets: 3 },
      { name: "Plank", reps: "60 seconds", sets: 3 },
      { name: "Russian Twists", reps: 30, sets: 3 },
      { name: "Leg Raises", reps: 15, sets: 3 },
      { name: "Bicycle Crunches", reps: 30, sets: 3 },
      { name: "Mountain Climbers", reps: 40, sets: 3 },
      { name: "V-Ups", reps: 15, sets: 3 },
    ],
  };

  const numGroups = muscleGroups.length;
  const exercisesPerGroup = Math.floor(numExercises / numGroups);
  let remainder = numExercises % numGroups;

  let selectedExercises = [];

  muscleGroups.forEach((group) => {
    const availableExercises = exercises[group] || [];
    let shuffledExercises = [...availableExercises];

    for (let i = shuffledExercises.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledExercises[i], shuffledExercises[j]] = [
        shuffledExercises[j],
        shuffledExercises[i],
      ];
    }

    const numToSelect = exercisesPerGroup + (remainder > 0 ? 1 : 0);
    const selected = shuffledExercises.slice(0, numToSelect);

    if (level === "Beginner") {
      selected.forEach((exercise) => {
        if (typeof exercise.reps === "number") {
          exercise.reps = Math.max(1, exercise.reps - 2);
        }
      });
    }

    selectedExercises = selectedExercises.concat(selected);

    if (remainder > 0) {
      remainder--;
    }
  });

  return selectedExercises;
}
