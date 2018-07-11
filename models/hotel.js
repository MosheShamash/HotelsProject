class Hotel {

    constructor(name, city) {
        this.name = name
        this.city = city
        this.reviews = []
        
    }

    reviewCount() {
        return this.reviews.length    
    }

    rating() {
        var total = 0;
        if (this.reviewCount() == 0) {
            return 0
        } else {
            for(var review of this.reviews){
                total += review.rating
            }
            var averageRating = total/this.reviewCount()
            return Math.round(averageRating)
        }
    }
}
module.exports = Hotel