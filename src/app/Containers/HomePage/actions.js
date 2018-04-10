import  {
    FETCH_DATA,
    FETCH_DATA_FULFILLED
} from './constants'

import { UserService } from './../../../../services/UserService'

export const fetchData = () => {
    return {
        type: FETCH_DATA,
        payload: UserService.fetchUser()
    }
}




