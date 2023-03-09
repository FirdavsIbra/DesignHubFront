import { Component, OnInit } from '@angular/core';

export interface Quiz {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correct: string;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  quizData: Quiz[]= [];
  
  answerEls!: NodeListOf<HTMLInputElement>;
  questionEl!: HTMLElement;
  a_text!: HTMLElement;
  b_text!: HTMLElement;
  c_text!: HTMLElement;
  d_text!: HTMLElement;
  submitBtn!: HTMLElement;
  quiz!: HTMLElement | null;

  currentQuiz = 0;
  score = 0;

  constructor() {
    const storedData = localStorage.getItem('quizData');
    this.quizData = storedData ? JSON.parse(storedData) : [];
  }

  ngOnInit(): void {
    console.log(this.quizData);
    this.quizData = this.getQuizDataFromLocalStorage();
    if (this.quizData.length === 0) {
      this.quizData = [];
      this.saveQuizDataToLocalStorage();
    }

    this.answerEls = document.querySelectorAll(".answer");
    this.questionEl = document.getElementById("question")!;
    this.a_text = document.getElementById("a_text")!;
    this.b_text = document.getElementById("b_text")!;
    this.c_text = document.getElementById("c_text")!;
    this.d_text = document.getElementById("d_text")!;
    this.submitBtn = document.getElementById("submit")!;
    this.quiz = document.getElementById("quiz");

    if (this.quizData.length === 0) {
      this.quiz!.innerHTML = `<h2 style="margin-top: 20px;">No questions found</h2>`;
    } else {
      this.loadQuiz();
    }
  }

  loadQuiz() {
    this.deselectAnswers();

    const currentQuizData = this.quizData[this.currentQuiz];

    this.questionEl.innerText = currentQuizData.question;
    this.a_text.innerText = currentQuizData.a;
    this.b_text.innerText = currentQuizData.b;
    this.c_text.innerText = currentQuizData.c;
    this.d_text.innerText = currentQuizData.d;
  }

  deselectAnswers() {
    this.answerEls.forEach((answerEl) => (answerEl.checked = false));
  }

  getSelected() {
    let answer;
    this.answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }

  saveQuizDataToLocalStorage() {
    localStorage.setItem("quizData", JSON.stringify(this.quizData));
  }

  getQuizDataFromLocalStorage(): Quiz[] {
    const quizDataStr = localStorage.getItem("quizData");
    if (quizDataStr) {
      try {
        const quizData = JSON.parse(quizDataStr) as Quiz[];
        return quizData;
      } catch (e) {
        console.error("Error parsing quiz data from local storage:", e);
      }
    }
    return [];
  }

  onSubmit() {
    const answer = this.getSelected();
    if (answer) {
      if (answer === this.quizData[this.currentQuiz].correct) {
        this.score++;
      }
  
      this.currentQuiz++;
  
      if (this.currentQuiz < this.quizData.length) {
        this.loadQuiz();
      } else {
        localStorage.setItem('quizData', JSON.stringify(this.quizData)); // Save the quiz data to local storage
        this.quiz!.innerHTML = `
        <h2 style="padding:15px;">You answered ${this.score}/${this.quizData.length} questions correctly</h2>
  
        <button style="background-color: #03cae4;
          color: #fff;
          border: none;
          display: block;
          width: 100%;
          cursor: pointer;
          font-size: 1.1rem;
          font-family: inherit;
          padding: 1.3rem;" 
        onclick="location.reload()">Reload</button>
        `;
      }
    }
  }
}