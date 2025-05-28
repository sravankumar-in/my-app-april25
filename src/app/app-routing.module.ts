import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent }   from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MywebsiteComponent } from './mywebsite/mywebsite.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { Flipkart1Component } from './flipkart1/flipkart1.component';
import { MailsComponent } from './mails/mails.component';
import { StudentsComponent } from './students/students.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DetailsComponent } from './details/details.component';
import { AuthenticationGuard } from './authentication.guard';
import { CommunicationComponent } from './communication/communication.component';
import { Sibling1Component } from './sibling1/sibling1.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],children:[
  {path:'home',component:HomeComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'mywebsite',component:MywebsiteComponent},
  {path:'databinding',component:DatabindingComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'rectangle',component:RectangleComponent},
  {path:'circle',component:CircleComponent},
  {path:'BMI',component:BMIComponent},
  {path:'directives',component:DirectivesComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'flipkart',component:FlipkartComponent},
  {path:'vehicles',component:VehiclesComponent},
  {path:'create-vehicle',component:CreateVehicleComponent},
  {path:'flipkart1',component:Flipkart1Component},
  {path:'mails',component:MailsComponent},
  {path:'students',component:StudentsComponent},
  {path:'create_user',component:CreateUserComponent},
  {path:'details',component:DetailsComponent},
  {path:'communication',component:CommunicationComponent},
  {path:'sibling1',component:Sibling1Component},
  

  


]},

{path:'*',component:ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
