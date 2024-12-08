
# Random Quiz Generator

## Project Overview

The **5 Random Quiz Generator** is a web-based quiz application that dynamically generates a set of **5 random general knowledge questions** using the **Open Trivia Database API**. The app provides users with an interactive and responsive experience, featuring **instant feedback** on answers and a final score at the end of the quiz. The sleek **dark theme** ensures a professional look and feel.

This application is built using **HTML**, **CSS**, and **JavaScript**, and it leverages the Open Trivia Database API to fetch random questions in real time.

## Features

- **Dynamic Question Fetching**: The app fetches 5 random general knowledge questions from the Open Trivia Database API each time it is loaded.
- **Multiple-Choice**: Users can select answers from multiple-choice options.
- **Instant Feedback**: Correct or incorrect answers are highlighted immediately after selection.
- **Score Calculation**: At the end of the quiz, users see their total score based on the number of correct answers.
- **Dark Theme**: A sleek, modern dark theme enhances user experience.
- **Responsive Design**: The layout adapts seamlessly to various screen sizes, ensuring a smooth experience on both desktop and mobile devices.

## Technologies

- **HTML5**: Used for structuring the content and UI of the quiz.
- **CSS3**: Provides styling for the dark theme and responsive design.
- **JavaScript**: Handles the logic for fetching questions from the API, managing user interaction, and calculating the score.
- **Open Trivia Database API**: Used to fetch random general knowledge questions for the quiz.

## Getting Started

### Prerequisites

To use this application, you need:
- A modern web browser (e.g., Google Chrome, Firefox, Safari)
- Internet connection (to fetch questions from the Open Trivia Database API)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/random-quiz-generator.git
   ```

2. **Open the Project**:
   - Navigate to the cloned project directory.
   - Open the `index.html` file in your preferred web browser.

3. **Start the Quiz**:
   - The app will automatically load 5 random general knowledge questions from the Open Trivia Database API.
   - Select your answers, and once completed, your score will be displayed.

## File Structure

```
random-quiz-generator/
│
├── index.html         # Main HTML file containing the structure of the quiz
├── styles.css         # CSS file for styling the quiz (dark theme)
└── script.js          # JavaScript file for fetching questions from the API and handling quiz logic
```

### index.html
The main HTML file, which contains the structure and layout of the quiz, including the question and answer options.

### styles.css
The CSS file that applies a dark theme, as well as ensuring the layout is responsive and visually appealing.

### script.js
The JavaScript file responsible for fetching questions from the Open Trivia Database API, handling the quiz interaction, and calculating the final score.

## Example Questions

Here are a few examples of the types of questions fetched from the Open Trivia Database API:

1. **What is the tallest mountain in the world?**
   - A) K2  
   - B) Kangchenjunga  
   - C) Mount Everest  
   - D) Lhotse  
   **Correct Answer**: C) Mount Everest  

2. **Who painted *Starry Night*?**
   - A) Claude Monet  
   - B) Vincent van Gogh  
   - C) Pablo Picasso  
   - D) Leonardo da Vinci  
   **Correct Answer**: B) Vincent van Gogh  

3. **What is the capital of Japan?**
   - A) Osaka  
   - B) Kyoto  
   - C) Tokyo  
   - D) Sapporo  
   **Correct Answer**: C) Tokyo  

4. **What is the currency of the United States?**
   - A) Dollar  
   - B) Pound  
   - C) Euro  
   - D) Yen  
   **Correct Answer**: A) Dollar  

5. **Which planet is known as the "Morning Star"?**
   - A) Venus  
   - B) Mars  
   - C) Jupiter  
   - D) Saturn  
   **Correct Answer**: A) Venus  

## Customizing the Questions

The app fetches questions dynamically from the **Open Trivia Database API**. However, if you want to adjust the number of questions or change the difficulty level, you can modify the API request in the `script.js` file.

In the `script.js` file, you can adjust the number of questions, the category, and the difficulty level by modifying the API URL in the fetch request:
```javascript
const apiURL = 'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple';
```
- `amount=5` sets the number of questions.
- `category=9` specifies the general knowledge category.
- `difficulty=easy` sets the question difficulty.
- `type=multiple` ensures the questions are multiple choice.

## Contributing

We welcome contributions to this project! If you'd like to improve the quiz, please fork the repository and submit a pull request. Possible contributions include:
- Adding new features such as a timer or difficulty levels.
- Improving the styling or UI.
- Adding more question categories or types.
- Enhancing performance and optimizing the code.

### How to Contribute

1. Fork the repository on GitHub.
2. Clone your forked repository:
   ```bash
   git clone https://github.com/your-username/random-quiz-generator.git
   ```
3. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
4. Commit your changes:
   ```bash
   git commit -am "Add new feature"
   ```
5. Push your branch to GitHub:
   ```bash
   git push origin feature-name
   ```
6. Open a pull request to the main repository.

## License

This project is licensed under the **MIT License**.

