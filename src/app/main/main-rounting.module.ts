import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuestionComponent } from "./components/welcome-page/question.component";
import { CreateQuestionComponent } from "./components/constructor/create-question.component";
import { DeleteQuestionComponent } from "./components/chat/delete-question.component";
import { NavBarComponent } from "./pages/main-page/nav-bar.component";

const routes: Routes = [
    {
        path: '',
        component: NavBarComponent,
        children: [
            { 
                path: 'question', 
                component: QuestionComponent
            },
            { 
                path: 'create-question', 
                component: CreateQuestionComponent
            },
            { 
                path: 'delete-question', 
                component: DeleteQuestionComponent
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule {}