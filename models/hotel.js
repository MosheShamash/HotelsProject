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

    ratingAsStars() {      
        return "*".repeat(this.rating())
    }

    urlSlug() {
        var nameLowercase = this.name.toLowerCase()
        var cityLowercase = this.city.toLowerCase()
        var splitNameArr = nameLowercase.split(" ")
        splitNameArr.push(cityLowercase)
        return splitNameArr.join("_")
    }
}
module.exports = Hotel