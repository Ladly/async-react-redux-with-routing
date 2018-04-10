import  {
    FETCH_DATA_PENDING,
    FETCH_DATA_FULFILLED,
    FETCH_DATA_REJECTED
} from './constants'

const initialState = {
    user: {},
    fetchDataLoading: false,
    fetchDataSuccess: false,
    fetchDataError: false
}

export const homePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_DATA_PENDING:
            return {
                ...state, 
                data: [],
                fetchDataLoading: true,
                }
                break;
        case FETCH_DATA_FULFILLED:
            return {
                ...state, 
                fetchDataLoading: false,
                user: action.payload
                }
                break;
        case FETCH_DATA_REJECTED:
            return {
                ...state, 
                fetchDataLoading: false,
                fetchDataError: true
                }
                break;
        default: 
            return state
    }
}