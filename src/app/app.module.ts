import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { CorsInterceptor } from './services/cors.interceptor';
import { ListComponent } from './components/list/list.component';
import { SoloComponent } from './components/solo/solo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ListComponent,
    SoloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: CorsInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
