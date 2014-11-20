/*global define*/

define([
    'underscore',
    'backbone',
    'models/comment',
    'views/comment'
], function (_, Backbone, CommentModel, CommentView) {
    'use strict';

    var CommentCollection = Backbone.Collection.extend({
    	url:'http://localhost:8080/comment',
        model: CommentModel,
        template: null,
        initialize: function(){
			var that = this;

        	this.pull(function(error) {
	            if (error)
	                return;

				$.each(that.models, function(index) {
		            
		            var commentView = new CommentView({
		                model: that.models[index]
		            });

		            commentView.render(function(param) {
		                $("#comments").append(param.$el);
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
					console.log("Error pull comment");
					callback(error);
				}
			})
		}, 
		parse : function(response){
			return response.comments;
		}
	});

    return CommentCollection;
});
