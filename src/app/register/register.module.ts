import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntlTelInputNgModule } from 'intl-tel-input-ng';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
    RegisterRoutingModule,
    AngularMaterialModule,
    IntlTelInputNgModule.forRoot()
  ],
})
export class RegisterModule {}
