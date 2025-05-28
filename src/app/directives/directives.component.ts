import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  ages:number[]=[10,20,43,54,65,78];

  states:string[]=['telegana','Andhrapradesh','karnataka','tamilnadu'];

  products:any[]=[
    {name:'pen',price:20,rating:1},
    {name:'book',price:200,rating:4.6},
    {name:'shirt',price:700,rating:5.0},
    {name:'shoes',price:2000,rating:2.8},
    {name:'laptop',price:50000,rating:4.6},
    {name:'bike',price:2000000,rating:2.6},
  ]

  today:any=new Date();


}
