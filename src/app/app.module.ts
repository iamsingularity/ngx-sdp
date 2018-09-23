import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxSdpModule } from 'ngx-sdp';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSdpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
