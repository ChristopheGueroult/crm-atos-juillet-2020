import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { TextModule } from '../text/text.module';
import { IconsModule } from '../icons/icons.module';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    LoginModule,
    TextModule,
    IconsModule,
    UiModule,
    TemplatesModule,
    NgbModule,
  ]
})
export class CoreModule { }
