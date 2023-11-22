import { Component, OnDestroy } from '@angular/core';
import { Subscription, catchError, of } from 'rxjs';
import { StateService } from 'src/app/services/state.service';
import { UrlchekerService } from 'src/app/services/urlcheker.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnDestroy {
  constructor(public state: StateService, public urlCheker: UrlchekerService) { }
  $subscriptions: Subscription = new Subscription;
  data: any;

  chekList() {
    const promises = this.state.siteUrlArray.map((item, index) => {
      return this.urlCheker.getStatus(item.url).pipe(
        catchError(error => {
          console.log(error.status)
          return of(error.status);
        })).subscribe(status => this.state.siteUrlArray[index].status.next(status))
    })
    this.$subscriptions.add(...promises)
  }

  chek(url:string) {
    const datat = this.urlCheker.getStatus(url).pipe(
      catchError(error => {
        return of(error);
      })
    ).subscribe(datat => {
      this.data = datat.status
    }
    )
    this.$subscriptions.add(datat)
  }

  deleteItem(index: number) {
    this.state.siteUrlArray.splice(index, 1)
    const data = this.state.siteUrlArray.map(item => item.url)
    localStorage.setItem('data', JSON.stringify(data))
  }
  updItem(item: number) {
    const datat = this.urlCheker.getStatus(this.state.siteUrlArray[item].url).pipe(
      catchError(error => {
        return of(error);
      })
    ).subscribe(datat => {
      this.state.siteUrlArray[item].status.next(datat.status)
    }
    )
    this.$subscriptions.add(datat)
    // this.state.siteUrlArray[item].status.
  }
  clearList() {
    localStorage.removeItem('data')
    this.state.siteUrlArray = []
  }
  ngOnDestroy() {
    this.$subscriptions.unsubscribe()
  }
}
