import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiComponent } from './components/ui/ui.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [UiComponent],
  exports: [UiComponent],
  imports: [
    CommonModule,
    IconsModule
  ]
})
export class UiModule { }
