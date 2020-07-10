import React from 'react';
// import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './TodoList.css';

function Header(props) {
    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col hero" >{props.title}</div>
            <div className="col-3"></div>
        </div>
    );
}

class NewTaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <div className="row">
                <div className="col-3"></div>
                <div className="col form" >
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value} placeholder="Enter a new task" onChange={this.handleChange} />
                        <button type="button" className="btn btn-primary float-right">Add</button>
                    </form>
                </div>
                <div className="col-3"></div>
            </div>
        );
    }
}

function TodoTask (props) {
    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col task {props.task.status}">
                {props.task.title}
                <div className="float-right">
                    <a href="#" className="actionButton-complete" onClick={() => props.completeTask(props.task.id)}><FontAwesomeIcon icon={faCheck} /></a>
                </div>
            </div>
            <div className="col-3"></div>
        </div>
    );
}

class TodoList extends React.Component {
    state = {
        tasks: [
        ],
        taskCounter: 1,
    };

    addNewTask = (taskData) => {
        let newTaskData = {
            id: this.state.taskCounter,
            title: taskData,
            status: 'todo'
        };
        console.log(newTaskData);
        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTaskData],
            taskCounter: prevState.taskCounter + 1
        }));
    }

    completeTask = (taskId) => {
        const newTaskList = this.state.tasks.filter(item => item.id != taskId);
        this.setState({tasks: newTaskList});
    };

    render() {
        return (
            <div className="container>">
                <Header title={this.props.title} />
                <NewTaskForm onSubmit={this.addNewTask} />
                {this.state.tasks.map((task) => <TodoTask task={task} key={task.title} completeTask={this.completeTask} />)}
            </div>
        );
    }
}

export default TodoList;