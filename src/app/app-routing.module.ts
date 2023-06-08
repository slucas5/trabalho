import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component'
import {RegisterComponent} from './pages/register/register.component'
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: '', component: MainLayoutComponent, children: [
    {path: '', component: NotesListComponent },
    {path: 'new', component: NoteDetailsComponent},
    {path: ':id', component: NoteDetailsComponent},
    { path: 'edit/:id', component: NoteDetailsComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
