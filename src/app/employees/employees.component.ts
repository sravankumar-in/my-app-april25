import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees: any = [
    { name: 'Sravan', experience: 4, package: 1200000, role: 'UIDeveloper' },
    { name: 'Yashwanth', experience: 5, package: 1300000, role: 'UIDeveloper' },
    { name: 'Rishi', experience: 10, package: 1600000, role: 'UIDeveloper' },
    { name: 'Rohit', experience: 7, package: 1200000, role: 'UIDeveloper' },
    { name: 'Kohli', experience: 2, package: 600000, role: 'Software Developer' },
    { name: 'John Cena', experience: 6, package: 1400000, role: 'Software Developer' },
    { name: 'Randy', experience: 8, package: 1600000, role: 'Data engineer' },
    { name: 'Sachin', experience: 3, package: 700000, role: 'Data engineer' },
    { name: 'Prabhas', experience: 2, package: 400000, role: 'Data engineer' },
    { name: 'Nani', experience: 1, package: 300000, role: 'Testing Engineer' },
    { name: 'Raju', experience: 3.5, package: 350000, role: 'Testing Engineer' },
  ];

delete(i:number){
  alert(i);
  this.employees.splice(i,1);
}

packageHighToLow(){
  this.employees.sort((a:any,b:any)=>b.package-a.package);
}

role:any='';
roleFilter(){
  this.employees=this.employees.filter((employee:any)=>employee.role==this.role);
}

term:any='';
search(){
  this.employees=this.employees.filter((employee:any)=>employee.name.includes(this.term));
}


}
