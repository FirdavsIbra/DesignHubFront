import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ChatComponent } from './components/chat/chat.component';
import { MainRoutingModule } from './main-rounting.module';
import { NavBarComponent } from './pages/main-page/nav-bar.component';
import { SketchComponent } from './components/sketch/sketch.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
  declarations: [
    ConstructorComponent,
    WelcomePageComponent,
    ChatComponent,
    NavBarComponent,
    SketchComponent,
    AdminComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule
  ]
})
export class MainModule { }
