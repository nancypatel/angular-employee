import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { AddempComponent } from './emp/addemp/addemp.component';
import { EditempComponent } from './emp/editemp/editemp.component';


const routes: Routes = [
  {path : 'emp', component : EmpComponent},
  {path : '', redirectTo : 'emp', pathMatch: 'full'},
  {path : 'addemp', component : AddempComponent},
  {path: 'editemp/:id', component : EditempComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpRoutingModule { }
