import { TeamCardComponent } from './overview/team-card/team-card.component';
import { TeamsTrackingReducer } from './state/teamsTracking/teams-tracking.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { teamsReducer } from './state/teams/teams.reducer';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ResultsComponent,
    TeamCardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ teams: teamsReducer, teamsTracking: TeamsTrackingReducer }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
