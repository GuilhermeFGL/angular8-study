import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEvent, of } from 'rxjs';
import { debounceTime, mergeMap, switchMap } from 'rxjs/operators';
import { Person } from './person.model';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  private readonly URL: string = 'http://localhost:9000';

  @ViewChild('searchBy', { static: false }) el: ElementRef;

  searchInput: string = "";
  operator: string = "merge";
  people$: Observable<Person[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mergeOption();
  }

  selectOperator() {
    if (this.operator === "merge") {
      this.mergeOption();
    } else if (this.operator === "switch") {
      this.switchOption();
    }
  }

  mergeOption() {
    this.people$ = fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        mergeMap((e) => this.filterPeope(this.searchInput)));
  }

  switchOption() {
    this.people$ = fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        switchMap((e) => this.filterPeope(this.searchInput)));
  }

  private filterPeope(searchInput: string): Observable<Person[]> {
    if (searchInput.length === 0) {
      return of([]);
    }
    return this.http.get<Person[]>(`${this.URL}/${searchInput}`);
  }

}
