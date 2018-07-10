const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel.js')
describe('Hotel', function() {

    var hotel = new Hotel("Hilton Metropole", "London")

    it("returns the name of the hotel", function(){
        result = hotel.hotelName()
        expect(result).to.equal("Hilton Metropole")
    })

    it("returns the location of the hotel (city)", function(){
        result = hotel.hotelCity()
        expect(result).to.equal("London")
    })

    it("returns a list of the reviews for the hotel", function(){
        result = hotel.getReviews()
        expect(result).to.equal([])
    })


});
