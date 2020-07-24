import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '../icons/icons.module';
import { LoginModule } from '../login/login.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { UiModule } from '../ui/ui.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule,
    TextModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    LoginModule,
    TextModule,
    IconsModule,
    UiModule,
    TemplatesModule,
    NgbModule,
    HeaderComponent,
    NavComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
