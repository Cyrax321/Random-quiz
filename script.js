const startQuizButton = document.getElementById('start-quiz');
const quizScreen = document.getElementById('quiz-screen');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultScreen = document.getElementById('result-screen');
const scoreDisplay = document.getElementById('score-display');
const restartQuizButton = document.getElementById('restart-quiz');
const welcomeScreen = document.getElementById('welcome-screen');

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// Fetch random questions from Open Trivia API
async function fetchQuestions() {
  const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
    const data = await response.json();
      questions = data.results;
      }

      // Start the quiz
      startQuizButton.addEventListener('click', async () => {
        welcomeScreen.style.display = 'none';
          quizScreen.style.display = 'block';
            await fetchQuestions();
              displayQuestion();
              });

              // Display the current question and answers
              function displayQuestion() {
                resetState();
                  const currentQuestion = questions[currentQuestionIndex];
                    questionText.innerHTML = currentQuestion.question;

                      const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
                        answers.sort(() => Math.random() - 0.5); // Shuffle answers

                          answers.forEach(answer => {
                              const button = document.createElement('button');
                                  button.innerText = answer;
                                      button.classList.add('btn');
                                          button.addEventListener('click', () => selectAnswer(button, currentQuestion.correct_answer));
                                              answerButtons.appendChild(button);
                                                });
                                                }

                                                // Reset the state for a new question
                                                function resetState() {
                                                  nextButton.style.display = 'none';
                                                    answerButtons.innerHTML = '';
                                                    }

                                                    // Handle answer selection
                                                    function selectAnswer(button, correctAnswer) {
                                                      const isCorrect = button.innerText === correctAnswer;
                                                        if (isCorrect) {
                                                            button.style.backgroundColor = 'green';
                                                                score++;
                                                                  } else {
                                                                      button.style.backgroundColor = 'red';
                                                                        }

                                                                          Array.from(answerButtons.children).forEach(btn => {
                                                                              btn.disabled = true;
                                                                                  if (btn.innerText === correctAnswer) {
                                                                                        btn.style.backgroundColor = 'green';
                                                                                            }
                                                                                              });

                                                                                                nextButton.style.display = 'block';
                                                                                                }

                                                                                                // Move to the next question or end the quiz
                                                                                                nextButton.addEventListener('click', () => {
                                                                                                  currentQuestionIndex++;
                                                                                                    if (currentQuestionIndex < questions.length) {
                                                                                                        displayQuestion();
                                                                                                          } else {
                                                                                                              endQuiz();
                                                                                                                }
                                                                                                                });

                                                                                                                // End the quiz and show the score
                                                                                                                function endQuiz() {
                                                                                                                  quizScreen.style.display = 'none';
                                                                                                                    resultScreen.style.display = 'block';
                                                                                                                      scoreDisplay.innerText = `You scored ${score} out of ${questions.length}`;
                                                                                                                      }

                                                                                                                      // Restart the quiz
                                                                                                                      restartQuizButton.addEventListener('click', () => {
                                                                                                                        currentQuestionIndex = 0;
                                                                                                                          score = 0;
                                                                                                                            resultScreen.style.display = 'none';
                                                                                                                              welcomeScreen.style.display = 'block';
                                                                                                                              });
                                                                                                                              