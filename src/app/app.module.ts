import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ExternalButtonsComponent } from './components/external-buttons/external-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ExternalButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
