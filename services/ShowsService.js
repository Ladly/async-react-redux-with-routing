import { FETCH_SHOWS_URL } from './../utils/constants'

class ShowsService {
    static fetchShows() {
        return fetch(FETCH_SHOWS_URL)
            .then(response => response.json())
    }
}


export { ShowsService }