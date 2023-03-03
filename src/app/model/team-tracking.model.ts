export interface HomeTeam {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
}

export interface VisitorTeam {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
}

export interface TrackingInfo {
    id: number;
    date: Date;
    home_team: HomeTeam;
    home_team_score: number;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team: VisitorTeam;
    visitor_team_score: number;
    winPoint: number;
    lostPoint: number;
    statusText: string;
}

export interface Meta {
    total_pages: number;
    current_page: number;
    next_page?: any;
    per_page: number;
    total_count: number;
}

export interface trackingResponse {
    data: TrackingInfo[];
    meta: Meta;
}