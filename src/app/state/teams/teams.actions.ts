import { Team } from '../../model/teams.model';
import { createActionGroup, props } from '@ngrx/store';

export const TeamsApiActions = createActionGroup({
    source: 'Teams API',
    events: {
        'Retrieved Team List': props<{ teams: ReadonlyArray<Team> }>(),
    },
});