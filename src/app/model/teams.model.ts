export interface Team {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
}

export interface Meta {
    total_pages: number;
    current_page: number;
    next_page?: any;
    per_page: number;
    total_count: number;
}

export interface TeamResponse {
    data: Team[];
    meta: Meta;
}