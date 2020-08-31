import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SelectionModel }  from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Project } from '../../models/Project';
import { ProjectService } from '../project-resources/project.service';
import { ProjectResourcesService } from '../project-resources/project-resources.service';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})

export class FormulaComponent implements OnInit {

  @Input() project: Project[] = [];
  @Output() projectChecked: EventEmitter<boolean> = new EventEmitter();
  @Output() projectChange: EventEmitter<Project[]> = new EventEmitter();

  initialSelection = [];
  allowMultiSelect = true;
  selection: SelectionModel<Project>;


  displayedColumns: string[] = ['select','name','code','editable','itemid'];
  dataSource: MatTableDataSource<Project>;

  constructor( 
    private projectService : ProjectService,
    private prService: ProjectResourcesService) {}

  ngOnInit() {
    this.projectService.getall().subscribe((arr: Project[]) => {
      if(arr){
        this.project = arr;
      }else{
        this.project = [];
      }
      
      console.log(this.project);
    });

    // this.resourceService.getall().subscribe((arr: Resource[]) => {
      
    //   if(arr){
    //     this.resources = arr;
    //   }else{
    //     this.resources = [];
    //   }
    //   console.log(`resources ${this.resources});
    };

   
}