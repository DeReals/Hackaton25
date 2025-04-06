const chestExercises = [
  { name: "Bench press", sets: 3, resistanceType: "weight" },
  { name: "Dumbbell flys", sets: 4, resistanceType: "weight" },
  { name: "Push-ups", sets: 4, resistanceType: "body" },
  { name: "Chest dips", sets: 3, resistanceType: "body" },
  { name: "Incline dumbbell press", sets: 3, resistanceType: "weight" },
  { name: "Flat dumbbell press", sets: 4, resistanceType: "weight" },
  { name: "Decline bench press", sets: 3, resistanceType: "weight" },
  { name: "Incline bench press", sets: 4, resistanceType: "weight" },
  { name: "Cable crossovers", sets: 3, resistanceType: "weight" },
  { name: "Pec deck machine", sets: 4, resistanceType: "weight" },
  { name: "Smith machine bench press", sets: 3, resistanceType: "weight" },
  { name: "Machine chest press", sets: 4, resistanceType: "weight" },
  { name: "Landmine chest press", sets: 3, resistanceType: "weight" },
  { name: "Medicine ball chest pass", sets: 3, resistanceType: "weight" },
  {
    name: "Single-arm dumbbell bench press",
    sets: 4,
    resistanceType: "weight",
  },
  { name: "Svend press", sets: 3, resistanceType: "weight" },
  { name: "TRX chest press", sets: 4, resistanceType: "body" },
  { name: "Incline push-ups", sets: 3, resistanceType: "body" },
  { name: "Decline push-ups", sets: 4, resistanceType: "body" },
];

const backExercises = [
  { name: "Bent over rows", sets: 3, resistanceType: "weight" },
  { name: "Cable rows", sets: 4, resistanceType: "weight" },
  { name: "Cable lat pulldowns", sets: 3, resistanceType: "weight" },
  { name: "Pull-ups", sets: 4, resistanceType: "body" },
  { name: "Deadlifts", sets: 3, resistanceType: "weight" },
  { name: "T-bar rows", sets: 4, resistanceType: "weight" },
  { name: "Single-arm dumbbell rows", sets: 3, resistanceType: "weight" },
  { name: "Seated cable rows", sets: 4, resistanceType: "weight" },
  { name: "Lat pulldown machine", sets: 3, resistanceType: "weight" },
  { name: "Inverted rows", sets: 4, resistanceType: "body" },
  { name: "Face pulls", sets: 3, resistanceType: "weight" },
  { name: "Straight-arm pulldowns", sets: 4, resistanceType: "weight" },
  { name: "Landmine rows", sets: 3, resistanceType: "weight" },
  { name: "Machine back extension", sets: 3, resistanceType: "weight" },
  { name: "Superman exercise", sets: 4, resistanceType: "body" },
  { name: "Renegade rows", sets: 3, resistanceType: "weight" },
  { name: "TRX rows", sets: 4, resistanceType: "body" },
  { name: "Kettlebell swings", sets: 3, resistanceType: "weight" },
  { name: "Good mornings", sets: 4, resistanceType: "weight" },
];

const shoulderExercises = [
  { name: "Military press", sets: 3, resistanceType: "weight" },
  { name: "Push press", sets: 4, resistanceType: "weight" },
  { name: "Dumbbell shoulder press", sets: 3, resistanceType: "weight" },
  { name: "Dumbbell lateral raises", sets: 4, resistanceType: "weight" },
  { name: "Front raises", sets: 3, resistanceType: "weight" },
  { name: "Rear delt flys", sets: 4, resistanceType: "weight" },
  { name: "Arnold press", sets: 3, resistanceType: "weight" },
  { name: "Cable lateral raises", sets: 4, resistanceType: "weight" },
  { name: "Face pulls", sets: 3, resistanceType: "weight" },
  { name: "Upright rows", sets: 4, resistanceType: "weight" },
  { name: "Machine shoulder press", sets: 3, resistanceType: "weight" },
  { name: "Landmine press", sets: 4, resistanceType: "weight" },
  {
    name: "Single-arm cable lateral raises",
    sets: 4,
    resistanceType: "weight",
  },
  { name: "Dumbbell front raises", sets: 3, resistanceType: "weight" },
  { name: "Reverse pec deck flys", sets: 4, resistanceType: "weight" },
  { name: "TRX Y-raises", sets: 3, resistanceType: "body" },
  { name: "Kettlebell shoulder press", sets: 4, resistanceType: "weight" },
  { name: "Barbell shoulder press", sets: 3, resistanceType: "weight" },
  { name: "Seated dumbbell shoulder press", sets: 4, resistanceType: "weight" },
];

const quadExercises = [
  { name: "Squats", sets: 3, resistanceType: "weight" },
  { name: "Leg press", sets: 4, resistanceType: "weight" },
  { name: "Lunges", sets: 3, resistanceType: "weight" },
  { name: "Step-ups", sets: 4, resistanceType: "weight" },
  { name: "Bulgarian split squats", sets: 3, resistanceType: "weight" },
  { name: "Leg extensions", sets: 4, resistanceType: "weight" },
  { name: "Hack squats", sets: 3, resistanceType: "weight" },
  { name: "Front squats", sets: 4, resistanceType: "weight" },
  { name: "Goblet squats", sets: 3, resistanceType: "weight" },
  { name: "Sissy squats", sets: 4, resistanceType: "body" },
  { name: "Smith machine squats", sets: 3, resistanceType: "weight" },
  { name: "Pistol squats", sets: 4, resistanceType: "body" },
  { name: "Box jumps", sets: 3, resistanceType: "body" },
  { name: "Wall sits", sets: 4, resistanceType: "body" },
  { name: "Single-leg press", sets: 3, resistanceType: "weight" },
  { name: "TRX squats", sets: 4, resistanceType: "body" },
  { name: "Kettlebell squats", sets: 3, resistanceType: "weight" },
  { name: "Landmine squats", sets: 3, resistanceType: "weight" },
  { name: "Jump squats", sets: 4, resistanceType: "body" },
];

const hamstringExercises = [
  { name: "Deadlifts", sets: 3, resistanceType: "weight" },
  { name: "Romanian deadlifts", sets: 4, resistanceType: "weight" },
  { name: "Leg curls", sets: 3, resistanceType: "weight" },
  { name: "Glute-ham raises", sets: 4, resistanceType: "body" },
  { name: "Good mornings", sets: 3, resistanceType: "weight" },
  { name: "Single-leg deadlifts", sets: 4, resistanceType: "weight" },
  { name: "Nordic hamstring curls", sets: 3, resistanceType: "body" },
  { name: "Cable pull-throughs", sets: 4, resistanceType: "weight" },
  { name: "Kettlebell swings", sets: 3, resistanceType: "weight" },
  { name: "Bridge exercise", sets: 4, resistanceType: "body" },
  { name: "Hamstring walkouts", sets: 3, resistanceType: "body" },
  { name: "TRX hamstring curls", sets: 4, resistanceType: "body" },
  { name: "Swiss ball leg curls", sets: 3, resistanceType: "body" },
  { name: "Machine leg curls", sets: 3, resistanceType: "weight" },
  { name: "Stiff-legged deadlifts", sets: 4, resistanceType: "weight" },
  { name: "Sumo deadlifts", sets: 3, resistanceType: "weight" },
];

const calfExercises = [
  { name: "Standing calf raises", sets: 3, resistanceType: "weight" },
  { name: "Seated calf raises", sets: 4, resistanceType: "weight" },
  { name: "Leg press calf raises", sets: 3, resistanceType: "weight" },
  { name: "Donkey calf raises", sets: 4, resistanceType: "weight" },
  { name: "Smith machine calf raises", sets: 3, resistanceType: "weight" },
  { name: "Single-leg calf raises", sets: 4, resistanceType: "body" },
  { name: "Jump rope", sets: 3, resistanceType: "body" },
  { name: "Box jumps", sets: 4, resistanceType: "body" },
  {
    name: "Calf press on leg press machine",
    sets: 3,
    resistanceType: "weight",
  },
  { name: "Farmer's walk on toes", sets: 4, resistanceType: "body" },
  { name: "Calf raises on a step", sets: 3, resistanceType: "body" },
  { name: "Tibialis raises", sets: 4, resistanceType: "body" },
  { name: "Kettlebell calf raises", sets: 4, resistanceType: "weight" },
  { name: "Calf raises with dumbbells", sets: 3, resistanceType: "weight" },
  {
    name: "Calf raises on leg curl machine",
    sets: 4,
    resistanceType: "weight",
  },
  {
    name: "Calf raises on hack squat machine",
    sets: 3,
    resistanceType: "weight",
  },
  { name: "Calf raises on Smith machine", sets: 4, resistanceType: "weight" },
  {
    name: "Calf raises on seated leg press",
    sets: 3,
    resistanceType: "weight",
  },
  {
    name: "Calf raises on standing leg press",
    sets: 4,
    resistanceType: "weight",
  },
];

const bicepExercises = [
  { name: "Barbell curls", sets: 3, resistanceType: "weight" },
  { name: "Dumbbell curls", sets: 4, resistanceType: "weight" },
  { name: "Hammer curls", sets: 3, resistanceType: "weight" },
  { name: "Preacher curls", sets: 4, resistanceType: "weight" },
  { name: "Cable curls", sets: 3, resistanceType: "weight" },
  { name: "Concentration curls", sets: 4, resistanceType: "weight" },
  { name: "EZ-bar curls", sets: 3, resistanceType: "weight" },
  { name: "Incline dumbbell curls", sets: 4, resistanceType: "weight" },
  { name: "Spider curls", sets: 3, resistanceType: "weight" },
  { name: "Machine curls", sets: 4, resistanceType: "weight" },
  { name: "Zottman curls", sets: 4, resistanceType: "weight" },
  { name: "Reverse curls", sets: 3, resistanceType: "weight" },
  { name: "Drag curls", sets: 4, resistanceType: "weight" },
  { name: "Single-arm cable curls", sets: 3, resistanceType: "weight" },
  { name: "Kettlebell curls", sets: 4, resistanceType: "weight" },
  { name: "TRX bicep curls", sets: 3, resistanceType: "body" },
  { name: "Landmine curls", sets: 4, resistanceType: "weight" },
  { name: "Cross-body hammer curls", sets: 3, resistanceType: "weight" },
  { name: "Rope cable curls", sets: 4, resistanceType: "weight" },
];

const tricepExercises = [
  { name: "Tricep dips", sets: 3, resistanceType: "body" },
  { name: "Skull crushers", sets: 4, resistanceType: "weight" },
  { name: "Tricep pushdowns", sets: 3, resistanceType: "weight" },
  { name: "Overhead tricep extensions", sets: 4, resistanceType: "weight" },
  { name: "Close-grip bench press", sets: 3, resistanceType: "weight" },
  { name: "Tricep kickbacks", sets: 4, resistanceType: "weight" },
  { name: "Cable tricep extensions", sets: 3, resistanceType: "weight" },
  { name: "Single-arm tricep extensions", sets: 4, resistanceType: "weight" },
  { name: "Tricep press machine", sets: 3, resistanceType: "weight" },
  { name: "Diamond push-ups", sets: 3, resistanceType: "body" },
  { name: "Bench dips", sets: 4, resistanceType: "body" },
  { name: "TRX tricep extensions", sets: 3, resistanceType: "body" },
  { name: "Landmine tricep extensions", sets: 4, resistanceType: "weight" },
  { name: "Rope tricep pushdowns", sets: 3, resistanceType: "weight" },
  { name: "Reverse grip tricep pushdowns", sets: 4, resistanceType: "weight" },
  { name: "Tricep push-ups", sets: 3, resistanceType: "body" },
  { name: "Kettlebell tricep extensions", sets: 4, resistanceType: "weight" },
  { name: "Incline tricep extensions", sets: 3, resistanceType: "weight" },
  { name: "Decline tricep extensions", sets: 4, resistanceType: "weight" },
];

const forearmExercises = [
  { name: "Wrist curls", sets: 3, resistanceType: "weight" },
  { name: "Reverse wrist curls", sets: 4, resistanceType: "weight" },
  { name: "Hammer curls", sets: 3, resistanceType: "weight" },
  { name: "Farmer's walks", sets: 4, resistanceType: "weight" },
  { name: "Towel pull-ups", sets: 3, resistanceType: "body" },
  { name: "Plate pinches", sets: 4, resistanceType: "weight" },
  { name: "Wrist roller", sets: 3, resistanceType: "weight" },
  { name: "Finger curls", sets: 4, resistanceType: "weight" },
  { name: "Reverse curls", sets: 3, resistanceType: "weight" },
  { name: "Cable wrist curls", sets: 4, resistanceType: "weight" },
  { name: "Cable reverse wrist curls", sets: 3, resistanceType: "weight" },
  { name: "Barbell wrist curls", sets: 4, resistanceType: "weight" },
  { name: "Barbell reverse wrist curls", sets: 3, resistanceType: "weight" },
  { name: "Dumbbell wrist curls", sets: 4, resistanceType: "weight" },
  { name: "Dumbbell reverse wrist curls", sets: 3, resistanceType: "weight" },
  { name: "Kettlebell wrist curls", sets: 4, resistanceType: "weight" },
  { name: "Kettlebell reverse wrist curls", sets: 3, resistanceType: "weight" },
  { name: "Grip strengthener", sets: 4, resistanceType: "body" },
];

const abExercises = [
  { name: "Crunches", sets: 3, resistanceType: "body" },
  { name: "Leg raises", sets: 4, resistanceType: "body" },
  { name: "Planks", sets: 3, resistanceType: "body" },
  { name: "Russian twists", sets: 4, resistanceType: "body" },
  { name: "Bicycle crunches", sets: 3, resistanceType: "body" },
  { name: "Hanging leg raises", sets: 4, resistanceType: "body" },
  { name: "Mountain climbers", sets: 3, resistanceType: "body" },
  { name: "Sit-ups", sets: 4, resistanceType: "body" },
  { name: "Flutter kicks", sets: 3, resistanceType: "body" },
  { name: "V-ups", sets: 4, resistanceType: "body" },
  { name: "Toe touches", sets: 3, resistanceType: "body" },
  { name: "Side planks", sets: 4, resistanceType: "body" },
  { name: "Ab wheel rollouts", sets: 3, resistanceType: "body" },
  { name: "Cable crunches", sets: 4, resistanceType: "weight" },
];

function restTime(userAnswers) {
  time = 0;

  switch (userAnswers["What is your experience level?"]) {
    case "Beginner":
      time = 5;
      break;
    case "Novice":
      time = 4;
      break;
    case "Intermediate":
      time = 3;
      break;
    case "Advanced":
      time = 2;
      break;
    case "Elite":
      time = 1;
      break;
  }

  return time;
}

function numberOfExercises(userAnswers) {
  num = 0;

  switch (userAnswers["What is your experience level?"]) {
    case "Beginner":
      num = 3;
      break;
    case "Novice":
      num = 4;
      break;
    case "Intermediate":
      num = 5;
      break;
    case "Advanced":
      num = 5;
      break;
    case "Elite":
      num = 6;
      break;
  }

  return num;
}

function selectExercises(muscleGroups, numExercises) {
  // Define a list of exercises for each muscle group
  const exercises = {
    Chest: [
      { name: "Push-ups", reps: 10, sets: 2 },
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
      { name: "T-Bar Rows", reps: 8, sets: 4 },
      { name: "Face Pulls", reps: 12, sets: 3 },
      { name: "Seated Rows", reps: 10, sets: 3 },
    ],
    Shoulders: [
      { name: "Overhead Press", reps: 8, sets: 4 },
      { name: "Lateral Raises", reps: 12, sets: 3 },
      { name: "Front Raises", reps: 12, sets: 3 },
      { name: "Rear Delt Flys", reps: 12, sets: 3 },
      { name: "Arnold Press", reps: 10, sets: 3 },
      { name: "Dumbbell Shoulder Press", reps: 8, sets: 4 },
      { name: "Upright Rows", reps: 10, sets: 3 },
    ],
    Quads: [
      { name: "Back Squats", reps: 6, sets: 5 },
      { name: "Front Squats", reps: 8, sets: 4 },
      { name: "Leg Press", reps: 10, sets: 3 },
      { name: "Walking Lunges", reps: 12, sets: 3 },
      { name: "Leg Extensions", reps: 15, sets: 3 },
      { name: "Step-ups", reps: 10, sets: 3 },
      { name: "Split Squats", reps: 10, sets: 3 },
    ],
    Hamstrings: [
      { name: "Romanian Deadlifts", reps: 10, sets: 3 },
      { name: "Leg Curls", reps: 12, sets: 3 },
      { name: "Good Mornings", reps: 10, sets: 3 },
      { name: "Glute-Ham Raises", reps: 10, sets: 3 },
      { name: "Kettlebell Swings", reps: 15, sets: 3 },
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
      { name: "Dumbbell Curls", reps: 10, sets: 3 },
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
      { name: "Wrist Curls", reps: 15, sets: 3 },
      { name: "Reverse Wrist Curls", reps: 15, sets: 3 },
      { name: "Farmer's Carries", reps: 30, sets: 3 },
      { name: "Hammer Curls", reps: 12, sets: 3 },
      { name: "Reverse Curls", reps: 12, sets: 3 },
      { name: "Dead Hangs", reps: 30, sets: 3 },
    ],
    Abs: [
      { name: "Crunches", reps: 20, sets: 3 },
      { name: "Plank", reps: 60, sets: 3 }, // seconds
      { name: "Russian Twists", reps: 30, sets: 3 },
      { name: "Leg Raises", reps: 15, sets: 3 },
      { name: "Bicycle Crunches", reps: 30, sets: 3 },
      { name: "Mountain Climbers", reps: 40, sets: 3 },
      { name: "V-Ups", reps: 15, sets: 3 },
    ],
  };

  // Determine how many exercises to allocate to each muscle group
  const numGroups = muscleGroups.length;
  const exercisesPerGroup = Math.floor(numExercises / numGroups); // base number of exercises per group
  let remainder = numExercises % numGroups; // remaining exercises to distribute

  let selectedExercises = [];

  muscleGroups.forEach((group) => {
    // Get available exercises for the current group
    const availableExercises = exercises[group] || [];

    // Shuffle the exercises for randomness
    let shuffledExercises = [...availableExercises];
    for (let i = shuffledExercises.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledExercises[i], shuffledExercises[j]] = [
        shuffledExercises[j],
        shuffledExercises[i],
      ];
    }

    // If there are more exercises to allocate (remainder), give this group one extra exercise
    const numToSelect = exercisesPerGroup + (remainder > 0 ? 1 : 0);
    selectedExercises = selectedExercises.concat(
      shuffledExercises.slice(0, numToSelect)
    );

    // If there are leftovers, decrement the remainder counter
    if (remainder > 0) {
      remainder--;
    }
  });

  return selectedExercises;
}
