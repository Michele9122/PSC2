/*import { Component } from '@angular/core';
import { CourseServices } from '../../services/courseService';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';  

@Component({
    selector: 'course-detail',
    templateUrl: './courseDetails.component.html'
})
export class courseDetailComponent {
    private EmpId: number;
    public CourseDetails = {};
    public constructor(private empService: CourseServices, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.EmpId = params['id'];
        });

        this.empService.getCourseDetails(this.EmpId)
            .subscribe((data: Response) => (this.CourseDetails["CorsoId"] = data.json().corsoId,
                this.CourseDetails["Titolo"] = data.json().titolo,
                this.CourseDetails["DurataAnni"] = data.json().durataAnni,
                this.CourseDetails["Nome"] = data.json().nome
            ));

    } 
}  */