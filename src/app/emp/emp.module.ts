import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpRoutingModule } from './emp-routing.module';
import { EmpComponent } from './emp/emp.component';
import { AddempComponent } from './emp/addemp/addemp.component';
import { EditempComponent } from './emp/editemp/editemp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmpComponent, AddempComponent, EditempComponent],
  imports: [
    CommonModule,
    EmpRoutingModule,
    FormsModule
  ],
  exports: [EmpComponent]
})
export class EmpModule { }
