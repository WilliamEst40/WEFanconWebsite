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

let current = 0;
let scores = { R: 0, S: 0 };
let isTieBreaker = false;

function showQuestion() {
  if (current >= quizQuestions.length) 
    {
      // Check for tie
      if (scores.R === scores.S && !isTieBreaker) {
        isTieBreaker = true;
        showTieBreaker();
        return;
      } else {
      showResult();
      return;
    }
  }

  const q = quizQuestions[current];
  document.getElementById('question').textContent = q.question;
  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';
  q.answers.forEach((ans) => {
    const btn = document.createElement('button');
    btn.onclick = () => {
      scores[ans.team]++;
      current++;
      showQuestion();
    };
    if (ans.img) {
      const img = document.createElement('img');
      img.src = ans.img;
      img.alt = ans.text || "Answer choice";
      btn.appendChild(img);
    }
    if (ans.text) {
      const span = document.createElement('span');
      span.textContent = ans.text;
      btn.appendChild(span);
    }
    answersDiv.appendChild(btn);
  });
}

function showTieBreaker() {
  document.getElementById('question').textContent = tieBreaker.question;
  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';
  tieBreaker.answers.forEach((ans) => {
    const btn = document.createElement('button');
    btn.onclick = () => {
      // Only add one point to the selected team for tiebreaker
      scores[ans.team]++;
      showResult();
    };
    if (ans.img) {
      const img = document.createElement('img');
      img.src = ans.img;
      img.alt = ans.text || "Answer choice";
      btn.appendChild(img);
    }
    if (ans.text) {
      const span = document.createElement('span');
      span.textContent = ans.text;
      btn.appendChild(span);
    }
    answersDiv.appendChild(btn);
  });
}

function showResult() {
  document.getElementById('question-container').style.display = 'none';
  const resultDiv = document.getElementById('result');
  // In rare case of another tie, default to Team R
  let winner = scores.R > scores.S ? "Red Thread" : "Songkran";
  let imagesHTML = teamImages[winner]
    .map(src => `<img src="${src}" alt="Team ${winner} Profile Header">`)
    .join('');
  resultDiv.innerHTML = `
    <div>You belong to <b>Team ${winner}</b>!</div>
    <p>${teamDescriptions[winner]}</p>
    <div class="team-header">
      <b>Your Team Profile Header:</b><br>
      ${imagesHTML}
      <div style="font-size:.95em;margin-top:.5em;">(Right-click and save to use on X as your profile header!)</div>
    </div>
  `;
  resultDiv.style.display = '';
}

showQuestion();