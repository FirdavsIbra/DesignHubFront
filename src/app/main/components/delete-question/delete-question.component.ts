import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { QuestionService } from '../../services/question.service';
import { IQuestion } from '../../interfaces/question.interface';

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

  public constructor(private questionService: QuestionService) { }

  public questions: IQuestion[] = this.questionService.getAll();

  public onDeleteQuestion(question: IQuestion) {
    this.questionService.delete(question);
  }
}