import { Component, Output, EventEmitter } from '@angular/core';
import { Student }   from './student';

@Component({
    selector: 'student-creator',
    template: `
        <input type="text"   [(ngModel)]="current.firstName" />
        <input type="text"   [(ngModel)]="current.lastName" />
        <input type="text"   [(ngModel)]="current.company" />
        <input type="number" [(ngModel)]="current.age" />
        <input type="button" value="Add student" (click)="addStudent()" />
    `
})
export class StudentCreatorComponent{
    @Output()
    addedStudent = new EventEmitter<Student>();

    current: Student = new Student("","",0,"");

    addStudent(){
        console.log(this.current);    
        
        this.addedStudent.emit(this.current);
        this.current = new Student("","",0,"");
    }
}