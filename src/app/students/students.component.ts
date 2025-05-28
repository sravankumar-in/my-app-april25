import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
students:any=[];
    constructor(private _studentsService:StudentsService){
      _studentsService.getstudents().subscribe((data:any)=>{
        console.log(data);
        this.students=data;
        console.log(this.students);
      },(err:any)=>{
        alert('internal Server Error')
      }
      )
    }
}
