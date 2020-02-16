import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departmentName: string = '';
  departments: Department[] = [];
  departmentEdit: Department = null;
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private departmentService: DepartmentService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.departmentService.get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((departments) => this.departments = departments);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }

  save() {
    if (this.departmentEdit) {
      this.departmentService.update({
        _id: this.departmentEdit._id,
        name: this.departmentName
      }).subscribe(
        (updatedDepartment) => {
          this.clear();
          this.notify('Department updated');
        }, (error) => {
          this.notify('Error');
        });
    } else {
      this.departmentService.add({
        name: this.departmentName
      }).subscribe(
        (newDepartment) => {
          this.clear();
          this.notify('Department created');
        }, (error) => {
          this.notify('Error');
        });
    }
  }

  cancel() {
    this.clear();
  }

  edit(department: Department) {
    this.departmentName = department.name;
    this.departmentEdit = department;
  }

  delete(department: Department) {
    this.departmentService.delete(department).subscribe(
      (deletedDepartment) => {
        this.clear();
        this.notify('Department removed');
      }, (error) => {
        this.notify(error.error.msg);
      });
  }

  private clear() {
    this.departmentName = '';
    this.departmentEdit = null;
  }

  private notify(msg: string) {
    this.snackBar.open(msg, 'OK', { duration: 3000 });
  }

}
