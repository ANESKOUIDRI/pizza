function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  // Example usage:
  let numbers = [1, 2, 3, 4, 5, 6];
  console.log(getEvenNumbers(numbers)); // Output: [2, 4, 6]
  function filterPeopleOver30(people) {
    return people.filter(person => person.age > 30);
  }
  
  // Example usage:
  let people = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 35, email: "bob@example.com" },
    { name: "Charlie", age: 40, email: "charlie@example.com" }
  ];
  console.log(filterPeopleOver30(people));
  // Output: [{ name: "Bob", age: 35, email: "bob@example.com" }, { name: "Charlie", age: 40, email: "charlie@example.com" }]
  class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element of the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // Check the top element of the stack
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Clear the stack
    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  let stack = new Stack();
  stack.push(1);
  stack.push(2);
  console.log(stack.pop()); // Output: 2
  console.log(stack.peek()); // Output: 1
  class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the queue (end of the array)
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the first element of the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    // Check the first element of the queue
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.items.length;
    }
  
    // Clear the queue
    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  console.log(queue.dequeue()); // Output: 1
  console.log(queue.front()); // Output: 2
  function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
  }
  
  // Example usage:
  let string = "Hello World";
  console.log(removeVowels(string)); // Output: "Hll Wrld"
  function uniqueElements(arr1, arr2) {
    let combined = [...arr1, ...arr2];
    return Array.from(new Set(combined));
  }
  
  // Example usage:
  let array1 = [1, 2, 3];
  let array2 = [3, 4, 5];
  console.log(uniqueElements(array1, array2)); // Output: [1, 2, 3, 4, 5]
  