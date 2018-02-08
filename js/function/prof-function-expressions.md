
## Two ways to define a function

* by function declaration (assign the name property)

        function functionName(arg0, arg1) {}
        
  function declaration hoisting
  the function declaration is read first before the code begins to execute

        
        sayHi()
        function sayHi(){}
    
* by function expression (anonymous function, the name property is empty)

        var functionName = function(arg0, arg1) {}
        
  must be assigned before usage
  
        var sayHi = function() {}
        sayHi()
        
  assign function expressions to the variable sayHi based on condition
  
        var sayHi
        if (condition) {
            sayHi = function() {
                alert("Morning!")
            }
        } else {
            sayHi = function() {
                alert("Evening!")
            }
        }
        
  The ability to create functions for assignment to variables also allows you to return functions as the value of other functions. 能够创建函数再赋值给变量，也就能把函数作为其他函数的值返回。
  Any time a function is being used as a value, it is a function expression.
        
## Recursion 递归

A recursive function typically is formed when a function calls itself by name.

      function factorial(num){ 
          if (num <= 1) {
              return 1; 
          } else {
              return num * factorial(num-1); 
          }
      }
      (易出错)

arguments.callee is a pointer to the function being executed.是一个指向正在执行的函数的指针
 
      return num * arguments.callee(num-1);
      (严格情况下不能使用)
      
use named function expressions to achieve the same result

      var factorial = (function f(num){
        if (num <= 1){
            return 1;
        } else {
            return num * f(num-1);
        } 
      });
      
创建一个名为 f()的命名函数表达式，然后将它赋值给变量 factorial。即便把函数赋值给了另一个变量，函数的名字 f 仍然有效，所以递归调用照样能正确完成。

## Closures 闭包