define(function(require) {
    var Utilities = require('app/utilities/utilities'),
        ${VIEW_NAME}CollectionTpl = require('text!./template/${TEMPLATE_NAME}'),
        ${CHILD_VIEW_NAME} = require('./${CHILD_VIEW_FILE}'),
        Marionette = require('marionette');
    
    var ${VIEW_NAME}CollectionView = Marionette.CollectionView.extend({
        template: Utilities.TemplateHelper.compile(${VIEW_NAME}CollectionTpl),
        childView: ${CHILD_VIEW_NAME},
        initialize: function(options) {}
    });
    
    return ${VIEW_NAME}CollectionView;
})