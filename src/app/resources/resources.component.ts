import { Component, OnInit } from '@angular/core';
import { ResourceService } from './resource.service';
import { Resource } from 'app/models/Resource';
import { MatTableDataSource } from '@angular/material/table';
import {SearchFilterPipe} from '../pipes/search-filter.pipe'

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  private _resourceService : ResourceService;
  resources: Resource[];
  dataSource: MatTableDataSource<Resource>;
  p: number = 1;
  public searchText = '';

  newResource: Resource;

  selectedResourceMap : Map<number, Resource> = new Map<number, Resource>();

  constructor(resourceService : ResourceService) { 
    this._resourceService = resourceService;
    this.newResource = new Resource("","");


  }

  submitForm(resource: Resource){
    console.log(resource);
    console.log(this._resourceService.createNew(resource).subscribe());
  }

  ngOnInit() {
    this._resourceService.getall().subscribe((arr: Resource[]) => {
       this.resources = arr;
       this.dataSource = new MatTableDataSource(arr);
    });
  }

  applyFilter(value: string) {
    const filterValue = value
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onCheck(id: number){
    this.selectedResourceMap.set(id, this.resources[id]);
  }

  onUncheck(id: number){
    this.selectedResourceMap.delete(id);
  }

  addNewResource(event: Resource){

    console.log(event);
    
    this.resources.push(event);
    this.dataSource = new MatTableDataSource(this.resources);

    //TODO: submit to API: Back

  }

}
