import { Component, OnInit } from '@angular/core';
import { GenRandomDataService } from '../gen-random-data.service';
import { Subject, ReplaySubject, AsyncSubject, BehaviorSubject } from 'rxjs';
import { DataModel } from '../data.model';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  private subject: Subject<DataModel>;
  private replySubject: ReplaySubject<DataModel>;
  private asyncSubject: AsyncSubject<DataModel>;
  private behaviorSubject: BehaviorSubject<DataModel>;

  constructor(private dataService: GenRandomDataService) { }

  ngOnInit() {
    this.subject = new Subject<DataModel>();
    this.replySubject = new ReplaySubject<DataModel>();
    this.asyncSubject = new AsyncSubject<DataModel>();
    this.behaviorSubject = new BehaviorSubject<DataModel>({ timestamp: 0, data: 0 });

    this.dataService.dataObservable.subscribe(this.subject);
    this.dataService.dataObservable.subscribe(this.replySubject);
    this.dataService.dataObservable.subscribe(this.asyncSubject);
    this.dataService.dataObservable.subscribe(this.behaviorSubject);
  }

  connect() {
    this.dataService.dataObservable.connect();
  }

}
