import { createFeatureSelector, createSelector } from "@ngrx/store";
import { selectTeams } from "../teams/teams.selectors";

export const selectTeamsTrackingState = createFeatureSelector<
    ReadonlyArray<string>
>('teamsTracking');

export const selectTrackingTeams = createSelector(
    selectTeams,
    selectTeamsTrackingState,
    (teams, teamsTracking) => {
        return teamsTracking.map((id) => teams.find((team) => team.id.toString() === id)!);
    }
);