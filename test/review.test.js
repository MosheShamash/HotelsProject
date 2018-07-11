const chai = require('chai');
const expect = chai.expect;

var Review = require('../models/review.js')

describe('Review', function() {

    var review1 = new Review(5, "Excellent hotel, very clean", "2018-12-17")

    it("returns the rating from the review", function(){
        result = review1.rating
        expect(result).to.eql(5)
    })
})