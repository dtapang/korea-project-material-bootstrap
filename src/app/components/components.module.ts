import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ResourceListComponent} from './resource-list/resource-list.component';
import {ResourcesComponent} from 'app/resources/resources.component';
import {ProjectResourcesComponent} from './project-resources/project-resources.component';
import {SearchFilterPipe} from 'app/pipes/search-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ResourceListComponent,
    ResourcesComponent,
    ProjectResourcesComponent,
    SearchFilterPipe
  ],
   exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ResourceListComponent,
    ResourcesComponent,
    SearchFilterPipe
  ]
})
export class ComponentsModule { }