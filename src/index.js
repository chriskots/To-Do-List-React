import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {
    render() {
        return (
            <TodoList />
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
