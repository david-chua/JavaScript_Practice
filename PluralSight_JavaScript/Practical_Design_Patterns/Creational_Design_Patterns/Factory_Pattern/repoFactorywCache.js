var repoFactory = function() {

  this.getRepo = function(repoType) {
    if(repoType === 'task') {
      if(this.taskRepo) {
        console.log('retrieving from Cache');
        return this.taskRepo;
      } else {
        this.taskRepo = require('./taskRepository');
        // config code - might have it.
        return this.taskRepo;
      }

  }
  if (repoType === 'user') {
    var userRepo = require('./userRepository');
    return userRepo;
  }
  if (repoType === 'project') {
    var projectRepo = require('./projectRepository');
    return projectRepo;
  }
}
};
