import { User } from './../entities/User'
import { Shows } from './../entities/Shows'

export const createUser = (obj) => {
    return new User(obj.gender, obj.name, obj.email, obj.picture)
}

export const createShows = (showsArray) => {
    const firstFifty = showsArray.slice(0, 50)
    return firstFifty.map(show => {
        return new Shows(show.id, show.image, show.name)
    })
}