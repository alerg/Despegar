/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST, googleMaps) {
    'use strict';

    var GoogleMapView = Backbone.View.extend({
        template: JST['app/scripts/templates/googlemap.ejs'],

        tagName: 'div',

        className: 'mapaContent',

        initialize: function() {},

        render: function (callback) {
            this.$el.html(this.template);
            callback(this);
        }
    });

    return GoogleMapView;
});

