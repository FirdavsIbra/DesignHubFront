import { Component } from '@angular/core';
import { QuestionComponent, Quiz } from '../question/question.component';


export interface NewQuestion {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correct: string;
}

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent {
  newQuestion: NewQuestion = {
    question: '',
    a: '',
    b: '',
    c: '',
    d: '',
    correct: 'a'
  };

  constructor(private questionComponent: QuestionComponent){
  }

  onSubmit() {
    if (!this.newQuestion.question || !this.newQuestion.a || !this.newQuestion.b || !this.newQuestion.c || !this.newQuestion.d) {
      alert('Please fill out all fields');
      return;
    }

    const newQuestion: Quiz = {
      question: this.newQuestion.question,
      a: this.newQuestion.a,
      b: this.newQuestion.b,
      c: this.newQuestion.c,
      d: this.newQuestion.d,
      correct: this.newQuestion.correct
    };

    this.questionComponent.quizes.push(newQuestion);
    const quizDataString = JSON.stringify(this.questionComponent.quizes);
    localStorage.setItem('quizData', quizDataString);

    this.newQuestion.question = '';
    this.newQuestion.a = '';  
    this.newQuestion.b = '';
    this.newQuestion.c = '';
    this.newQuestion.d = '';
    this.newQuestion.correct = 'a';
  }
}
