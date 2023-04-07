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
  quizes: Quiz[]= [
    {
      "question": "What is Angular?",    
      "a": "A programming language",    
      "b": "A framework for building web applications",    
      "c": "A database management system",    
      "d": "An operating system",    
      "correct": "b"  
    },  
    {    
      "question": "What is the purpose of the Angular CLI?",    
      "a": "To create and manage Angular projects",    
      "b": "To deploy Angular applications",    
      "c": "To test Angular components",    
      "d": "To manage database migrations",    
      "correct": "a"  
    },  
    {    
      "question": "What is a component in Angular?",    
      "a": "A reusable piece of UI that contains logic and data",    
      "b": "A type of directive that modifies the behavior of HTML elements",   
      "c": "A service that provides data to components",    
      "d": "A type of module that groups related components",    
      "correct": "a"  
    },  
    {    
      "question": "What is dependency injection in Angular?",    
      "a": "A way to inject external libraries into an Angular application",    
      "b": "A way to manage dependencies between Angular components",    
      "c": "A design pattern that separates concerns in an application",    
      "d": "A technique for passing objects to a component without creating them inside the component",    
      "correct": "d"  
    },  
    {    
      "question": "What is the purpose of the ngOnInit() method in an Angular component?",    
      "a": "To initialize data that will be used in the component",    
      "b": "To handle user input in the component",    
      "c": "To handle HTTP requests in the component",    
      "d": "To render the component's template",    
      "correct": "a"  
  }];

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
  
  selectedAnswer!: string;


  constructor() {
    const storedData = localStorage.getItem('quizData');
    this.quizes = storedData ? JSON.parse(storedData) : [];
  }

  ngOnInit(): void {
    console.log(this.quizes);
    this.quizes = this.getQuizDataFromLocalStorage();
    if (this.quizes.length === 0) {
      this.quizes = [];
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

    if (this.quizes.length === 0) {
      this.quiz!.innerHTML = `<h2 style="margin-top: 20px;">No questions found</h2>`;
    } else {
      this.loadQuiz();
    }
  }

  loadQuiz() {
    this.deselectAnswers();

    const currentQuizData = this.quizes[this.currentQuiz];

    this.questionEl.innerText = currentQuizData.question;
    this.a_text.innerText = currentQuizData.a;
    this.b_text.innerText = currentQuizData.b;
    this.c_text.innerText = currentQuizData.c;
    this.d_text.innerText = currentQuizData.d;
  }

  public deselectAnswers() {
    this.answerEls.forEach((answerEl) => (answerEl.checked = false));
  }

  public getSelected() {
    let answer;
    this.answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }

  saveQuizDataToLocalStorage() {
    localStorage.setItem("quizData", JSON.stringify(this.quizes));
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

  public onSubmit() {
    const answer = this.getSelected();
    if (answer) {
      if (answer === this.quizes[this.currentQuiz].correct) {
        this.score++;
      }
  
      this.currentQuiz++;
  
      if (this.currentQuiz < this.quizes.length) {
        this.loadQuiz();
      } else {
        localStorage.setItem('quizData', JSON.stringify(this.quizes)); // Save the quiz data to local storage
        this.quiz!.innerHTML = `
        <h2 style="padding:15px;">You answered ${this.score}/${this.quizes.length} questions correctly</h2>
  
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