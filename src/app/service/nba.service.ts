import { TrackingInfo } from './../model/team-tracking.model';
import { FormatDate } from '../helper/DateHelper';
import { TeamResponse } from './../model/teams.model';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Team } from '../model/teams.model';
import { trackingResponse } from '../model/team-tracking.model';

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  private headerObtion: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headerObtion = new HttpHeaders({
      "X-RapidAPI-Key": "2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX",
      "X-RapidAPI-Host": "free-nba.p.rapidapi.com"
    })
  }

  getListTeam(): Observable<Team[]> {
    return this.http.get<TeamResponse>("https://free-nba.p.rapidapi.com/teams", {
      headers: this.headerObtion
    }).pipe(
      map(n => n.data || [])
    );
  }

  getTeamTrackingInfo(teamId: number): Observable<TrackingInfo[]> {
    let params = new HttpParams({})
      .set("page", 0)
      .set("per_page", 12)
      .set("team_ids[]", teamId);

    for (let i = 1; i < 13; i++) {
      let d = new Date();
      d.setDate(d.getDate() - i)

      params = params.append("dates[]", FormatDate(d))
    }

    return this.http.get<trackingResponse>("https://free-nba.p.rapidapi.com/games", {
      headers: this.headerObtion,
      params: params,
    }).pipe(
      map(dt => dt.data.map(info => {
          if (info.home_team.id === teamId) {
            info.winPoint = info.home_team_score;
            info.lostPoint = info.visitor_team_score;
            info.statusText = info.home_team_score > info.visitor_team_score ? "W" : "L";
          } else {
            info.winPoint = info.visitor_team_score;
            info.lostPoint = info.home_team_score;
            info.statusText = info.home_team_score < info.visitor_team_score ? "W" : "L";
          }
          return info;
        }) || []
      )
    );
  }
}
