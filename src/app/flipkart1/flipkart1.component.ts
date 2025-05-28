import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Flipkart1Service } from '../flipkart1.service';

@Component({
  selector: 'app-flipkart1',
  templateUrl: './flipkart1.component.html',
  styleUrls: ['./flipkart1.component.css']
})
export class Flipkart1Component {
  flipkart:any=[];
    constructor(private _flipkart1service:Flipkart1Service){
      _flipkart1service.getflipkart().subscribe((data:any)=>{
        console.log(data);
        this.flipkart=data;
        console.log(this.flipkart);
      },(err:any)=>{
        alert('internal Server Error')
      }
      )
    }


}
