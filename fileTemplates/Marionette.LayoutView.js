define(function(require) {
    var Utilities = require('app/utilities/utilities'),
        ${VIEW_NAME}LayoutTpl = require('text!./template/${TEMPLATE_NAME}'),
        Marionette = require('marionette');
    
    var ${VIEW_NAME}LayoutView = Marionette.LayoutView.extend({
        template: Utilities.TemplateHelper.compile(${VIEW_NAME}LayoutTpl),
        initialize: function(options) {},
        regions: {
        
        }
    });
    
    return ${VIEW_NAME}LayoutView;
})