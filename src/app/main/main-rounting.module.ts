import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomePageComponent } from "./components/welcome-page/welcome-page.component";
import { ConstructorComponent } from "./components/constructor/constructor.component";
import { ChatComponent } from "./components/chat/chat.component";
import { NavBarComponent } from "./pages/main-page/nav-bar.component";
import { SketchComponent } from "./components/sketch/sketch.component";
import { AdminComponent } from "./components/admin/admin.component";
import { UserInfoComponent } from "./components/user-info/user-info.component";
import { FileUploadComponent } from "./components/file-upload/file-upload.component";

const routes: Routes = [
    {
        path: '',
        component: NavBarComponent,
        children: [
            { 
                path: 'welcome-page', 
                component: WelcomePageComponent
            },
            { 
                path: 'constructor', 
                component: ConstructorComponent
            },
            {
                path: 'sketch',
                component: SketchComponent
            },
            { 
                path: 'chat', 
                component: ChatComponent
            }, 
            { 
                path: 'admin',
                component: AdminComponent,
                children: [
                    { path: ':userId', component: UserInfoComponent }
                ]
            },
            {
                path: 'gallery',
                component: FileUploadComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule {}