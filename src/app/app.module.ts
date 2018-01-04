import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {QuicknotesComponent} from './quicknotes/quicknotes.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    QuicknotesComponent

  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
