import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {OnlyLoggedInUserGuard} from 'app/app.component';
import {LoginComponent} from 'app/components/user/login/login.component';
import {SignupComponent} from 'app/components/user/signup/signup.component';
import { ProjectResourcesService } from 'app/components/project-resources/project-resources.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    RouterModule.forChild(AdminLayoutRoutes)
  ],
  providers: [OnlyLoggedInUserGuard],
  declarations: [
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent
  ],
})
export class AdminLayoutModule {

}