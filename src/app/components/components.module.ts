import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {ResourceListComponent} from './resource-list/resource-list.component';
import { ResourcesComponent } from 'app/resources/resources.component';
import { ProjectResourcesComponent } from './project-resources/project-resources.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule      
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ResourceListComponent,
    ResourcesComponent,
    ProjectResourcesComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ResourceListComponent,
    ResourcesComponent
  ]
})
export class ComponentsModule { }
