(function() {
  var app = angular.module('taskManager', []);

  var taskController = function(Task) {

    var ctrl = this;
    ctrl.tasks = [new Task({name:'task 1'}),
    new Task({name:'task 2', completed: true})];

    //moved this function into the task.js file  - Contructor pattern 
    // this.complete = function(item){
    //   console.log('completing task ' +
    //   ctrl.tasks[item].name );
    //   ctrl.tasks[item].completed = true;
    // }
  };

  app.controller('taskCtrl', taskController)
}());



//
//
//   app.factory('Task', function(TaskRepository) {
//     var Task = function(data) {
//       this.name = data.name;
//       this.complete = data.completed;
//     }
//     Task.prototype.complete = function() {
//       console.log('completing task: ' + this.name);
//       this.completed = true;
//       this.save();
//     };
//
//     Task.prototype.save = function() {
//       TaskRepository.save(this);
//     };
//     return Task;
//   });
// }())
