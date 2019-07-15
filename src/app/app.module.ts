import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgMaterial2FacetSearchModule } from 'ng-material2-facet-search';
import { MatCardModule, MatDividerModule, MatCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import{HttpClientModule} from '@angular/common/http';
import{ClientFilterPipe} from './clients/client-filter.pipe';
import {ListClientsComponent} from './clients/list-clients.component';
import{ClientsService} from './clients/client.service';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    NgMaterial2FacetSearchModule, 
    HttpClientModule
  ],
  declarations: [AppComponent, ListClientsComponent, ClientFilterPipe],
  providers: [ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
