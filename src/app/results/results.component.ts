import { Team } from './../model/teams.model';
import { NbaService } from './../service/nba.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { selectTeams } from '../state/teams/teams.selectors';
import { TrackingInfo } from '../model/team-tracking.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {
  teams$ = this.store.select(selectTeams);
  teamInfo!: Team;
  resultInfo$!: Observable<TrackingInfo[]>;
  teamsSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private store: Store, private nbaService: NbaService) { }

  ngOnInit() {
    let abbreviation = this.route.snapshot.params["teamCode"]
    this.teamsSubscription = this.teams$.subscribe(teams => {
      if (teams.length > 0) {
        this.teamInfo = teams.filter(team => team.abbreviation === abbreviation)[0];
        this.resultInfo$ = this.nbaService.getTeamTrackingInfo(this.teamInfo.id)
      }
    })
  }

  ngOnDestroy(): void {
    this.teamsSubscription.unsubscribe();
  }
}
