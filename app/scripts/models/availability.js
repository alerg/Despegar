/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var AvailabilityModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
            from: '',  
            to: ''
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            this.from = response.from || null;
            this.to = response.to || null;
            delete response.from;
            delete response.to;

            return response;
        }
    });

    return AvailabilityModel;
});
