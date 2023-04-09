import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { IQuestion } from '../../interfaces/question.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent{
  public questions: IQuestion[] = this.questionService.getAll();

  public currentQuestionIndex = 0;
  public currentQuestion!: IQuestion;
  public currentQuestionChoices!: string[];
  public selectedAnswer!: string;
  public correctAnswers = 0;
  public totalQuestions = this.questions.length;
  public showResult = false;

  public constructor(private questionService: QuestionService) {
    this.loadQuestion();
  }

  public loadQuestion() {
    if(this.questions.length > 0){
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.currentQuestionChoices = [
        this.currentQuestion.a,
        this.currentQuestion.b,
        this.currentQuestion.c,
        this.currentQuestion.d
      ];
    }
    
  }

  public submitAnswer() {
    const correctAnswerIndex = this.currentQuestion.correct;

    if (correctAnswerIndex === this.selectedAnswer) {
      this.correctAnswers++;
      console.log(this.correctAnswers);
    }
  
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.questions.length) {
      this.showResult = true;
    } else {
      this.loadQuestion();
    }
  }

  public restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.correctAnswers = 0;
    this.showResult = false;
    this.loadQuestion();
  }
}