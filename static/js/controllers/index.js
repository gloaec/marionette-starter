define(['vent'], function (vent) {
  "use strict";

  return {
    setFilter : function(param) {
      vent.trigger('todoList:filter', param.trim() || '');
    },

    groupsIndex: function(){
        vent.trigger('groups:index');
    },
    groupNew: function(parent_id){
        vent.trigger('group:new', { parent_id: parseInt(parent_id)});
    },
    groupCreate: function(parent_id){ 
        vent.trigger('group:create', { parent_id: parseInt(parent_id)});
    },
    groupShow: function(group_id){
        vent.trigger('group:show', group_id);
    },
    groupEdit: function(group_id){
        vent.trigger('group:edit', group_id);
    },
    groupUpdate: function(group_id){
        vent.trigger('group:update', group_id);
    },
    groupDelete: function(group_id){
        vent.trigger('group:delete', group_id);
    },
    groupUserShow: function(group_id, user_id){ 
        vent.trigger('groupUser:show', group_id, user_id) 
    },
    groupCategoryShow: function(group_id, category_id) {
       vent.trigger('groupCategory:show', group_id, category_id);
    },
    groupUserCategoryShow: function(group_id, user_id, category_id) {
        vent.trigger('groupUserCategory:show', group_id, user_id, category_id);
    }
  };
});
