import { Component } from '@angular/core';
import { QuestionComponent, Quiz } from '../question/question.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.3s', style({ opacity: 0 }))
      ])
    ])
  ]
  
})
export class DeleteQuestionComponent {
  quizData: Quiz[] = [];

  constructor(private questionComponent: QuestionComponent) {
    const quizDataString = localStorage.getItem('quizData');
    if (quizDataString) {
      this.quizData = JSON.parse(quizDataString);
    }
  }


  onDeleteQuestion(question: Quiz) {
    const index = this.quizData.indexOf(question);
    if (index !== -1) {
      this.quizData.splice(index, 1);
      const quizDataString = JSON.stringify(this.quizData);
      localStorage.setItem('quizData', quizDataString);
    }
  }
}