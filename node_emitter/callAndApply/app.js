var obj = {
  name: 'John Doe',
  greet: function(){
    console.log(`Hello ${this.name}`);
  }
}

obj.greet();
obj.greet.call({ name: 'Jane Doe' });
obj.greet.apply({ name: 'David Chua'});

//The only difference between .call and .apply is that you put in a comma separated list for call, in apply you apply an array of parameters. 

//