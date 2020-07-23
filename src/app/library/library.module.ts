import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';



@NgModule({
  declarations: [TableLightComponent, ButtonComponent, TableDarkComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TableLightComponent, ButtonComponent, TableDarkComponent]
})
export class LibraryModule { }
