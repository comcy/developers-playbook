import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsFeatureModule } from 'projects/basics-feature/src/lib/basics-feature.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BasicsFeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
