define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

var BaseModalView = Backbone.View.extend({

    id: 'base-modal',
    className: 'modal fade',
    template: JST['app/scripts/templates/modal.ejs'],

    events: {
      'hidden': 'teardown'
    },

    initialize: function() {
      _(this).bindAll();
      this.render();
    },

    show: function() {
      this.$el.modal('show');
    },

    teardown: function() {
      this.$el.data('modal', null);
      this.remove();
    },

    render: function() {
      this.renderView(this.template(this.model.toJSON()));
      return this;
    },

    renderView: function(template) {
      this.$el.html(template);
      this.$el.modal({show:true}); // dont show modal on instantiation
    }
 });

    return BaseModalView;
});