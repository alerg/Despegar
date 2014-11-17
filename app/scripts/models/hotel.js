/*global define*/

define([
    'underscore',
    'backbone',
    'models/availability'
], function(_, Backbone, Availability) {
    'use strict';

    var HotelModel = Backbone.Model.extend({
        defaults: {
            name: '',
            address: '',
            stars: '',
            description: '',
            rating: '',
            comments: '',
            price: '',
            availability: {},
            urlimage: ''
        },

        parse: function(response, options) {
            this.name = response.name || null;
            this.address = response.address || null;
            this.stars = response.stars || null;
            this.description = response.description || null;
            this.rating = response.rating || null;
            this.comments = response.comments || null;
            this.price = response.price || null;
            this.description = response.description || null;
            this.availability = new Availability(response.availability || null, {
                parse: true
            });

            delete response.name;
            delete response.address;
            delete response.stars;
            delete response.description;
            delete response.rating;
            delete response.comments;
            delete response.price;
            delete response.description;
            delete response.availability;

            return this;
        },

        setUrlimage: function(urlimage){
            this.set({'urlimage':urlimage});
        }
    });

    return HotelModel;
});
