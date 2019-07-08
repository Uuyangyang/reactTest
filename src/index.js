import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import TodoApp from './TodoApp';
import TodoModel from './TodoModel';

let model = new TodoModel();
function reder(){
    ReactDOM.render(<TodoApp model={model}/>,
    document.querySelector('#root'));
}

model.subscribe(reder);
reder();