/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var HotelView = Backbone.View.extend({
        template: JST['app/scripts/templates/hotel.ejs'],

        tagName: 'div',

        className: 'row hotel',

        events: {
            'click [data-interactive="disponibilidad"]': 'viewModal'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function (callback) {
            this.$el.html(this.template(this.model.toJSON()));
            this.listenTo(this.$el, 'change', this.render);
            callback(this);
        },

        viewModal: function(e){
            this.trigger('viewAvailability');
        }
    });

    return HotelView;
});

