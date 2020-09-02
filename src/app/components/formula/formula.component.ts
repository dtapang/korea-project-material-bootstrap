import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SelectionModel }  from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Project } from '../../models/Project';
import { ProjectService } from '../project-resources/project.service';
import { Subscription } from 'rxjs';
import { ProjectResourcesService } from '../project-resources/project-resources.service';


@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit {

  public $fromProjects: Subscription;
  @Input() project: Project[] = [];
  @Output() projectChecked: EventEmitter<boolean> = new EventEmitter();
  @Output() projectChange: EventEmitter<Project[]> = new EventEmitter();

  initialSelection = [];
  allowMultiSelect = true;
  selection: SelectionModel<Project>;


  displayedColumns: string[] = ['select','name','code','editable','itemid'];
  dataSource: MatTableDataSource<Project>;

  constructor( private projectService : ProjectService,
               private prService: ProjectResourcesService) { 
    this.selection = new SelectionModel<Project>(this.allowMultiSelect, this.initialSelection);
  
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Project>(this.project);
    this.projectService.getall().subscribe(arr => this.project = arr);

    console.log(this.prService.resourceSet);

    this.$fromProjects = this.prService.getMessage().subscribe(res=>{
      console.log(res);
    });
  }

  ngOnDestroy(): void {
    this.$fromProjects.unsubscribe();
    // throw new Error("Method not implemented.");
  }

   
  /**
   * Is called when an item from the list is checked.
  @param selected
   */
  onItemCheck(selected: boolean) {
    this.projectChecked.emit(selected);
  }

  /**
   * Is called when task list is changed.
  @param changedTasks
   */
  onResourcesChanged(changedResourcess: Project[]) {
    this.projectChange.emit(changedResourcess);
  }



  /** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.project.length;
  return numSelected == numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
}
}