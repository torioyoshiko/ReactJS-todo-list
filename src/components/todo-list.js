import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            list: []
        }
    }

    changeInput (input) {
        this.setState({
            userInput: input
        });
    }

    addTask (input) {
        let listTodo = this.state.list
        listTodo.push(input);
        this.setState({
            list: listTodo,
            userInput: ''
        })
    }

    render () {
        return(
            <div className="todo-list-main">
                <input
                    onChange={(evt) => this.changeInput(evt.target.value)}
                    type="text"
                    value={this.state.userInput}
                />
                <button onClick={() => this.addTask(this.state.userInput)}>Add task</button>
                <ul>
                    {this.state.list.map((value)=><li>{value}</li>)}
                </ul>
            </div>
        )
    }
}

export default TodoList;