import { TeamsTrackingActions } from './../state/teamsTracking/teams-tracking.actions';
import { selectTeams } from './../state/teams/teams.selectors';
import { NbaService } from './../service/nba.service';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { selectTrackingTeams } from '../state/teamsTracking/teams-tracking.selectors';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  teams$ = this.store.select(selectTeams)
  trackingTeam$ = this.store.select(selectTrackingTeams)

  onAdd(teamId: string) {
    if (teamId) {
      this.store.dispatch(TeamsTrackingActions.addTrackingTeam({ teamId }))
    }
  }

  constructor(private nbaService: NbaService, private store: Store) { }
}
