/*import { Component } from '@angular/core';
import { CourseServices } from '../../services/courseService';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'view-course',
    templateUrl: './viewCourse.component.html'
})
export class viewCourseComponent {
    public CourseList = [];
    public constructor(private courseService: CourseServices) {
        this.courseService.getCourseList()
            .subscribe(
            (data: Response) => (this.CourseList = data.json())
            );

    } 
    
} */