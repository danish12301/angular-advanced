import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

import { Project } from './project.model';
import { PROJECTS } from './mock-projects';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsurl = environment.backendUrl + 'projects/';

  constructor(private http: HttpClient) { }

  find(id: number): Observable<Project> {
     const url = this.projectsurl + id; 
     return this.http.get<Project>(url).pipe(catchError(
      (error: HttpErrorResponse) => { console.error(error);
      return throwError('An error occurred loading the project'); 
    }));
 }

  put(project: Project): Observable<Project> {
    const url = this.projectsurl + project.id;
    return this.http.put<Project>(url, project, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError('An error occurred updating the projects.');
      }));
  }

  list(): Observable<Project[]> {
    //return of(PROJECTS);
    return this.http.get<Project[]>(this.projectsurl).pipe(
      delay(2000),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError('An error occurred while loading the projects. ');
      })
    );
  }
}
