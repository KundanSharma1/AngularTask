import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ManualComponent } from './manualcomponent/manual.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClicomponentComponent } from './clicomponent/clicomponent.component';

@NgModule({
  declarations: [AppComponent, ClicomponentComponent, ManualComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
