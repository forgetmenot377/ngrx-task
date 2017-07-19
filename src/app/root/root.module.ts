import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RouterStoreModule} from '@ngrx/router-store';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {StoreModule} from '@ngrx/store';

import {RootComponent} from './components';
import {counter} from './components/root/reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    TabsModule.forRoot(),
    StoreModule.provideStore({counter})
  ],
  declarations: [
    RootComponent
  ],
  providers: [
  ],
  bootstrap: [RootComponent]
})
export class RootModule {
}
