import { StartGridService } from './services/start-grid.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { observable } from 'rxjs';
import { UploadComponent } from './components/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,

  ],
  providers: [StartGridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
