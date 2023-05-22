export interface ISearchInput {
    'q': string,
    'query_by': string,
    'sort_by': string
}

export interface IResponse {
    facet_counts: any[]
    found: number
    hits: IHit[]|[]
    out_of: number
    page: number
    request_params: IRequestParams
    search_cutoff: boolean
    search_time_ms: number
}
  
export interface IHit {
    document: IResult
    highlight: IHighlight
    highlights: IHighlight2[]
    text_match: number
    text_match_info: ITextMatchInfo
}

export interface IResult {
    content_type: string
    created_at: number
    description: string
    id: string
    images: any[]
    protocol: string[]
    rating: number
    tags: string[]
    title: string
    updated_at: number
    videos: any[]
}

export interface IHighlight {
    title: ITitle
}

export interface ITitle {
    matched_tokens: string[]
    snippet: string
}

export interface IHighlight2 {
    field: string
    matched_tokens: string[]
    snippet: string
}

export interface ITextMatchInfo {
    best_field_score: string
    best_field_weight: number
    fields_matched: number
    score: string
    tokens_matched: number
}

export interface IRequestParams {
    collection_name: string
    per_page: number
    q: string
}