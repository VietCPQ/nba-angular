import { createActionGroup, props } from "@ngrx/store";

export const TeamsTrackingActions = createActionGroup({
    source: 'Teams',
    events: {
        'Add Tracking Team': props<{ teamId: string }>(),
        'Remove Tracking Team': props<{ teamId: string }>(),
    },
});