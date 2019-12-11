import React from 'react';
import Todo from './Todo';
import { Table } from 'reactstrap';

export default class TodoList extends React.Component {
    counter = 0;

    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            text: ''
        };
    }

    handleCompleted = (id) => {
        const copy = this.state.todo.filter((todo) => todo.id !== id);
        this.setState({ todo: copy });
    }

    handleClick = (e) => {
        this.counter++;
        const { todo } = this.state;
        todo.push({ text: this.state.text, id: this.counter });
        this.setState({
            todo,
            text: '',
        })
        e.preventDefault();
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <Table border="1px" width="20%">
                    <thead>
                        <tr>
                            <th colspan="2">ToDo List</th>
                        </tr>
                    </thead>
                    {
                        this.state.todo.map((todo) => <Todo text={todo.text} key={todo.id} id={todo.id} handleCompleted={this.handleCompleted} />)
                    }
                </Table>
                <br />
                <form onSubmit={(e) => this.handleClick(e)}>
                    <input onChange={this.handleChange} value={this.state.text}></input>
                    <button style={{'background-color': '#66d166', margin: '10px'}}>Add</button>
                </form>
            </div>
        );
    }
}