import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    TitleBarComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
