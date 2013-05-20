require.config({

  paths : {
    underscore : 'lib/underscore',
    backbone   : 'lib/backbone',
    marionette : 'lib/backbone.marionette',
    jquery     : 'lib/jquery.min',
    bootstrap  : 'lib/bootstrap.min',
    tpl        : 'lib/tpl',
    prettify   : 'lib/prettify.min'
  },

  shim : {
    'lib/backbone-localStorage' : ['backbone'],
    'lib/bootstrap-contextmenu' : ['bootstrap'],
    'lib/bootstrap-typeahead'   : ['bootstrap'],
    underscore : {
      exports : '_'
    },
    backbone : {
      exports : 'Backbone',
      deps : ['jquery','underscore']
    },
    marionette : {
      exports : 'Backbone.Marionette',
      deps : ['backbone']
    },
    prettify: {
      deps : ['jquery','bootstrap']
    }
  },
  
  deps : ['jquery','underscore']
});

require(['app','backbone','routers/index','controllers/index'],
function (app,Backbone,Router,Controller){
  "use strict";
  app.start();
  
  app.router = new Router({
    controller : Controller
  });

  Backbone.history.start();
});
