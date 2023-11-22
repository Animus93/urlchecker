import { Injectable } from '@angular/core';
import { IUrlArr } from '../interfaces/urlArray.interface';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  siteUrl: string = '';
  siteUrlArray: IUrlArr[] = [];
  // urlNames = this.siteUrlArray.map(arr => console.log(arr));

  setSiteUrl(site: string): string {
    return this.siteUrl = site
  }

  getSiteUrl(): string {
    return this.siteUrl
  }
}
