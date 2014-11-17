define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'bootstrap-modal',
    'collections/hotel',
    'views/hotel',
    'views/modal',
    'models/modal'
], function($, _, Backbone, Bootstrap, Modal, HotelCollection, HotelView, ModalView, ModalModel) {
    var initialize = function() {

        var that = this;
        this.collection = new HotelCollection();
        this.collection.pull(function(error) {
            if (error)
                return;
            $.each(that.collection.models, function(index) {
                that.collection.models[index].setUrlimage('images/hoteles/hotel'+ index +'.png');
                
                var view = new HotelView({
                    model: that.collection.models[index]
                });
                
                view.render(function(param) {
                    $("#container").append(param.$el);
                });
                
                view.on("viewAvailability", function(){
                    var model = new ModalModel({from:view.model.availability.from, to:view.model.availability.to});
                    modalView = new ModalView({model:model});
                    modalView.show();
                });
            });
        });
    }

    return {
        initialize: initialize
    };
});
