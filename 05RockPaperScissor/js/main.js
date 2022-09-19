let compScore = 0;
let userScore = 0;

// getting all the DOM elements
const userScoreVal = document.getElementById("userScoreVal");
const compScoreVal = document.getElementById("compScoreVal");
const resultUserStat = document.getElementById("result-user-stat");
const resultCompStat = document.getElementById("result-comp-stat");
const resultFinalStat = document.getElementById("result-final-stat");

// rock paper scissor dom elements
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

// all choices Array
const choice = document.querySelectorAll(".choice");

// variable for user and computer for choicing r, p, s
let userChoice = null;
let compChoice = null;

// computer choice from random number
const computerChoice = () => {
  const compRandom = Math.floor(Math.random() * 3) + 1;
  let compMsg;

  if (compRandom === 1) {
    compMsg = "Computer: Rock";
    resultCompStat.innerHTML = compMsg;
    return (compChoice = "r");
  } else if (compRandom === 2) {
    compMsg = "Computer: Paper";
    resultCompStat.innerHTML = compMsg;
    return (compChoice = "p");
  } else if (compRandom === 3) {
    compMsg = "Computer: Scissor";
    resultCompStat.innerHTML = compMsg;
    return (compChoice = "s");
  }
};

const computerWon = () => {
  compScoreVal.innerText = Number(compScoreVal.innerText) + 1;
  return "Computer Won";
};
const userWon = () => {
  userScoreVal.innerText = Number(userScoreVal.innerText) + 1;
  return "User Won";
};

// finding result logic
const findAnswer = (userChoice, computerChoice) => {
  if (
    (userChoice === "r" && computerChoice === "r") ||
    (userChoice === "p" && computerChoice === "p") ||
    (userChoice === "s" && computerChoice === "s")
  ) {
    return "Match Draw";
  }
  if (userChoice === "r" && computerChoice === "p") {
    return computerWon();
  } else if (userChoice === "r" && computerChoice === "s") {
    return userWon();
  } else if (userChoice === "p" && computerChoice === "s") {
    return computerWon();
  } else if (userChoice === "p" && computerChoice === "r") {
    return userWon();
  } else if (userChoice === "s" && computerChoice === "r") {
    return computerWon();
  } else if (userChoice === "s" && computerChoice === "p") {
    return userWon();
  }
};

// event listener on all three choices
choice.forEach((choiceElement) => {
  choiceElement.addEventListener("click", () => {
    const answerElement = document.getElementById("answer");
    if (answerElement) {
      answerElement.remove();
    }
    // getting computer choice
    computerChoice();
    console.log("Computer choice : " + compChoice);

    // getting user choice
    let userMsg;
    userChoice = choiceElement.getAttribute("id");
    if (userChoice == "r") {
      userMsg = "User: Rock";
    } else if (userChoice == "p") {
      userMsg = "User: Paper";
    } else if (userChoice == "s") {
      userMsg = "User: Scissor";
    }
    resultUserStat.innerHTML = userMsg;

    console.log("User choice : " + userChoice);

    // getting results
    const result = findAnswer(userChoice, compChoice);
    resultFinalStat.innerHTML = "Winner: " + result;
  });
});
