import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:any=[];
  constructor(private _vehicleservice:VehiclesService){
    _vehicleservice.getvehicles().subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
        console.log(this.vehicles);
      },(err:any)=>{
        alert("Internal Server Error!")
      }
      

    )
  }

  keywords:any='';
  search(){
    this._vehicleservice.filteredVehicles(this.keywords).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }

  column:any='';
  order:any='';
  sort(){
    this._vehicleservice.sortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }

  // pagination
  limit:number=0;
  page:number=0;
  pagination(){
    this._vehicleservice.pagintedVehicles(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }
  loadVehicles(){
    this._vehicleservice.getvehicles().subscribe((data:any)=>{
      console.log(data);
      this.vehicles=data;
      console.log(this.vehicles);
    },(err:any)=>{
      alert("Internal Server Error!")
    }
  )
  }
  delete(id:number){
    if(confirm("Are you sure to delete?")==true){
    this._vehicleservice.deleteVehicles(id).subscribe(
      (data:any)=>{
        alert("Record deleted successfully");
        this.loadVehicles();
       },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }else{
    alert("you have cancelled delete")
  }
}



}
