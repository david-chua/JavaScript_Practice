- Observer Pattern:

Allow for loosely coupled system
One object is the focal point
Group of objects watch for changes

We're dealing with tasks with three services: Logging, Notfication, and Auditing
  - tasks service lets the other three services know what is going on but in a loosely couple systems.
  - the services looks at tasks and see if there are any changes.
  - In tasks, we have a notify method and a list of Observers(this case, the three services)
