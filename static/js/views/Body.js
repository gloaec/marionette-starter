define(['marionette','vent','templates','views/Sidebar'],
function (Marionette,vent,templates,Sidebar){
  "use strict";

  return Marionette.Layout.extend({

    template : templates.body,

    tagName: 'div',

    className: 'row-fluid',

    regions : {
      sidebar : '#sidebar',
      main    : '#main',
      breadcrumbs: '#breadcrumbs'
    },

    ui : {},

    events : {},

    initialize : function() {

    },

    onRender : function() {
      this.sidebar.show(new Sidebar({ groups : this.options.groups }));
    }
  });
});
