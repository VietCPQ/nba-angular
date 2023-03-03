import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { NbaService } from './service/nba.service';
import { TeamsApiActions } from './state/teams/teams.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  nbaSubscription!: Subscription;
  constructor(private nbaService: NbaService, private store: Store) { }

  ngOnInit(): void {
    this.nbaSubscription = this.nbaService
      .getListTeam()
      .subscribe((teams) => this.store.dispatch(TeamsApiActions.retrievedTeamList({ teams })));
  }

  ngOnDestroy(): void {
    this.nbaSubscription.unsubscribe();
  }
}
