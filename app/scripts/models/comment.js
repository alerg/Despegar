/*global define*/

define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    'use strict';

    var months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov",  "Dic"];

    var parseDate = function(date){

        if(date != null){
            var date = new Date(date);
            return date.getDay() +' '+ months[date.getMonth()] +' '+ date.getFullYear();
        }else{
            return date;
        }
    }

    var CommentModel = Backbone.Model.extend({
        defaults: {
            message: '',
            name: '',
            date: '',
            info: ''
        },

        parse: function(response, options) {
            this.message = response.message || null;
            this.name = response.name || null;
            this.date = parseDate(response.date);
            this.info = response.info || null;
            
            delete response.name;
            delete response.message;
            delete response.date;
            delete response.info;
            return this;
        }
    });

    return CommentModel;
});
