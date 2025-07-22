/* Example questions: mix text-only, image-only, and both*/
const quizQuestions = [
  {
    question: "What’s your ideal concert vibe?",
    answers: [
      { text: "Dancing in the front row, screaming every lyric", team: "S" },
      { text: "Swaying with the crowd, soaking in the atmosphere", team: "S" },
      { text: "Capturing every moment for your fan account", team: "R" },
      { text: "Watching quietly from the back, feeling every beat", team: "R" }
    ]
  },
  {
    question: "Which is your favorite red outfit?",
    answers: [
      { img: "images/RedFit1.jpg", team: "R" },
      { img: "images/RedFit2.jpg", team: "S" },
      { img: "images/RedFit3.jpg", team: "S" },
      { img: "images/RedFit4.jpg", team: "R" }
    ]
  },
  {
    question: "What's your Favorite ThamePo OST?",
    answers: [
      { text: "Destined", img: "images/Destined.jpg", team: "R" },
      { text: "Your Last", img: "images/YourLast.jpg", team: "R" },
      { text: "5 cm", img: "images/5cm.jpg", team: "S" },
      { text: "Good Time", img: "images/GoodTime.jpg", team: "S" }
    ]
  },
  {
    question: "Which is your favorite WilliamEst private photoshoot?",
    answers: [
      { img: "images/Hearts.jpg", team: "S" },
      { img: "images/christmas.jpg", team: "R" },
      { img: "images/Cards.jpg", team: "S" },
      { img: "images/RWRB.jpeg", team: "R" }
    ]
  },
  {
    question: "Which is your favorite Zaven outfit release?",
    answers: [
      { img: "images/zaven5.jpg", team: "R" },
      { img: "images/Zaven1.jpg", team: "S" },
      { img: "images/zaven4.jpg", team: "R" },
      { img: "images/zaven3.jpg", team: "S" }
    ]
  },
  {
    question: "What’s your go-to fan chant style?",
    answers: [
      { text: "You’ve memorized every chant and you’re leading the crowd with idol-level precision", team: "S" },
      { text: "You chant with your heart, letting the lyrics and love guide your voice.", team: "R" },
      { text: "You remix chants, add your own flair, or even write custom lines for your bias.", team: "S" },
      { text: "You don’t chant out loud, but you mouth every word and cheer with your whole soul.", team: "R" }
    ]
  },
    {
    question: "Which accessory do you like the most?",
    answers: [
      { text: "Bag", img: "images/Bag.jpg", team: "R" },
      { text: "Glasses", img: "images/Glasses.jpg", team: "S" },
      { text: "Cap", img: "images/Cap.jpg", team: "S" },
      { text: "Watch", img: "images/Watch.jpg", team: "R" }
    ]
  },
    {
    question: "Which WilliamEst LOL fit do you like the most?",
    answers: [
      { img: "images/LOL4.jpg", team: "S" },
      { img: "images/LOL2.jpg", team: "S" },
      { img: "images/LOL3.jpg", team: "R" },
      { img: "images/LOL1.jpg", team: "R" }
    ]
  },
    {
    question: "If you could spend a day with WilliamEst, you’d:",
    answers: [
      { text: "🌆 Go on an adventure-packed day exploring the city", team: "S" },
      { text: "☕ Chill at a café, talking about life and music", team: "R" },
      { text: "🎮 Stay in and have a cozy game or movie marathon", team: "R" },
      { text: "🎨 Join them in a creative workshop—writing lyrics, painting, or crafting fan merch", team: "S" }
    ]
  },
    {
    question: "Which is your favorite Est brand collaboration?",
    answers: [
      { text: "BVLGARI", img: "images/Bvlgari.jpg", team: "S" },
      { text: "MAYBELLINE", img: "images/Maybelline.jpg", team: "S" },
      { text: "CHRISTIAN LOUBOUTIN", img: "images/CHRISTIAN LOUBOUTIN.jpg", team: "R" },
      { text: "POLO RALPH LAUREN", img: "images/Polo.jpg", team: "R" }
    ]
  },
];

/* Team descriptions */
const teamDescriptions = {
  "R": "Team Red Thread relies on each other and values tradition. Welcome aboard!😊",
  "S": "Welcome to Team Songkran, where imagination knows no bounds. 😉"
};

/* Team images */
const teamImages = {
  "R": ["images/Red Thread Header.png"],
  "S": ["images/Songkran Header.png"]
};

// Tiebreaker question (must have answers that assign to A or B)
const tieBreaker = {
  question: "Tiebreaker! How do you show your love for WilliamEst?",
  answers: [
    { text: "Hyping them on X, Instagram and Tiktok by liking and commenting on every post", team: "S" },
    { text: "Creating fan edits, Tiktoks, Fan letters", team: "S" },
    { text: "Trending for every event",  team: "R" },
    { text: "Watching ThamePo series again and again", team: "R" }
  ]
};

function renderQuiz() {
  const container = document.getElementById('question-container');
  container.innerHTML = "";
  quizQuestions.forEach((q, qi) => {
    const qDiv = document.createElement('div');
    qDiv.className = "quiz-question-block";
    const qTitle = document.createElement('div');
    qTitle.className = "question";
    qTitle.textContent = q.question;
    qDiv.appendChild(qTitle);

    const ansDiv = document.createElement('div');
    ansDiv.className = "answers";
    q.answers.forEach((ans, ai) => {
      const label = document.createElement('label');
      label.style.display = "inline-block";
      label.style.margin = "0.5em";
      const radio = document.createElement('input');
      radio.type = "radio";
      radio.name = `q${qi}`;
      radio.value = ai;
      label.appendChild(radio);
      if (ans.img) {
        const img = document.createElement('img');
        img.src = ans.img;
        img.alt = ans.text || "Answer image";
        img.style.height = "60px";
        img.style.borderRadius = "6px";
        img.style.display = "block";
        label.appendChild(img);
      }
      if (ans.text) {
        const span = document.createElement('span');
        span.textContent = ans.text;
        label.appendChild(span);
      }
      ansDiv.appendChild(label);
    });
    qDiv.appendChild(ansDiv);
    container.appendChild(qDiv);
  });

  // Add Submit button
  const submitBtn = document.createElement('button');
  submitBtn.textContent = "Submit Quiz";
  submitBtn.onclick = handleSubmit;
  submitBtn.className = "submit-quiz-btn";
  container.appendChild(submitBtn);
}

function handleSubmit() {
  // Tally scores
  let scores = { R: 0, S: 0 };
  let allAnswered = true;
  quizQuestions.forEach((q, qi) => {
    const selected = document.querySelector(`input[name="q${qi}"]:checked`);
    if (!selected) {
      allAnswered = false;
      return;
    }
    const ans = q.answers[Number(selected.value)];
    scores[ans.team]++;
  });

  if (!allAnswered) {
    alert("Please answer all questions before submitting!");
    return;
  }

  if (scores.R === scores.S) {
    // Show tiebreaker
    renderTieBreaker(scores);
    return;
  }
  showResult(scores);
}

function renderTieBreaker(prevScores) {
  const container = document.getElementById('question-container');
  container.innerHTML = "";
  const qDiv = document.createElement('div');
  qDiv.className = "quiz-question-block";
  const qTitle = document.createElement('div');
  qTitle.className = "question";
  qTitle.textContent = tieBreaker.question;
  qDiv.appendChild(qTitle);

  const ansDiv = document.createElement('div');
  ansDiv.className = "answers";
  tieBreaker.answers.forEach((ans, ai) => {
    const label = document.createElement('label');
    label.style.display = "inline-block";
    label.style.margin = "0.5em";
    const radio = document.createElement('input');
    radio.type = "radio";
    radio.name = "tiebreaker";
    radio.value = ai;
    label.appendChild(radio);
    if (ans.img) {
      const img = document.createElement('img');
      img.src = ans.img;
      img.alt = ans.text || "Answer image";
      img.style.height = "60px";
      img.style.borderRadius = "6px";
      img.style.display = "block";
      label.appendChild(img);
    }
    if (ans.text) {
      const span = document.createElement('span');
      span.textContent = ans.text;
      label.appendChild(span);
    }
    ansDiv.appendChild(label);
  });
  qDiv.appendChild(ansDiv);
  container.appendChild(qDiv);

  // Add Submit button
  const submitBtn = document.createElement('button');
  submitBtn.textContent = "Submit Tiebreaker";
  submitBtn.onclick = function() {
    const selected = document.querySelector(`input[name="tiebreaker"]:checked`);
    if (!selected) {
      alert("Please select a tiebreaker answer!");
      return;
    }
    const ans = tieBreaker.answers[Number(selected.value)];
    prevScores[ans.team]++;
    showResult(prevScores);
  };
  submitBtn.className = "submit-quiz-btn";
  container.appendChild(submitBtn);
}