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
                <div className="input-button">
                    <input
                        onChange={(evt) => this.changeInput(evt.target.value)}
                        type="text"
                        value={this.state.userInput}
                        placeholder="Type your task"
                    />
                    <button
                        onClick={() => this.addTask(this.state.userInput)}>
                        Add task
                    </button>
                </div>
                <div className="list-todo">
                    <ul>
                        {this.state.list.map((value) => <li type="none">{value}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoList;