define(function(require) {
    var Lib = require('app/lib/lib'),
        Utilities = require('app/utilities/utilities'),
        Backbone = require('backbone'),
        Marionette = require('marionette'),
        GlobalChannel = require('app/globalchannel');
    
    var ${CONTROLLER_NAME}Controller = Marionette.Controller.extend({
        initialize: function(options) {}
    });
    
    return ${CONTROLLER_NAME}Controller;
})