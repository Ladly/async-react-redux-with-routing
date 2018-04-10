import { 
    CHANGE_TITLE, 
    CHANGE_IT_BACK 
} from './constants'


const initialState = {
    titleChange: false,
    nameToPass: 'Vuk'
};


export const statefullReducer = (state=initialState, action) => {
    switch(action.type) {
        case CHANGE_TITLE:
        return { 
            ...state,
            titleChange: true
        }
        case CHANGE_IT_BACK:
            return {
                ...state,
                titleChange: false
            }
        default: 
            return state
    }
}