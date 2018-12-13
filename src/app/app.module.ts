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
          MatCheckboxModule
          } from '@angular/material';


const appRoutes: Routes = [
{ path: 'calendar', component: CalendarComponent },
{ path: 'forms', component: FormsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    FormsComponent
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
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [MatDatepickerModule,  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

