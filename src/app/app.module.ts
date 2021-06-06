import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HomeTestComponent } from './home-test/home-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {LayoutModule} from '@angular/cdk/layout';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { ContentComponent } from './content/content.component';
import { TableComponent } from './table/table.component';
import { TableExampleComponent } from './table-example/table-example.component';

import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HomeTestComponent,
    HeaderComponent,
    ContentComponent,
    TableComponent,
    TableExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatGridListModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
