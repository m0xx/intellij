define(function(require) {
    var Utilities = require('app/utilities/utilities'),
        ${VIEW_NAME}CompositeTpl = require('text!./template/${TEMPLATE_NAME}'),
        ${CHILD_VIEW_NAME} = require('./${CHILD_VIEW_FILE}'),
        Marionette = require('marionette');
    
    var ${VIEW_NAME}CompositeView = Marionette.CompositeView.extend({
        template: Utilities.TemplateHelper.compile(${VIEW_NAME}CompositeTpl),
        childView: ${CHILD_VIEW_NAME},
        initialize: function(options) {}
    });
    
    return ${VIEW_NAME}CompositeView;
})