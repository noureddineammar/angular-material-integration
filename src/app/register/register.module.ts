import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { IntlInputPhoneModule } from 'intl-input-phone';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    AngularMaterialModule,
    IntlInputPhoneModule,
  ],
})
export class RegisterModule {}
