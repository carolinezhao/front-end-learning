two ways to define a function:

* by function declaration (assign name property)

        function functionName(arg0, arg1) {}
        
  function declaration hoisting
        
        sayHi()
        function sayHi(){}
    
* by function expression (anonymous function)

        var functionName = function(arg0, arg1) {}
        
  must be assigned before usage
  
        var sayHi = function() {}
        sayHi()