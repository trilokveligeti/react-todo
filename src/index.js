import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList'
import * as serviceWorker from './serviceWorker';

const tasks = [
  {
    title: "Load the dishwasher",
    status: ''
  },
  {
    title: "Do the dished",
    status: ''
  },{
    title: "Write a blog",
    status: ''
  },
  {
    title: "Build an App",
    status: ''
  },
  {
    title: "Sell the app",
    status: ''
  }
];

const state = {
  tasks: tasks,
  title: 'My Task List',
  onTaskSelected: onTaskSelected,
  newTaskEntered: newTaskEntered
};

function onTaskSelected(task) {
  console.log(task);
}
function newTaskEntered(task) {
  console.log(task);
  tasks.push({title: task, status: ''});
  
}

ReactDOM.render(
  <React.StrictMode>
    <TodoList {...state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
