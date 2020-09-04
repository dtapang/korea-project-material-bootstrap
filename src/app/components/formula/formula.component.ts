import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from '../project-resources/project.service';
import { Subscription } from 'rxjs';
import { ProjectResourcesService } from '../project-resources/project-resources.service';
import { ResourceService } from 'app/resources/resource.service';
import { Resource } from 'app/models/Resource';
import { Project } from 'app/models/Project';
import {Router} from '@angular/router';
import { ResourceItem } from 'app/models/ResourceItem';



@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit {

  public $fromProjects: Subscription;
  projects: Project[] = [];

  initialSelection = [];
  allowMultiSelect = true;
  selection: SelectionModel<Project>;


  displayedColumns: string[] = ['select','name','code','editable','itemid'];
  dataSource: MatTableDataSource<Project>;
  selectedProject: string;

  constructor( private projectService: ProjectService,
               private prService: ProjectResourcesService){
    this.selection = new SelectionModel<Project>(this.allowMultiSelect, this.initialSelection);
    }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource<Project>(this.projects);

    this.projectService.getall().subscribe((arr: Project[]) => {
      if(arr){
        this.projects = arr;
      }else{
        this.projects = [];
      }
      console.log(`projects array: ${this.projects}`);
    });

    console.log(this.prService.resourceSet);


  }

  OnDestroy(): void {
    this.$fromProjects.unsubscribe();
    // throw new Error("Method not implemented.");
  }


}
