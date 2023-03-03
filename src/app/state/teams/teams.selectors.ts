import { createFeatureSelector } from '@ngrx/store';
import { Team } from 'src/app/model/teams.model';

export const selectTeams = createFeatureSelector<ReadonlyArray<Team>>('teams');