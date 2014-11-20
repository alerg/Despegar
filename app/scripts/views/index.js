/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var HotelView = Backbone.View.extend({
        template: JST['app/scripts/templates/index.ejs'],

        id: 'cuerpo',

        tagName: 'div',

        className: 'col-md-12 cuerpo radius',

        events: {
        },

        initialize: function () {
        },

        render: function (callback) {
            this.$el.html(this.template());
            callback(this);
        }
    });

    return HotelView;
});

