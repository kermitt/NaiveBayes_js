var Seen = function() {
    this.seen = 0;
    this.likelyhood = 0;
    this.posteriorProbability = 0;
}

Seen.prototype.setLikelyhood = function(class_prior) {
    this.likelyhood  = this.seen / class_prior;
}

Bayes = {
    setup: function (all_buckets, all_dimensions) {
        //this.buckets = all_buckets; // e.g., ["MALE","FEMALE"]

        this.dimension_names = all_dimensions;

        this.dimensions_LoH = []; // e.g., ["HEIGHT","WATCHES_FOOTBALL","LIKES_LEGOS", "WEIGHT"]
        this.buckets = {};

        for ( var index in all_buckets) {
            let key = all_buckets[index];
            this.buckets[key] = new Seen();
        }

        for ( var index in all_dimensions) {
            this.dimensions_LoH[index] = {};
        }
    },

    train: function (bucket, actual_observations) {

        for ( var index in actual_observations) {
            let actual = actual_observations[index];
            if (!this.dimensions_LoH[index].hasOwnProperty(actual)) {
                this.dimensions_LoH[index][actual] = {};
            }
            if (!this.dimensions_LoH[index][actual].hasOwnProperty(bucket)) {
                this.dimensions_LoH[index][actual][bucket] = new Seen();
            }
            this.dimensions_LoH[index][actual][bucket].seen++;
        }
        this.buckets[bucket].seen++;
    },

    calculate: function () {


        for (var index in this.dimensions_LoH) {
            for (var actual in this.dimensions_LoH[index]) {
                for (var bucket in this.dimensions_LoH[index][actual]) {
                    let seen = this.dimensions_LoH[index][actual][bucket];
                    let subtotal = this.buckets[bucket].seen;
                    this.dimensions_LoH[index][actual][bucket].setLikelyhood(subtotal);
                }
            }
        }
    },

    // Boxic boku mah gosis
    guess : function(given_dimensions) {

        var results = {};


        console.log(given_dimensions)



        for (var index in given_dimensions) {
            var actual = given_dimensions[index];
            for (var bucket in this.dimensions_LoH[index][actual]) {
                let seen = this.dimensions_LoH[index][actual][bucket];
                let subtotal = this.buckets[bucket].seen;


                console.log(index + " " + actual + " " + bucket + " seen " + seen.seen + " likelyhood: " + seen.likelyhood.toFixed(3) + "  sub " + subtotal );

                this.dimensions_LoH[index][actual][bucket].setLikelyhood(subtotal);


                if ( ! results.hasOwnProperty(bucket)) {
                    results[bucket] = seen.likelyhood;
                } else {
                    results[bucket] *= seen.likelyhood;
                }
            }
        }

        var total = 0;
        for ( var bucket in this.buckets ) {
            total += this.buckets[bucket].seen;
        }


        console.log("total: " +  total);
        for ( var bucket in this.buckets ) {
            let bucket_likelyhood = this.buckets[bucket].seen / total; // e.g., 5/9
            results[bucket] *= bucket_likelyhood;
             console.log("bucket_likelyhood: " + bucket_likelyhood + " this.buckets[bucket] " + this.buckets[bucket].seen);
        }

        for ( var i in results ) {

            console.log( i + "............." + results[i]);

        }


    },



    display : function() {
        for (var index in this.dimensions_LoH) {
            console.log("Index " + this.dimension_names[index] ) ;
            for (var actual in this.dimensions_LoH[index]) {
                for (var bucket in this.dimensions_LoH[index][actual]) {
                    let seen = this.dimensions_LoH[index][actual][bucket];
                    let subtotal = this.buckets[bucket].seen;

                    console.log("\t" + actual + "\t" + bucket + "\t" + seen.seen + " Likelyhood: " + seen.likelyhood.toFixed(3) + " subtotal: " + subtotal );
                }
            }
        }

        console.log("+------ TOTALS ----------------+");
        for ( var key in this.buckets ) {
            let seen = this.buckets[key];
            console.log(seen.seen +"\t" + key );
        }
    }
}

try {
    exports.Bayes = Bayes;
} catch ( if_this_is_from_the_web_then_ignore_this ) {
    console.log(if_this_is_from_the_web_then_ignore_this);
}