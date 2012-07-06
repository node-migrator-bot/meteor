Meteor.startup(function() {
  var visibleToUser = function(userId, tasks) {
    return _.all(tasks, function(task) {
      return !task.privateTo || task.privateTo === userId;
    });
  };

  Todos.allow({
    insert: function () { return true; },
    update: visibleToUser,
    remove: visibleToUser,
    fetch: ['privateTo']
  });

  Lists.allow({
    insert: function () { return true; }
  });
});
