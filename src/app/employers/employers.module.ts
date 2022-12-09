import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployersComponent } from './employers.component';



@NgModule({
  declarations: [
    EmployersComponent
  ],
  exports: [
    EmployersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployersModule { }
