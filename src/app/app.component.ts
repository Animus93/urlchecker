import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private state: StateService) { }

  localData = localStorage.getItem('data');
  ngOnInit() {
    if (this.localData) {
      const data: string[] = JSON.parse(this.localData)
      data
      this.state.siteUrlArray = data.map(item => ({ url: item, status: new BehaviorSubject(NaN) }))
      console.log(this.state.siteUrlArray)
    }
  }
}
