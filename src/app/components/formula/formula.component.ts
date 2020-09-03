import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SelectionModel }  from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Project } from '../../models/Project';
import { ProjectService } from '../project-resources/project.service';
import { ProjectResourcesService } from '../project-resources/project-resources.service';
import { Router } from '@angular/router';
import { Formula } from '../../models/Formula';

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

  public Formulas: Formula[] = [
    {name:'name1', cost_code:'123', editable:true, item_id:'456'},
    {name:'name2', cost_code:'789', editable:false, item_id:'012'}
  ];


  // displayedColumns: string[] = ['select','name','code','editable','itemid'];
  // dataSource: MatTableDataSource<Project>;
  displayedColumns: string[] = ['name', 'cost_code', 'editable', 'item_id'];
  dataSource = Formula;

  selectedProject = 'None';

  constructor( 
    private projectService : ProjectService,
    private prService: ProjectResourcesService,
    private router: Router) {}

  // goToPage(pageName:string){
  //     this.router.navigate([`${pageName}`]);
  //   }

  ngOnInit() {
    this.projectService.getall().subscribe((arr: Project[]) => {
      if(arr){
        this.project = arr;
      }else{
        this.project = [];
      }
      this.Formulas = [
        {name:'name1', cost_code:'123', editable:true, item_id:'456'},
        {name:'name2', cost_code:'789', editable:false, item_id:'012'}
      ];
      
      console.log(this.project);
    })

    };
  }

   