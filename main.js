// Make your global todos array here.
// Put a few todos in there to start with!
// This is mostly to give us some data to test our functions with.
const todos = [
];


// Now test it here just by console.logging a particular todo index.
// console.log(todos[1]);

// Next: a function that prints a todo.
// For now, just have this function console log the value passed in!
// (We'll expand this helper later.)
function printTodo(str) {
  let ol = document.querySelector('ol');
  let li = document.createElement('li');
  li.innerText = str;
  ol.appendChild(li);
}
// function printTodo(str) {
//   document.querySelector(".todo-list").appendChild(document.createElement('li').innerText = str);
//   // let li = document.createElement("li");
//   // let inputValue = document.querySelector(".todo-input").value;
//   // var t = document.createTextNode(inputValue);
//   // li.appendChild(t);
//   // if (inputValue === '') {
//   //   alert("You must write something!");
//   // } else {
//   //   document.querySelector(".todo-list").appendChild(li);
//   // }
// }


// Now write a function that prints everything on our todo list, INDIVIDUALLY.
// Make SURE to use the above printTodo function!
function printList() {
  for (const todo of todos) {
    printTodo(todo);
  }
}

// //Now test it out by calling your print-everything function. It should print out each item from your todo list array.
// printList();


// // Now please write a function that adds an item to our todo list.
// // Could add it anywhere! We'll talk about where it should be added eventually.
function addTodo(todo) {
  todos.push(todo);
}

// // Test the above function by calling it with a value,
// // then calling your print-everything function and making sure it's in there.
// addTodo('make more todo apps');
// printList();


// // Now write a function that removes an item at a given index from our todo list.
function removeTodo(i) {
  if (i=== 0){

  } else {todos.splice((i-1), 1);
}
}

function removeAll(){
  const ol = document.querySelector(".todo-list");
  while(ol.firstChild) 
  ol.removeChild(ol.firstChild);
}

const clearAndReplace = function(){
  removeAll()
  printList()
}

// // Test the above function by passing it an index, then calling our print-everything
// // function to see if the correct thing was removed.


// // Lastly: write a function that clears all items from our array.
// function clearAll() {
//   todos.splice(0);
// }

// // Test it by calling it and then passing your todos to console log.
// // It should be an empty array now!
// clearAll();
// console.log(todos);
// printList();


const addButton = document.querySelector(".add-todo");
const removeButton = document.querySelector(".remove-todo");

const reset1 = function() {    
  document.querySelector(".todo-input").value = ""
}

const reset2 = function() {    
  document.querySelector(".index-input").value = ""
}

const addStuff = function(){
  let stuffWritten = document.querySelector(".todo-input").value;
  addTodo(stuffWritten);
  printTodo(stuffWritten)
  reset1();
  }

addButton.addEventListener('click', addStuff);

const removeStuff = function(){
  let indexWritten = document.querySelector(".index-input").value;
  removeTodo(indexWritten)
  clearAndReplace()
  reset2()
};

removeButton.addEventListener('click', removeStuff);