two kinds of timers that you can work with:

1) setTimeout(function() {...}, 0); //sets function once

2) setInterval(function() {...}, 0); // sets function on interval

Similarity: both take two arguments, first is function you wish to invoke and the second the period of delay that you wish before you invoke the function.

-There are other overloads that allow you to pass in a string as the first argument, but it's not recommended.
- Some browsers also implement a way to pass in arguments to the function that is being invoked through setTimeout or setInterval, but not fully implemented by all browser.

- Delay of < 4 ms will be bumped to 4 ms.
  - timer cannot execute until outermost function which it was created within has finished its execution.


  Example of a simple function that has a couple of setTimeout invocations

  var fn = function() {
    setTimeout(function() {...}, 0); //1 1st run through
    setTimeout(function() {...}, 0); //2 2nd run through
    setTimeout(function() {...}, 0); //3 3rd run through
  };

  fn();

  As soon as timer stack is released, the first run through will occur, but if there's other asynchronous function is running like an AJAX call, the response would then be popped to the top and executed at the next available point.
  Then the second and third can occur.

  Browser can only do updates to ui or executing javascript at any given time, it can't run both. -
    - Long running JS can make it seem that the browser is unresponsive and it ends up providing bad user experience.


  Idea of Async is to split out long running js in parts so we use setTimeout
    - we want to ensure that the user does not think that the browser is unresponsive.
    - make sure that there's enough of a gap between timeouts to allow ui thread to start responding and not jump into the next one.  
