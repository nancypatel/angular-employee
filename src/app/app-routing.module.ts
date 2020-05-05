import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { EmpComponent } from './emp/emp/emp.component';
import { PersonComponent } from './person/person.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { StudentProfileComponent } from './schoolManagement/student-profile/student-profile.component';
import { StudlistComponent } from './schoolManagement/studlist/studlist.component';
import { EditlistComponent } from './schoolManagement/editlist/editlist.component';


const routes: Routes = [
   {path : 'register',  component : RegistrationComponent},
   {path : 'Login', component : LoginComponent},
   {path : 'lifecycle-hook', component : LifecycleHookComponent},
   {path : 'child', component : ChildComponent},
   {path : 'parent', component : ParentComponent},
   {path : 'dashboard', component : DashboardComponent},
   {path : 'calculator', component : CalculatorComponent},
   {path : 'person', component : PersonComponent},
   {path : 'orderlist', component : OrderlistComponent},
   {path : 'student-Profile', component : StudentProfileComponent},
   {path : 'studlist', component : StudlistComponent},
   {path : 'editlist/:id', component : EditlistComponent},
   {path : '', redirectTo : 'Login' , pathMatch : 'full'},
   {path : 'emp', loadChildren : () => import('./emp/emp.module').then(m => m.EmpModule)}
  // {path : 'emp', component : EmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
