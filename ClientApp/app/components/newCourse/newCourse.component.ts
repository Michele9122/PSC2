import { Component } from '@angular/core';
import { CourseServices } from '../../services/courseService';
import { Response } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'new-course',
    templateUrl: './newCourse.component.html',

})
export class newCourseComponent {
    public CourseList = [];
    public formData: FormGroup;
    public constructor(private empService: CourseServices) {

        this.formData = new FormGroup({
            'corsoId': new FormControl('', [Validators.required]),
            'titolo': new FormControl('', Validators.required),
            'durata': new FormControl('', Validators.required)
        });

    }


    submitData() {
        if (this.formData.valid) {
            var Obj = {
                corsoId: this.formData.value.corsoId,
                titolo: this.formData.value.titolo,
                durata: this.formData.value.durata,
            };
            this.empService.postData(Obj);
            alert("Employee Inserted Successfully");
        }

    }


}  