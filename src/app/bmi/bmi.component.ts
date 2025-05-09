import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent {
  Height:number=0;
  weight:number=0;
  result:number=0;
  BMI(){
    this.result=this.weight/(this.Height*this.Height);

  }
}
