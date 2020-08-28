import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'app/resources/resource.service';
import { Resource } from 'app/models/Resource';
import { Project } from 'app/models/Project';
import { ProjectService } from './project.service';
import { ProjectResourcesService } from './project-resources.service';

@Component({
  selector: 'app-project-resources',
  templateUrl: './project-resources.component.html',
  styleUrls: ['./project-resources.component.css']
})
export class ProjectResourcesComponent implements OnInit {

  resources: Resource[];
  projects: Project[];
  projectResourcesMap: Map<number, Resource> = new Map<number, Resource>();
  selectedResourceMap : Map<number, Resource> = new Map<number, Resource>();
  prCheckSet = new Set();

  p1: number = 1;
  p2: number = 1;
  
  constructor(private resourceService : ResourceService, 
    private projectService : ProjectService,
    private prService: ProjectResourcesService) {}

  ngOnInit() {
    this.projectService.getall().subscribe((arr: Project[]) => {
      if(arr){
        this.projects = arr;
      }else{
        this.projects = [];
      }
      
      console.log(this.projects);
    });

    this.resourceService.getall().subscribe((arr: Resource[]) => {
      
      if(arr){
        this.resources = arr;
      }else{
        this.resources = [];
      }
      console.log(`resources ${this.resources}`);
    });
     
  }

  submitProjectResources(resource: Resource, projectId: number){
    this.prService.createNew(resource, projectId).subscribe();
  }

  loadProject(id: number){
    console.log(id);
  }

  onCheck(id: number){
    //Add selected resource to srMap where res.id == id
    let obj = this.resources.find(obj => obj.id == id);
    this.selectedResourceMap.set(id, obj);
  }

  onPRCheck(id: number){
    //Add selected resource to srMap where res.id == id
    this.prCheckSet.add(id);
  }

  findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
  }

  onUncheck(id: number){
    this.selectedResourceMap.delete(id);
  }

  onPRUncheck(id: number){
    this.prCheckSet.delete(id);
  }

  onNativeChange(e: any, id: number) { // here e is a boolean, true if checked, otherwise false
    if(e.target.checked){//checked
      this.onCheck(id);
    }else{
      //unchecked
      this.onUncheck(id);
    }
  }

  onPRItemChange(e: any, id: number){
    if(e.target.checked){//checked
      this.onPRCheck(id);
    }else{
      //unchecked
      this.onPRUncheck(id);
    }
  }

  addSelectedResourcesToProject(){
    this.selectedResourceMap.forEach((value: Resource, key: number) => {
      this.projectResourcesMap.set(key,value);
    });
  }

  prValues(){
    let sPRValues = this.projectResourcesMap.values();
    let array = [];
    this.projectResourcesMap.forEach((value: Resource, key: number) => {
      array.push(value);
    });
    return array;
    //return sPRValues;
  }

}