import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PersonComponent } from './person/person.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { StudentProfileComponent } from './schoolManagement/student-profile/student-profile.component';
import { StudlistComponent } from './schoolManagement/studlist/studlist.component';
import { EditlistComponent } from './schoolManagement/editlist/editlist.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LifecycleHookComponent,
    ParentComponent,
    ChildComponent,
    DashboardComponent,
    CalculatorComponent,
    PersonComponent,
    OrderlistComponent,
    StudentProfileComponent,
    StudlistComponent,
    EditlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
