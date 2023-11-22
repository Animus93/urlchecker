import { Component } from '@angular/core';
import { Subscription, catchError, of } from 'rxjs';
import { UrlchekerService } from 'src/app/services/urlcheker.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(public urlchek: UrlchekerService) { }

}
