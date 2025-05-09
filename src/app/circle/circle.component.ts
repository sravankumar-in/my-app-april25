import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  Radius:number=0;
  // width:number=0;
  result:number=0;
  Area(){
    this.result=3.14*this.Radius*this.Radius;

  }
  Perimeter(){
    this.result=2*3.14*this.Radius;

  }

}
