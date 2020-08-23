import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Resource } from '../../models/Resource';
import {SelectionModel}  from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  @Input() resources: Resource[] = [];
  @Output() resourceChecked: EventEmitter<boolean> = new EventEmitter();
  @Output() resourcesChange: EventEmitter<Resource[]> = new EventEmitter();

  initialSelection = [];
  allowMultiSelect = true;
  selection: SelectionModel<Resource>;


  displayedColumns: string[] = ['select','name','code'];
  dataSource: MatTableDataSource<Resource>;

  constructor() { 
    this.selection = new SelectionModel<Resource>(this.allowMultiSelect, this.initialSelection);

    
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Resource>(this.resources);
  }


    /**
   * Is called when an item from the list is checked.
   * @param selected---Value which indicates if the item is selected or deselected.
   */
  onItemCheck(selected: boolean) {
    this.resourceChecked.emit(selected);
  }

  /**
   * Is called when task list is changed.
   * @param changedTasks---Changed task list value, which should be sent to the parent component.
   */
  onResourcesChanged(changedResourcess: Resource[]) {
    this.resourcesChange.emit(changedResourcess);
  }



  /** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.resources.length;
  return numSelected == numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
}



}
