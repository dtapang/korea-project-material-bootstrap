import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from '../project-resources/project.service';
import { Subscription } from 'rxjs';
import { ResourceService } from 'app/resources/resource.service';
import { Resource } from 'app/models/Resource';
import { Project } from 'app/models/Project';
import { ResourceItem } from 'app/models/ResourceItem';
import { ProjectResourcesService } from '../project-resources/project-resources.service';
import { Router } from '@angular/router';
import { Formula } from '../../models/Formula';


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

  public Formulas: Formula[] = [
    {name:'name1', cost_code:'123', editable:true, item_id:'456'},
    {name:'name2', cost_code:'789', editable:false, item_id:'012'}
  ];

  selectedProject: string;
  displayedColumns: string[] = ['name', 'cost_code', 'editable', 'item_id'];
  dataSource = Formula;
  // selectedProject = 'None';

  constructor( private projectService: ProjectService,
               private prService: ProjectResourcesService,
               private router: Router){
    this.selection = new SelectionModel<Project>(this.allowMultiSelect, this.initialSelection);
   }

  ngOnInit(): void {

    
    this.projectService.getall().subscribe((arr: Project[]) => {
      if(arr){
        this.projects = arr;
      }else{
        this.projects = [];
      }
      console.log(`projects array: ${this.projects}`);
    });

    console.log(this.prService.resourceSet);
    
      this.Formulas = [
        {name:'name1', cost_code:'123', editable:true, item_id:'456'},
        {name:'name2', cost_code:'789', editable:false, item_id:'012'}
      ];
  }
  
 goToPage(pageName:string){
   this.router.navigate([`${pageName}`]);
 }


  OnDestroy(): void {
    this.$fromProjects.unsubscribe();
    // throw new Error("Method not implemented.");
  }


}

