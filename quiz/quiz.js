/* Example questions: mix text-only, image-only, and both*/
const quizQuestions = [
  {
    question: "What’s your ideal concert vibe?",
    answers: [
      { text: "Dancing in the front row, screaming every lyric", team: "R" },
      { text: "Swaying with the crowd, soaking in the atmosphere", team: "S" },
      { text: "Capturing every moment for your fan account", team: "R" },
      { text: "Watching quietly from the back, feeling every beat", team: "S" }
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
      { text: "Your Last", img: "images/YourLast.jpg", team: "S" },
      { text: "5 cm", img: "images/5cm.jpg", team: "R" },
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
      { text: "Cap", img: "images/Cap.jpg", team: "R" },
      { text: "Watch", img: "images/Watch.jpg", team: "S" }
    ]
  },
    {
    question: "Which WilliamEst LOL fit do you like the most?",
    answers: [
      { img: "images/LOL4.jpg", team: "S" },
      { img: "images/LOL2.jpg", team: "R" },
      { img: "images/LOL3.jpg", team: "R" },
      { img: "images/LOL1.jpg", team: "S" }
    ]
  },
    {
    question: "If you could spend a day with WilliamEst, you’d:",
    answers: [
      { text: "🌆 Go on an adventure-packed day exploring the city", team: "R" },
      { text: "☕ Chill at a café, talking about life and music", team: "S" },
      { text: "🎮 Stay in and have a cozy game or movie marathon", team: "S" },
      { text: "🎨 Join them in a creative workshop—writing lyrics, painting, or crafting fan merch", team: "R" }
    ]
  },
    {
    question: "Which is your favorite Est brand collaboration?",
    answers: [
      { text: "BVLGARI", img: "images/Bvlgari.jpg", team: "R" },
      { text: "MAYBELLINE", img: "images/Maybelline.jpg", team: "R" },
      { text: "CHRISTIAN LOUBOUTIN", img: "images/CHRISTIAN LOUBOUTIN.jpg", team: "S" },
      { text: "POLO RALPH LAUREN", img: "images/Polo.jpg", team: "S" }
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
  "R": ["images/RedThreadHeader.png"],
  "S": ["images/SongkranHeader.png"]
};

const teamName = {
	"R" : "TEAM RED THREAD 🌍🎸🦈",
	"S" : "TEAM SONGKRAN 🌊🎸🦈"
}

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

function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

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
    const shuffledAnswers = shuffleArray(q.answers);
	shuffledAnswers.forEach((ans, ai) => {
      const label = document.createElement('label');
      label.style.display = "block";
      label.style.margin = "0.5em 0";
      const radio = document.createElement('input');
      radio.type = "radio";
      radio.name = `q${qi}`;
      radio.value = q.answers.indexOf(ans); // preserve original index for scoring
      label.appendChild(radio);
      if (ans.text) {
        const span = document.createElement('span');
        span.textContent = ans.text;
        label.appendChild(span);
      }
      if (ans.img) {
        const img = document.createElement('img');
        img.src = ans.img;
        img.alt = ans.text || "Answer image";
        img.style.height = "200px";
        img.style.borderRadius = "6px";
        img.style.display = "block";
        label.appendChild(img);
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
  document.getElementsByClassName("quiz-intro")[0].style.display = 'none';
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
    label.style.display = "block";
    label.style.margin = "0.5em 0";
    const radio = document.createElement('input');
    radio.type = "radio";
    radio.name = "tiebreaker";
    radio.value = ai;
    label.appendChild(radio);
	if (ans.text) {
      const span = document.createElement('span');
      span.textContent = ans.text;
      label.appendChild(span);
    }
    if (ans.img) {
      const img = document.createElement('img');
      img.src = ans.img;
      img.alt = ans.text || "Answer image";
      img.style.height = "250px";
      img.style.borderRadius = "6px";
      img.style.display = "block";
      label.appendChild(img);
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

function showResult(scores) {
  document.getElementsByClassName("quiz-intro")[0].style.display = 'none';
  document.getElementById('quiz').style.display = 'none';
  const resultDiv = document.getElementById('result');
  resultDiv.style.display = '';
  let winner = scores.R > scores.S ? "R" : "S";
  let imagesHTML = teamImages[winner]
    .map(src => `<img src="${src}" alt="Team ${winner} profile header" style="height:300px;margin:1em 1em 0 0;border-radius:8px;border:1px solid #ccc;">`)
    .join('');
  if (winner === "R")
  {
	resultDiv.classList.add('result-redthread');
  }
  else 
  { 
	resultDiv.classList.add('result-songkran'); 
  }
		
  resultDiv.innerHTML = `
    <p>${teamDescriptions[winner]}</p>
    <div class="team-header">
      <b>Your Team Header:</b><br>
      ${imagesHTML}
      <div style="font-size:.95em;margin-top:.5em;">(Right-click and save. Set this as your profile header on X for Fancon!)</div>
    </div>
	<p> Change your profile name to include <br>  ${teamName[winner]} </p>
	<p> Change your profile picture to: </p>
	<div class="profile">
		<img src="images/Profile.jpg"/>
	</div>
  `;
}

window.onload = function() {
  document.getElementById('result').style.display = 'none';
  document.getElementById('question-container').style.display = '';
  renderQuiz();
};