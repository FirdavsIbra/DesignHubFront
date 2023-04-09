import { Component } from '@angular/core';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { IQuestion } from '../../interfaces/question.interface';


@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent {
  public newQuestion: Question = {
    id: 0,
    question: '',
    a: '',
    b: '',
    c: '',
    d: '',
    correct: 'a'
  };
  public questions: IQuestion[] = this.questionService.getAll();
  public maxId!: number;

  public constructor(private questionService: QuestionService) { }

  public onSubmit() {
    if (!this.newQuestion.question || !this.newQuestion.a || !this.newQuestion.b || !this.newQuestion.c || !this.newQuestion.d) {
      alert('Please fill out all fields');
      return;
    }

    if (this.questions.length > 0) {
      this.maxId = this.questions.reduce((prev, current) => (prev.id > current.id ? prev : current)).id;
    }
    else{
      this.maxId = 1;
    }
    
    switch (this.newQuestion.correct) {
      case 'a':
        this.newQuestion.correct = this.newQuestion.a;
        break;
      case 'b':
        this.newQuestion.correct = this.newQuestion.b;
        break;
      case 'c':
        this.newQuestion.correct = this.newQuestion.c;
        break;
      case 'd':
        this.newQuestion.correct = this.newQuestion.d;
        break;
      default:
        break;
    }
    const newQuestion: Question = {
      id: this.maxId + 1,
      question: this.newQuestion.question,
      a: this.newQuestion.a,
      b: this.newQuestion.b,
      c: this.newQuestion.c,
      d: this.newQuestion.d,
      correct: this.newQuestion.correct
    };

    console.log(newQuestion);

    this.questionService.create(newQuestion);

    this.newQuestion.question = '';
    this.newQuestion.a = '';  
    this.newQuestion.b = '';
    this.newQuestion.c = '';
    this.newQuestion.d = '';
    this.newQuestion.correct = 'a';
  }
}
