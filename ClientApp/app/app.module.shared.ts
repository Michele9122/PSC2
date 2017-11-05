import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';

import { studentDetailComponent } from './components/studentDetails/studentdetails.component';
import { newStudentComponent } from './components/newStudent/newStudent.component';
import { editStudentComponent } from './components/editStudent/editStudent.component';
import { viewStudentComponent } from './components/viewStudent/viewStudent.component';

import { StudentServices } from './services/service';
import { CourseServices } from './services/courseService'; //duplico service per evitare dipendenza circolare

import { filterSearch } from './pipes/search';

import { editCourseComponent } from './components/editCourse/editCourse.component';
import { courseDetailComponent } from './components/courseDetails/courseDetails.component'
import { newCourseComponent } from './components/newCourse/newCourse.component';
import { viewCourseComponent } from './components/viewCourse/viewCourse.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        studentDetailComponent,
        newStudentComponent,
        editStudentComponent,
        viewStudentComponent,
        courseDetailComponent,
        newCourseComponent,
        editCourseComponent,
        viewCourseComponent,
        filterSearch

    ],

    providers: [StudentServices, CourseServices],

    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },

            { path: 'student-detail/:id', component: studentDetailComponent },
            { path: 'course-detail/:id', component: courseDetailComponent },

            { path: 'view-student', component: viewStudentComponent },
            { path: 'view-course', component: viewCourseComponent },

            { path: 'new-student', component: newStudentComponent },
            { path: 'new-course', component: newCourseComponent },

            { path: 'edit-student/:id', component: editStudentComponent },
            { path: 'edit-course/:id', component: editCourseComponent },

            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
