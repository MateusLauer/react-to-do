import React, { Component } from 'react';
import './App.css';

class Todo extends Component {
  render(){
    return (
      <div className="todo" onClick={this.props.deleteMethod}>
          {this.props.text}
      </div>
    );
  }
}

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    Todo: '',
    TodoList: [],
  }
}

updateTodo(Todo){
  this.setState({Todo: Todo.target.value})
}

AddTodo(){

   if(this.state.Todo === ''){return}

   let TodoArray = this.state.TodoList.slice();
   TodoArray.push(this.state.Todo);
   this.setState({ Todo: '', TodoList: TodoArray });
   this.textInput.focus();
}
handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    let TodoArray = this.state.TodoList.slice();
    TodoArray.push(this.state.Todo);
    this.setState({ Todo: '', TodoList: TodoArray });
  }
}

DeleteTodo(index){
  let TodoArray = this.state.TodoList;
  TodoArray.splice(index, 1);
  this.setState({ TodoList: TodoArray })
}

  render(){

    let TodoList = this.state.TodoList.map((val, key) => {
      return <Todo key={key} text={val} deleteMethod={ () => this.DeleteTodo(key) } />
    })

    return (
      <div className="App">
        <div className="header"><center>ToDo React App</center> </div>
        <div className="button" onClick={this.AddTodo.bind(this)}>Add Task</div>
        <input type="text" ref={((input) => {this.textInput = input})} className="textInput"
              placeholder="What's next?"
              value={this.state.Todo} onChange={Todo => this.updateTodo(Todo)}
              onKeyPress={this.handleKeyPress.bind(this)} />
        {TodoList}
      </div>

    );
  }
}
export default App;
