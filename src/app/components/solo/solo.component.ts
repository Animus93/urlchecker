import { Component } from '@angular/core';
import { BehaviorSubject, Subscription, catchError, of } from 'rxjs';
import { StateService } from 'src/app/services/state.service';
import { UrlchekerService } from 'src/app/services/urlcheker.service';

@Component({
  selector: 'app-solo',
  templateUrl: './solo.component.html',
  styleUrls: ['./solo.component.css']
})
export class SoloComponent {
  subscriptions$?: Subscription;
  data: any;
  constructor(public state: StateService, public urlchek: UrlchekerService) { }


  add() {
    this.state.siteUrlArray.push({ url: this.state.getSiteUrl(), status: new BehaviorSubject(NaN) })
    this.state.setSiteUrl('')
    const data = this.state.siteUrlArray.map(item => item.url)
    localStorage.setItem('data', JSON.stringify(data))
  }

  chek() {
    const datat = this.urlchek.getStatus(this.state.siteUrl).pipe(
      catchError(error => {
        return of(error);
      })
    ).subscribe(datat => {
      this.data = datat
    }
    )
    this.subscriptions$?.add(datat)
  }

  ngOnDestroy() {
    this.subscriptions$?.unsubscribe()
  }
}
