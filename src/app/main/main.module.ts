import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { QuestionComponent } from './components/question/question.component';
import { DeleteQuestionComponent } from './components/delete-question/delete-question.component';
import { MainRoutingModule } from './main-rounting.module';
import { NavBarComponent } from './pages/main-page/nav-bar.component';

@NgModule({
  declarations: [
    CreateQuestionComponent,
    QuestionComponent,
    DeleteQuestionComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule
  ]
})
export class MainModule { }
