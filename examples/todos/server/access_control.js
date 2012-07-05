Meteor.startup(function() {
  var visibleToUser = function(userId, task) {
    return !task.privateTo || task.privateTo === userId;
  };

  Todos.allow({
    update: visibleToUser,
    remove: visibleToUser,
    fetch: ['privateTo']
  });
});
