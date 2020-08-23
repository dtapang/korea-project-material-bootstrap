import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ResourcesComponent } from 'app/resources/resources.component';
import { ProjectResourcesComponent } from 'app/components/project-resources/project-resources.component';

import { SignupComponent } from '../../components/user/signup/signup.component';

import { LoginComponent } from 'app/components/user/login/login.component';
import { OnlyLoggedInUserGuard } from 'app/app.component';

export const AdminLayoutRoutes: Routes = [
    { path:"login", component: LoginComponent },
    { path:"signup", component: SignupComponent },
    { path: 'project',      component: ProjectResourcesComponent , canActivate: [OnlyLoggedInUserGuard]},
    { path: 'resources',      component: ResourcesComponent , canActivate: [OnlyLoggedInUserGuard]},
    { path: 'formula',      component: DashboardComponent , canActivate: [OnlyLoggedInUserGuard]},
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent }
];


