import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.startsWith('https://cors-anywhere.herokuapp.com/')) {
            return next.handle(request);
        }

        const modifiedRequest = request.clone({
            url: 'https://cors-anywhere.herokuapp.com/' + request.url
        });

        return next.handle(modifiedRequest);
    }
}
