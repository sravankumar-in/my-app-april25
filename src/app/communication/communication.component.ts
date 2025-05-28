import { Component } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent {
// store($event: Event) {
// throw new Error('Method not implemented.');
// }
// store(value:any){
// alert(value);
// }
name:string='';
display(data:string){
  this.name=data;
}

}
