import { 
    CHANGE_TITLE, 
    CHANGE_IT_BACK 
} from './constants'

export const changeTitle = () => {
    return {
        type: CHANGE_TITLE,
    }
}

export const changeItBack = () => {
    return {
        type: CHANGE_IT_BACK,
    }
}