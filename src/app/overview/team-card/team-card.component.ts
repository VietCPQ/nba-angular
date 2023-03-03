import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { NbaService } from './../../service/nba.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Team } from 'src/app/model/teams.model';
import { TeamsTrackingActions } from 'src/app/state/teamsTracking/teams-tracking.actions';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit, OnDestroy {

  @Input()
  teamData!: Team;
  infoSubscription!: Subscription;
  listStatus: string[] = []
  avgScored: number = 0;
  avgConceded: number = 0;

  constructor(private nbaService: NbaService, private store: Store) { }

  ngOnInit(): void {
    this.infoSubscription = this.nbaService.getTeamTrackingInfo(this.teamData.id).subscribe(dt => {
      this.avgScored = Math.round(dt.reduce((p, c) => p + c.winPoint, 0) / dt.length)
      this.avgConceded = Math.round(dt.reduce((p, c) => p + c.lostPoint, 0) / dt.length)
      this.listStatus = dt.map(val => val.statusText)
    })
  }

  removeTrackingTeam(): void {
    this.store.dispatch(TeamsTrackingActions.removeTrackingTeam({ teamId: this.teamData.id.toString() }));
  }

  ngOnDestroy(): void {
    this.infoSubscription.unsubscribe();
  }
}
