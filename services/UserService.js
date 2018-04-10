import { FETCH_USER_URL } from './../utils/constants'
import { createUser } from './../utils/helpers'

class UserService {

    static fetchUser = () => {
        return fetch(FETCH_USER_URL)
            .then(data => data.json())
            .then(user => createUser(user.results[0]))
    }
}

export { UserService }