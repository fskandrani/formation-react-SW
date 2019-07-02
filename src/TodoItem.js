import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.props.changeCheckedHandler(this.props.id);
    }

    render() {
        return (
            <div>
                <input onChange={this.clickHandler} type="checkbox" checked={this.props.done} />
                {this.props.name}
            </div>
        );
    }
}

export default TodoItem;
