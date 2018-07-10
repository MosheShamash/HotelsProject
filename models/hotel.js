class Hotel {

    constructor(name, city) {
        this.name = name
        this.city = city
    }

    hotelName() {
        return this.name
    }

    hotelCity() {
        return this.city
    }
}
module.exports = Hotel