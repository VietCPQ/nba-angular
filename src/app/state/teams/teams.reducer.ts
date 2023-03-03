import { Team } from '../../model/teams.model';
import { TeamsApiActions } from './teams.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: ReadonlyArray<Team> = [];

export const teamsReducer = createReducer(
    initialState,
    on(TeamsApiActions.retrievedTeamList, (_state, { teams }) => teams)
);