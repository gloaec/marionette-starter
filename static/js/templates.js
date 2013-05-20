define(function(require){
  "use strict";

  return {
    header                 : require('tpl!templates/header.tmpl'),
    body                   : require('tpl!templates/body.tmpl'),
    sidebar                : require('tpl!templates/sidebar.tmpl'),
    footer                 : require('tpl!templates/footer.tmpl')
  };
});

