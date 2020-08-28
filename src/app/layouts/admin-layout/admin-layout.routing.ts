import { Routes } from '@angular/router';
import { ResourcesComponent } from 'app/resources/resources.component';
import { ProjectResourcesComponent } from 'app/components/project-resources/project-resources.component';
import { SignupComponent } from '../../components/user/signup/signup.component';
import { LoginComponent } from 'app/components/user/login/login.component';
import { OnlyLoggedInUserGuard } from 'app/app.component';
import { FormulaComponent } from '../../components/formula/formula.component';

export const AdminLayoutRoutes: Routes = [
    { path:"login", component: LoginComponent },
    { path:"signup", component: SignupComponent },
    { path: 'project',      component: ProjectResourcesComponent , canActivate: [OnlyLoggedInUserGuard]},
    { path: 'resources',      component: ResourcesComponent , canActivate: [OnlyLoggedInUserGuard]},
    { path: 'formula',      component: TableListComponent , canActivate: [OnlyLoggedInUserGuard]}
];

