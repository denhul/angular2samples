import { Component } from '@angular/core';
import { Student }   from './student';

@Component({
    selector: 'school',
    template: `
        <student-creator (addedStudent)="studentAddedHandler($event)"></student-creator>
        <student-list [students]="students"></student-list>
    `
})
export class SchoolComponent{
    private students: Student[] = new Array<Student>();

    studentAddedHandler(student: Student){
        this.students.push(student);
    }
}