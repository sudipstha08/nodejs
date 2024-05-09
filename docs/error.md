## Errors

### heap out of memory 
- JavaScript's heap out of memory error typically occurs when the Node.js environment runs out of memory during garbage collection due to heavy memory usage or memory leaks. This guide provides actionable solutions for engineers to troubleshoot and resolve this error.
- When Node.js applications consume more memory than what is available, V8 triggers garbage collection to free up space. If this process does not recover enough memory, the ineffective mark-compacts near heap limit allocation failed error is thrown, signaling that the JavaScript heap is out of memory.

### Maximum depth reached
- The error message "Maximum call stack size exceeded" or "Maximum depth reached" typically occurs in JavaScript when a function recurses (calls itself) too many times without reaching a base case to stop the recursion. This results in the call stack growing too large until it exceeds its maximum size, leading to the error.


[REFERENCES]
- https://www.basedash.com/blog/how-to-fix-ineffective-mark-compacts-near-heap-limit-allocation-failed-javascript-heap-out-of-memory