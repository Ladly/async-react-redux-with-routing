class User {
    constructor(gender, name, email, picture) {
        this.gender = gender
        this.firstName = name.first
        this.lastName = name.last
        this.email = email
        this.picture = picture.large
    }
}

export { User }