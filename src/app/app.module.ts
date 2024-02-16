import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; 

import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { SecHeaderComponent } from './sec-header/sec-header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OverviewComponent } from './overview/overview.component';
import { GeneralDataComponent } from './overview/general-data/general-data.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { LeadsComponent } from './overview/leads/leads.component';
import { OpportunitiesComponent } from './overview/opportunities/opportunities.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecHeaderComponent,
    DashboardComponent,
    MainComponent,
    OverviewComponent,
    GeneralDataComponent,
    LeadsComponent,
    OpportunitiesComponent

  ],
  imports: [
    BrowserModule,MatTableModule, MatSortModule, MatPaginatorModule,
    MatInputModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatButtonModule,
    MatTooltipModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
