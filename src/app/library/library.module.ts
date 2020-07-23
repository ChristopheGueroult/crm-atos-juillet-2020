import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { TableLightComponent } from './components/table-light/table-light.component';



@NgModule({
  declarations: [TableLightComponent, ButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TableLightComponent, ButtonComponent]
})
export class LibraryModule { }
