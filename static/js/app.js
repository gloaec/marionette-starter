define(['marionette','templates','vent','views/Header','views/Body','views/Footer'],
function (Marionette,templates,vent, Header, Body, Footer){
  "use strict";

  window.app = new Marionette.Application();

  app.options = {};

  app.addRegions({
    header : '#header',
    body   : '#body',
      sidebar : '#sidebar',
      main   : '#main',
    footer : '#footer'
  });

  app.addInitializer(function(){
    app.header.show(new Header(app.options));
    app.body.show(new Body(app.options));
    app.footer.show(new Footer(app.options));
  });

  return app;

});


