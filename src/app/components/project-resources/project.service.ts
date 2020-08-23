import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Project } from 'app/models/Project';
import {HttpClient, HttpResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Resource } from 'app/models/Resource';

@Injectable({
  providedIn: 'root'
})
export class ProjectService{

  id: number;
  readonly url: string = "http://localhost:8080/korea";
  readonly ProjectItem: string = `/projects/${this.id}`;
  readonly ProjectItems: string = "/projects";
  readonly ProjectSearchItems: string = `/projects/search`;
  readonly AddProjectItem: string = "/projects";
  readonly UpdateProjectItem: string = "/projects";

  projects: Project[];
  constructor(private http: HttpClient) { }

  getall(){
    return this._get(`${this.url}${this.ProjectItems}`);
  }

  private _get(url: string): Observable<any[]> {
    return this.http.get<any[]>(url)
      .pipe(
        map(res => res)
      );
  }
}
