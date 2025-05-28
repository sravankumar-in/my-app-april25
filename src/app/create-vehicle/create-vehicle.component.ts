import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
constructor(private _vehicleService:VehiclesService,private _router:Router){}

  public vehicleForm:FormGroup=new FormGroup({
    Vehicle:new FormControl(),
    Manufacturer:new FormControl(),
    Type:new FormControl(),
    MOdel:new FormControl(),
    Fuel:new FormControl(),
  })


  submit(){
    console.log(this.vehicleForm.value);
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("Vehicle Created Successfully😊");
      this._router.navigateByUrl('/dashboard/vehicles');
    },(err:any)=>{
      alert("Internal Server error!")
    }
  )
  }

}
