import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { StatusComponent } from './status/status.component';
import { DocumentReceivedComponent } from './document-received/document-received.component';
import { DocumentStatusComponent } from './document-status/document-status.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    DocumentReceivedComponent,
    DocumentStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
