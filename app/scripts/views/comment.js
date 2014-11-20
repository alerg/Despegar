/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var CommentView = Backbone.View.extend({
        template: JST['app/scripts/templates/comment.ejs'],

        tagName: 'div',

        className: 'col-md-12 nopadding comments',

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function (callback) {
            this.$el.html(this.template(this.model.toJSON()));
            this.listenTo(this.$el, 'change', this.render);
            callback(this);
        }
    });

    return CommentView;
});

