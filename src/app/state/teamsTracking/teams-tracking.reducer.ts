import { TeamsTrackingActions } from './teams-tracking.actions'
import { createReducer, on } from '@ngrx/store';

export const initialState: ReadonlyArray<string> = [];

export const TeamsTrackingReducer = createReducer(
    initialState,
    on(TeamsTrackingActions.removeTrackingTeam, (state, { teamId }) =>{
        return state.filter((id) => id !== teamId)
    }
    ),
    on(TeamsTrackingActions.addTrackingTeam, (state, { teamId }) => {
        if (state.indexOf(teamId) > -1) return state;

        return [...state, teamId];
    })
);