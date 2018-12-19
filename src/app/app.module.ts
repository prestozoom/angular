import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormsComponent } from './forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule,
          MatNativeDateModule,
          MatButtonModule,
          MatInputModule,
          MatIconModule,
          MatFormFieldModule,
          MatMenuModule,
          MatGridListModule,
          MatCardModule,
          MatSelectModule,
          MatDividerModule,
          MatCheckboxModule,
          MatToolbarModule,
          MatTableModule, MatPaginatorModule, MatSortModule
          } from '@angular/material';

import { DatatableComponent } from './datatable/datatable.component';
import { GobblerComponent } from './datatable/gobbler/gobbler.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
{ path: 'calendar', component: CalendarComponent },
{ path: 'forms', component: FormsComponent },
{ path: 'tables', component: DatatableComponent },
{ path: 'tables/gobbler', component: GobblerComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    FormsComponent,
    DatatableComponent,
    GobblerComponent
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatCheckboxModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule  ],
  providers: [MatDatepickerModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }

