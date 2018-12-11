define(function(require) {
    var Utilities = require('app/utilities/utilities'),
        ${VIEW_NAME}ItemTpl = require('text!./template/${TEMPLATE_NAME}'),
        Marionette = require('marionette');
    
    var ${VIEW_NAME}ItemView = Marionette.ItemView.extend({
        template: Utilities.TemplateHelper.compile(${VIEW_NAME}ItemTpl),
        initialize: function(options) {}
    });
    
    return ${VIEW_NAME}ItemView;
})