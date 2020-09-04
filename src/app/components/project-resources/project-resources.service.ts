import { Injectable } from '@angular/core';
import { Resource } from 'app/models/Resource';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'jquery';
import { ResourceItem } from 'app/models/ResourceItem';


export interface SelectedResources{
  spResources : Resource [],
  projectId: number
}
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ProjectResourcesService {
  private values: number [] = [];
  private subject: Subject<number []> = new Subject<number []>();

  resourceSet: Set<ResourceItem>;

  id: number;
  readonly url: string = "http://localhost:8080/korea";
  readonly ProjectResource: string = `/prd/find/${this.id}`;
  readonly ProjectResourcesItems: string = `/prd/listByProject/${this.id}`;///prd/listByProject/{id}
  readonly AddProjectResourceItem: string = `/prd`;
  readonly DeleteProjectResourceItem: string = `/prd/delete/${this.id}`;

  options = {
    observe: "response" as 'body', // to display the full response & as 'body' for type cast
  };  

  resources: Resource[];
  constructor(private http: HttpClient) { }

  sendMessage(prSet: Set<number>, projectId: number) {

    prSet.forEach((pr)=>{
      this.values.push(pr);
    });
    
    this.subject.next(this.values);
    
  }

  
  
  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<number []> {
    return this.subject.asObservable();
  }
  getList(): number[]{
    return this.values;
  }

  getall(){
    return this._get(`${this.url}${this.ProjectResourcesItems}`);
  }

  delete(id: number){
    this.id = id;
    return this._delete(`${this.url}${this.DeleteProjectResourceItem}`);
  }

  private _get(url: string): Observable<any[]> {
    return this.http.get<any[]>(url);
  }

  private _delete(url: string): Observable<any> {
    return this.http.delete<any>(url);
  }

  createNew(resource: Resource, projectId: number){
    this.id = projectId;
    return this.http.post(`${this.url}${this.AddProjectResourceItem}`, resource , this.options);
  }

}