import {
    FETCH_SHOWS,
    FETCH_SHOWS_SUCCESS,
    FETCH_SHOWS_ERROR
} from './constants'

const initialState = {
    shows: [],
    fetchShows: false,
    fetchShowsSuccess: false,
    fetchShowsError: false
}

export const showsPageReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_SHOWS:
            return {
                ...state,
                fetchShows: true,
            }
            break;
        case FETCH_SHOWS_SUCCESS:
            return {
                ...state,
                fetchShows: false,
                fetchShowsSuccess: true,
                shows: action.shows
            }
            break;
        case FETCH_SHOWS_ERROR:
            return {
                ...state,
                fetchShows: false,
                fetchShowsSuccess: false,
                fetchShowsError: true
            }
            break;
        default:
            return state
    }
}