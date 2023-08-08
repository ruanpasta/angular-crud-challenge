import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { clientReducer } from './store/client/client.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToasterComponent } from './components/toaster/toaster.component';
import { ToasterService } from './services/toaster/toaster.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarComponent,
    StoreModule.forRoot({ client: clientReducer }),
    StoreDevtoolsModule.instrument(),
    ToasterComponent
  ],
  providers: [ToasterService, ToasterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
