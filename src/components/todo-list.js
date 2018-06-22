import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.props = {
            userInpur: '',
            list: []
        }
    }

    render () {
        return(
            <div className="todo-list-main">
                <input type="text"/>
                <button></button>
            </div>
        )
    }
}

export default TodoList;