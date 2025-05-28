import { Component } from '@angular/core';
import { MailsService } from '../mails.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent {

  mails:any=[];
    constructor(private _mailsService:MailsService){
      _mailsService.getmail().subscribe((data:any)=>{
        console.log(data);
        this.mails=data;
        console.log(this.mails);
      },(err:any)=>{
        alert('internal Server Error')
      }
      )
    }

}
