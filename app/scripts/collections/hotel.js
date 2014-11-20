/*global define*/

define([
    'underscore',
    'backbone',
    'models/hotel',
    'models/modal',
    'views/hotel',
    'views/modal',
], function (_, Backbone, HotelModel, ModalModel, HotelView, ModalView) {
    'use strict';

    var HotelCollection = Backbone.Collection.extend({
    	url:'http://localhost:8080/hotel',
        model: HotelModel,
        template: null,
        initialize: function(){
        				var that = this;

        	this.pull(function(error) {
	            if (error)
	                return;

				$.each(that.models, function(index) {
		            that.models[index].setUrlimage('images/hoteles/hotel'+ index +'.png');
		            
		            var hotelView = new HotelView({
		                model: that.models[index]
		            });

		            hotelView.render(function(param) {
		                $("#container").append(param.$el);
		            });

		            hotelView.on("viewAvailability", function(){
		                var model = new ModalModel({from:hotelView.model.availability.from, to:hotelView.model.availability.to});
		                var modalView = new ModalView({model:model});
		                modalView.show();
		            });
		        });
	        });
        },
        pull: function(callback) {
        	var that = this;
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
