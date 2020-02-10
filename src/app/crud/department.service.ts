import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from './department';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private readonly URL = 'http://localhost:3000/departments';

  private departmentSubject$: BehaviorSubject<Department[]> = new BehaviorSubject<Department[]>(null);
  private loaded: boolean = false;

  constructor(private http: HttpClient) { }

  get(): Observable<Department[]> {
    if (!this.loaded) {
      this.http.get<Department[]>(this.URL)
        .subscribe(this.departmentSubject$);
      this.loaded = true;
    }
    return this.departmentSubject$.asObservable();
  }

  add(department: Department): Observable<Department> {
    return this.http.post<Department>(this.URL, department)
      .pipe(
        tap((newDepartment: Department) => this.departmentSubject$.getValue().push(newDepartment))
      );
  }

  update(department: Department): Observable<any> {
    return this.http.patch(`${this.URL}/${department._id}`, department)
      .pipe(
        tap((updatedDepartment) => {
          let departments = this.departmentSubject$.getValue();
          let index = departments.findIndex(d => d._id === department._id);
          if (index >= 0) {
            departments[index] = updatedDepartment;
          }
        })
      );
  }

  delete(department: Department): Observable<any> {
    return this.http.delete(`${this.URL}/${department._id}`)
      .pipe(
        tap(() => {
          let departments = this.departmentSubject$.getValue();
          let index = departments.findIndex(d => d._id === department._id);
          if (index >= 0) {
            departments.splice(index, 1);
          }
        })
      );
  }
}
