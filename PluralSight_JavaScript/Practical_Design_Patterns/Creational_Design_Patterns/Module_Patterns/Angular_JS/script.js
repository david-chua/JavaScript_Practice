(function() {
  var app = angular.module('taskManager', []);

  var taskController = function(Task) {

    var ctrl = this;
    ctrl.tasks = [new Task({name:'task 1'}),
    new Task({name:'task 2', completed: true})];

    this.complete = function(item){
      console.log('completing task ' +
      ctrl.tasks[item].name );
      ctrl.tasks[item].completed = true;
    }
  };

  app.controller('taskCtrl', taskController)
}());
