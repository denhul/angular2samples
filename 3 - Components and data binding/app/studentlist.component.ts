import { Component, Input } from '@angular/core';
import { Student }   from './student';

@Component({
    selector: 'student-list',
    template: `
        <table>
            <thead>
                <tr><th>First Name</th><th>Last Name</th><th>Company</th><th>Age</th></tr>
            </thead>
            <tbody>
                <tr *ngFor="let student of students">
                    <td>{{student.firstName}}</td>
                    <td>{{student.lastName}}</td>
                    <td>{{student.company}}</td>
                    <td>{{student.age}}</td>
                </tr>
            </tbody>
        </table>
    `
})
export class StudentListComponent{
    @Input()
    public students: Student[];

}