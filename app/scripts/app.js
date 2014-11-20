define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'bootstrap-modal',
    'collections/comment',
    'collections/hotel',
    'views/googleMap',
    'views/index',
    'views/modal',
    'models/modal'
], function($, _, Backbone, Bootstrap, Modal, CommentCollection, HotelCollection, GoogleView, IndexView, ModalView, ModalModel) {
    var initialize = function() {

        var that = this;

        var indexView = new IndexView(); 

        indexView.render(function(param){
            $("body").append(param.$el);
            
            new HotelCollection();
            
            new CommentCollection();

            var googleView = new GoogleView();
            googleView.render(function(param) {
                $("#map").append(param.$el);
            });
        });

    }

    return {
        initialize: initialize
    };
});
