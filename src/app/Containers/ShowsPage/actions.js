import {
    FETCH_SHOWS,
    FETCH_SHOWS_SUCCESS,
    FETCH_SHOWS_ERROR
} from './constants'

import { ShowsService } from './../../../../services/ShowsService'
import { createShows } from './../../../../utils/helpers'

export const fetchShows = () => {
    return {    
    type: FETCH_SHOWS
    }
}

export const fetchShowsSuccess = (shows) => {
    return {
        type: FETCH_SHOWS_SUCCESS,
        shows
    }
}

export const fetchShowsError = () => {
    return {
        type: FETCH_SHOWS_ERROR
    }
}

export function fetchData() {
    return dispatch => {
      dispatch(fetchShows())
      ShowsService.fetchShows()
        .then(shows => createShows(shows))
        .then(shows => {
          dispatch(fetchShowsSuccess(shows))
        })
        .catch(err => console.log('err:', err))
    }
  }
