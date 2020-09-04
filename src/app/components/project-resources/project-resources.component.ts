import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'app/resources/resource.service';
import { Resource } from 'app/models/Resource';
import { Project } from 'app/models/Project';
import { ProjectService } from './project.service';
import { ProjectResourcesService } from './project-resources.service';
import {Router} from '@angular/router';
import { ResourceItem } from 'app/models/ResourceItem';

@Component({
  selector: 'app-project-resources',
  templateUrl: './project-resources.component.html',
  styleUrls: ['./project-resources.component.css']
})
export class ProjectResourcesComponent implements OnInit {
  
  projectResources: Set<ResourceItem>;
  resources: Set<ResourceItem>;
  projects: Project[];
  p1: number = 1;
  p2: number = 1;

  selectedProject = 'None';
  projectId: number;
  
  constructor(private resourceService : ResourceService, 
    private projectService : ProjectService,
    private prService: ProjectResourcesService,
    private route: Router) {}

  ngOnInit() {
    
    this.projectService.getall().subscribe((arr: Project[]) => {
      if(arr){
        this.projects = [...arr];
      }else{
        this.projects = [];
      }      
      console.log(`projects array: ${this.projects}`);
    });

    this.resources = new Set();
    this.projectResources = new Set();
    this.resourceService.getall().subscribe((arr: Resource[]) => {
      
      if(arr){
        [...arr].forEach(res => {
          this.resources.add(new ResourceItem(res, false));
        });
      }
 
      console.log(`resources set: ${this.resources}`);
    });
  
  }

  hasProjects(){
    if(this.projects){
      return true;
    }
    return false;
  }

  submitProjectResources(){
    this.prService.resourceSet = this.projectResources;
    this.route.navigate(['/formula']);//private route: Router
  }

  addToProject(){
    let $self = this.projectResources;
    this.resources.forEach((resItem)=>{
      if(resItem.selected){
        $self.add(resItem);
      }
    });
    this.projectResources = $self;
  }

  deleteSelected(){
    let $self = this.projectResources;
    this.projectResources.forEach((resItem)=>{
      if(resItem.selected){
        $self.delete(resItem);
      }
    });

  }

  selectAllResources(){
    this.resources.forEach((item)=>{
      item.selected = true;
    });
  }

  clearselectedResources(){
    this.resources.forEach((item)=>{
      item.selected = false;
    });
  }

}
