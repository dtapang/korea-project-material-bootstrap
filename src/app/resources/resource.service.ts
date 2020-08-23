import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Resource } from 'app/models/Resource';
import {HttpClient, HttpResponse, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  id: number;
  readonly url: string = "http://localhost:8080/korea";
  readonly ResourceItem: string = `/projects/${this.id}`;
  readonly ResourceItems: string = "/resource/list";
  readonly ProjectSearchItems: string = `/resource/search`;
  readonly AddProjectItem: string = "/resource";
  readonly UpdateProjectItem: string = "/resource";

  resources: Resource[];
  constructor(private http: HttpClient) { }

  getall(){
    return this._get(`${this.url}${this.ResourceItems}`);
  }

  private _get(url: string): Observable<any[]> {
    return this.http.get<any[]>(url)
      .pipe(
        map(res => res)
      );
  }
}
