define(['marionette'],function(Marionette) {
  'use strict';

  return Marionette.AppRouter.extend({
    appRoutes:{
      'groups'                     : 'groupsIndex',
      'groups/new'                 : 'groupNew',
      'groups/:id/groups/new'      : 'groupNew',
      'groups/create'              : 'groupCreate',
      'groups/:id/groups/create'   : 'groupCreate',
      'groups/:id'                 : 'groupShow',
      'groups/:id/edit'            : 'groupEdit',
      'groups/:id/update'          : 'groupUpdate',
      'groups/:id/delete'          : 'groupDelete',

      'groups/:id/users/:id' : 'groupUserShow',

      'groups/:id/categories/:id'            : 'groupCategoryShow',
      'groups/:id/users/:id/categories/:id'  : 'groupUserCategoryShow',
    }
  });

});
