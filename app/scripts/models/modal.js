/*global define*/

define([
    'underscore',
    'backbone',
    'models/availability'
], function(_, Backbone, Availability) {
    'use strict';

    var ModalModel = Backbone.Model.extend({
        initialize: function(attributes) {
            this.from = attributes.from || null;
            this.to = attributes.to || null;
        },

        defaults: {
            from: '',
            to: ''
        }
    });

    return ModalModel;
});
