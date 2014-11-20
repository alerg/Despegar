/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        'bootstrap-modal':{
            deps: ['jquery','underscore', 'backbone'],
            exports: 'bootstrap-modal'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        'bootstrap-modal': '../bower_components/backbone.bootstrap-modal/src/backbone.bootstrap-modal',
    }
});

require([
    'backbone',
    'app'
], function (Backbone, app) {
    app.initialize();
    Backbone.history.start();
});
