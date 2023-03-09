import { Component } from '@angular/core';
import { QuestionComponent, Quiz } from '../question/question.component';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})

export class CreateQuestionComponent {
  question = '';
  a = '';
  b = '';
  c = '';
  d = '';
  correct = 'a';

  constructor(private questionComponent: QuestionComponent){
  }

  onSubmit() {
    if (!this.question || !this.a || !this.b || !this.c || !this.d) {
      alert('Please fill out all fields');
      return;
    }

    const newQuestion: Quiz = {
      question: this.question,
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      correct: this.correct
    };

    this.questionComponent.quizData.push(newQuestion);
    const quizDataString = JSON.stringify(this.questionComponent.quizData);
    localStorage.setItem('quizData', quizDataString);

    this.question = '';
    this.a = '';  
    this.b = '';
    this.c = '';
    this.d = '';
    this.correct = 'a';
  }
}
