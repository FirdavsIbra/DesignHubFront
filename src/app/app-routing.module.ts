import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { DeleteQuestionComponent } from './components/delete-question/delete-question.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionComponent } from './components/question/question.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'create-question', component: CreateQuestionComponent},
  { path: 'delete-question', component: DeleteQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
