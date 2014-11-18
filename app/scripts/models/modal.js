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

            if(this.from && this.to){
                var date1 = new Date(this.from.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
                var date2 = new Date(this.to.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3") );;
                var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                this.set("days", diffDays.toString());
            }
        },

        defaults: {
            from: '',
            to: '',
            days:''
        }
    });

    return ModalModel;
});
