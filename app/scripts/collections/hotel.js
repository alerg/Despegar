/*global define*/

define([
    'underscore',
    'backbone',
    'models/hotel'
], function (_, Backbone, HotelModel) {
    'use strict';

    var HotelCollection = Backbone.Collection.extend({
    	url:'http://localhost:8080/hotel',
        model: HotelModel,
        pull: function(callback) {
        	this.fetch({
				success: function (collection, response) {
					callback(null);
				},
				error: function(model, error){
					console.log("Error pull hotels");
					callback(error);
				}
			})
		}, 
		parse : function(response){
			return response.hotels;
		}
	});

    return HotelCollection;
});
