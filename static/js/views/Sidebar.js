define(['marionette','vent','templates'], 
function (Marionette,vent,templates) {
  "use strict";

  return Marionette.Layout.extend({

    template : templates.sidebar,

    tagName: 'div',

    className: 'well sidebar-nav',
    
    regions : {},

    ui : {},

    events : {},

    initialize: function(){
    
    },

    onRender : function() {

    }
  });
});
