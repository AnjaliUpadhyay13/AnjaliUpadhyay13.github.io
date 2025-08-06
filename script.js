
const questions = [
  {
    question: "Who was the first Prime Minister of India?",
    options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhash Chandra Bose", "Dr. B.R. Ambedkar"],
    answer: "Jawaharlal Nehru"
  },
  {
    question: "Who is called the Father of the Nation?",
    options: ["Jawaharlal Nehru", "Subhash Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "When did India become independent?",
    options: ["15 August 1947", "26 January 1950", "2 October 1947", "1 April 1947"],
    answer: "15 August 1947"
  },
  {
    question: "Who wrote the Indian National Anthem?",
    options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Subhash Chandra Bose"],
    answer: "Rabindranath Tagore"
  },
  {
    question: "What is the name of the building where the President of India lives?",
    options: ["Rashtrapati Bhavan", "Parliament House", "Red Fort", "India Gate"],
    answer: "Rashtrapati Bhavan"
  },
  {
    question: "Which fort is located in Delhi and is red in color?",
    options: ["Red Fort", "Agra Fort", "Amber Fort", "Gwalior Fort"],
    answer: "Red Fort"
  },
  {
    question: "Who was known as 'Netaji'?",
    options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhash Chandra Bose", "Sardar Patel"],
    answer: "Subhash Chandra Bose"
  },
  {
    question: "What was the Quit India Movement?",
    options: ["A freedom movement", "A sports event", "A government scheme", "A cultural event"],
    answer: "A freedom movement"
  },
  {
    question: "Who was the first woman Prime Minister of India?",
    options: ["Indira Gandhi", "Sarojini Naidu", "Sushma Swaraj", "Rani Lakshmibai"],
    answer: "Indira Gandhi"
  },
  {
    question: "Where is India Gate located?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "Who was Rani Lakshmibai?",
    options: ["Queen of Jhansi", "First President", "Prime Minister", "Freedom Fighter"],
    answer: "Queen of Jhansi"
  },
  {
    question: "What is celebrated on 26th January?",
    options: ["Republic Day", "Independence Day", "Children's Day", "Teacher's Day"],
    answer: "Republic Day"
  },
  {
    question: "Which famous leader was born on 2nd October?",
    options: ["Mahatma Gandhi", "Subhash Chandra Bose", "Bhagat Singh", "Nehru"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "Who wrote 'Vande Mataram'?",
    options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Gandhi", "Sardar Patel"],
    answer: "Bankim Chandra Chatterjee"
  },
  {
    question: "Which famous place is located in Agra?",
    options: ["Taj Mahal", "Red Fort", "Qutub Minar", "Charminar"],
    answer: "Taj Mahal"
  },
  {
    question: "Who united India after independence?",
    options: ["Sardar Vallabhbhai Patel", "Nehru", "Rajendra Prasad", "Ambedkar"],
    answer: "Sardar Vallabhbhai Patel"
  },
  {
    question: "Which Indian monument was built by Shah Jahan?",
    options: ["Taj Mahal", "Charminar", "Lotus Temple", "India Gate"],
    answer: "Taj Mahal"
  },
  {
    question: "Who was the first President of India?",
    options: ["Dr. Rajendra Prasad", "Dr. B.R. Ambedkar", "Sarvepalli Radhakrishnan", "Nehru"],
    answer: "Dr. Rajendra Prasad"
  },
  {
    question: "Where is the Parliament of India located?",
    options: ["New Delhi", "Mumbai", "Hyderabad", "Kolkata"],
    answer: "New Delhi"
  },
  {
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Hyderabad", "Bangalore"],
    answer: "New Delhi"
  },
  {
    question: "What color is the Indian flag's top band?",
    options: ["Saffron", "White", "Green", "Blue"],
    answer: "Saffron"
  },
  {
    question: "Who led the Salt March?",
    options: ["Mahatma Gandhi", "Nehru", "Bose", "Patel"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "What is Mahatma Gandhi’s full name?",
    options: ["Mohandas Karamchand Gandhi", "Mohanlal Gandhi", "Mahesh Gandhi", "Karan Gandhi"],
    answer: "Mohandas Karamchand Gandhi"
  },
  {
    question: "Which city is known for the Jallianwala Bagh tragedy?",
    options: ["Amritsar", "Delhi", "Mumbai", "Lucknow"],
    answer: "Amritsar"
  },
  {
    question: "Who was known as the 'Iron Man of India'?",
    options: ["Sardar Patel", "Nehru", "Ambedkar", "Gandhi"],
    answer: "Sardar Patel"
  },
  {
    question: "Which Indian leader is called 'Chacha Nehru'?",
    options: ["Jawaharlal Nehru", "Gandhi", "Patel", "Radhakrishnan"],
    answer: "Jawaharlal Nehru"
  },
  {
    question: "What is the name of India's national song?",
    options: ["Vande Mataram", "Jana Gana Mana", "Sare Jahan Se Achha", "Ae Mere Watan"],
    answer: "Vande Mataram"
  },
  {
    question: "Which freedom fighter threw bombs in the Central Assembly?",
    options: ["Bhagat Singh", "Gandhi", "Nehru", "Rajguru"],
    answer: "Bhagat Singh"
  },
  {
    question: "Which year did India become a republic?",
    options: ["1950", "1947", "1948", "1952"],
    answer: "1950"
  },
  {
    question: "Who was the British ruler when India got independence?",
    options: ["Lord Mountbatten", "Lord Curzon", "Queen Victoria", "Lord Dalhousie"],
    answer: "Lord Mountbatten"
  },
  {
    question: "Who formed the Azad Hind Fauj?",
    options: ["Subhash Chandra Bose", "Nehru", "Gandhi", "Patel"],
    answer: "Subhash Chandra Bose"
  },
  {
    question: "What was the main cause of the 1857 revolt?",
    options: ["British rule", "Partition", "Railways", "New taxes"],
    answer: "British rule"
  },
  {
    question: "Which battle was fought in 1526?",
    options: ["First Battle of Panipat", "Battle of Plassey", "Third Battle of Panipat", "Battle of Haldighati"],
    answer: "First Battle of Panipat"
  },
  {
    question: "Who was the last Mughal emperor?",
    options: ["Bahadur Shah Zafar", "Akbar", "Aurangzeb", "Shah Jahan"],
    answer: "Bahadur Shah Zafar"
  },
  {
    question: "Who was Tipu Sultan?",
    options: ["Ruler of Mysore", "King of Delhi", "Raja of Punjab", "Ruler of Bengal"],
    answer: "Ruler of Mysore"
  },
  {
    question: "Who built the Qutub Minar?",
    options: ["Qutb-ud-din Aibak", "Akbar", "Shah Jahan", "Aurangzeb"],
    answer: "Qutb-ud-din Aibak"
  },
  {
    question: "Where is the Hawa Mahal located?",
    options: ["Jaipur", "Delhi", "Agra", "Mumbai"],
    answer: "Jaipur"
  },
  {
    question: "Who was Ashoka?",
    options: ["A great Mauryan Emperor", "A Mughal ruler", "British officer", "Freedom fighter"],
    answer: "A great Mauryan Emperor"
  },
  {
    question: "What symbol is on Ashoka's Lion Capital?",
    options: ["Four lions", "Three tigers", "One eagle", "Two bulls"],
    answer: "Four lions"
  },
  {
    question: "Which is India’s national emblem?",
    options: ["Lion Capital", "Tiger", "Elephant", "Peacock"],
    answer: "Lion Capital"
  },
  {
    question: "Where is Raj Ghat?",
    options: ["New Delhi", "Mumbai", "Agra", "Lucknow"],
    answer: "New Delhi"
  },
  {
    question: "Whose samadhi is at Raj Ghat?",
    options: ["Mahatma Gandhi", "Nehru", "Patel", "Ambedkar"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "Which famous freedom fighter is remembered for Dandi March?",
    options: ["Gandhi", "Nehru", "Bose", "Ambedkar"],
    answer: "Gandhi"
  },
  {
    question: "What is celebrated on 14th November?",
    options: ["Children’s Day", "Republic Day", "Teacher’s Day", "Gandhi Jayanti"],
    answer: "Children’s Day"
  },
  {
    question: "Who was Lal Bahadur Shastri?",
    options: ["Second Prime Minister of India", "First President", "Poet", "Freedom Fighter"],
    answer: "Second Prime Minister of India"
  },
  {
    question: "What slogan did Lal Bahadur Shastri give?",
    options: ["Jai Jawan Jai Kisan", "Inquilab Zindabad", "Do or Die", "Vande Mataram"],
    answer: "Jai Jawan Jai Kisan"
  },
  {
    question: "Where is the India Gate located?",
    options: ["New Delhi", "Chennai", "Kolkata", "Ahmedabad"],
    answer: "New Delhi"
  },
  {
    question: "Which river flows near the Red Fort?",
    options: ["Yamuna", "Ganga", "Narmada", "Krishna"],
    answer: "Yamuna"
  },
{
  question: "Who was the first woman Prime Minister of India?",
  options: ["Indira Gandhi", "Sarojini Naidu", "Rani Lakshmibai", "Sonia Gandhi"],
  answer: "Indira Gandhi"
},
{
  question: "What is the name of the fort built by Shah Jahan in Delhi?",
  options: ["Red Fort", "Agra Fort", "Golconda Fort", "Chittorgarh Fort"],
  answer: "Red Fort"
}
  // Add more questions as needed
];

let currentIndex = 0;
const batchSize = 5;
let score = 0;
let answeredCount = 0;

const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const quizInterface = document.getElementById('quiz-interface');
const quizContainer = document.getElementById('quiz-container');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const scoreDisplay = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const resultDiv = document.getElementById('result');
const playAgainBtn = document.getElementById("play-again-btn");
const resultContainer = document.getElementById("result");
const congratsMessage = document.getElementById("congrats-message");

window.onload = function () {
  const startBtn = document.getElementById("startBtn");

  startBtn.addEventListener("click", function () {
    document.querySelector(".start-screen").style.display = "none";
    document.querySelector(".quiz-container").style.display = "block";
  });
};



startBtn.onclick = () => {
  startScreen.style.display = 'none';
  quizInterface.style.display = 'block';
  loadBatch();
  updateProgressBar();
  startTimer();
};

function loadBatch() {
  quizContainer.innerHTML = "";

  const batch = questions.slice(currentIndex, currentIndex + batchSize);

  batch.forEach((q, i) => {
    const card = document.createElement('div');
    card.className = 'question-card';

    const qText = document.createElement('h3');
    qText.textContent = `${currentIndex + i + 1}. ${q.question}`;
    card.appendChild(qText);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';

    const feedback = document.createElement('p');
    feedback.style.fontWeight = 'bold';
    feedback.style.marginTop = '10px';

    let answered = false;

    q.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;

      btn.onclick = () => {
        if (answered) return;
        answered = true;
        answeredCount++;

        const buttons = btn.parentElement.querySelectorAll('button');
        buttons.forEach(b => b.disabled = true);

        const correctBtn = Array.from(buttons).find(b => b.textContent === q.answer);
        correctBtn.classList.add('correct');

        if (option === q.answer) {
          feedback.textContent = "✅ Correct!";
          feedback.style.color = "green";
          score++;
          scoreDisplay.textContent = `Score: ${score}`;
        } else {
          btn.classList.add('wrong');
          feedback.innerHTML = `<span style="color: red;">OOPS...! Wrong Answer</span><br><span>The correct answer is: <strong>${q.answer}</strong></span>`;
        }
        updateProgressBar();
      };

      optionsDiv.appendChild(btn);
    });

    card.appendChild(optionsDiv);
    card.appendChild(feedback);
    quizContainer.appendChild(card);
  });

  if (currentIndex + batchSize >= questions.length) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline-block';
  }
  startBtn.addEventListener("click", function () {
  document.querySelector(".start-screen").style.display = "none";
  document.querySelector(".quiz-container").style.display = "block";
});
}

function updateProgressBar() {
  const percentage = Math.min((answeredCount / questions.length) * 100, 100);
  progressBar.style.width = `${percentage}%`;
}

nextBtn.onclick = () => {
  currentIndex += batchSize;
  loadBatch();
};

submitBtn.onclick = () => {
    clearInterval(timerInterval);
    quizContainer.style.display = "none";
    submitBtn.style.display = "none";
    nextBtn.style.display = "none";
    scoreDisplay.style.display = "none";
    progressBar.style.display = "none";
    resultContainer.innerHTML = `
        <h1>🥳Congratulations! You did a great job!🎉</h1>
        <h3>Total Score: ${score} / ${questions.length}</h3>
        
    `;
    document.body.style.overflow = 'hidden'; 
    // to show the Play Again button
    playAgainBtn.style.display = "block";
};

playAgainBtn.onclick = () => {
    window.location.reload(); 
};

let timeLimit = 300; // (5 minutes)
let timerInterval;

function startTimer() {
    const timeDisplay = document.getElementById("time-left");
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLimit / 60);
        const seconds = timeLimit % 60;
        timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timeLimit--;

        if (timeLimit < 0) {
            clearInterval(timerInterval);
            autoSubmitQuiz();
        }
    }, 1000);
}

function autoSubmitQuiz() {
    alert("Time's up! Submitting your quiz.");
    submitBtn.click(); 
}

window.onload = function () {
  const startBtn = document.getElementById("startBtn");
  if (startBtn) {
    startBtn.addEventListener("click", startQuiz);
  }
};







