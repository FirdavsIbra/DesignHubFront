import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { DeleteQuestionComponent } from './components/delete-question/delete-question.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { QuestionComponent } from './components/question/question.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'create-question', component: CreateQuestionComponent},
  { path: 'delete-question', component: DeleteQuestionComponent},
  { path: 'main', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
