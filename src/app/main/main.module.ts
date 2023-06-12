import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateQuestionComponent } from './components/constructor/create-question.component';
import { QuestionComponent } from './components/welcome-page/question.component';
import { DeleteQuestionComponent } from './components/chat/delete-question.component';
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
