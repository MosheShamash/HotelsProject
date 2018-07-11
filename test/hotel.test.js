const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel.js')
describe('Hotel', function() {

    var hotel = new Hotel("Hilton Metropole", "London")

    it("returns the name of the hotel", function(){
        result = hotel.name
        expect(result).to.equal("Hilton Metropole")
    })

    it("returns the location of the hotel (city)", function(){
        result = hotel.city
        expect(result).to.equal("London")
    })

    it("returns a list of the reviews for the hotel", function(){
        result = hotel.reviews
        expect(result).to.eql([])
    })

    it("returns the number of the reviews for the hotel", function(){
        result = hotel.reviewCount()
        expect(result).to.eql(0)
    })

    it("returns an average rating for the hotel", function(){
        result = hotel.rating()
        expect(result).to.eql(0)
    })
    


});
