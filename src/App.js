import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavbarComponent from "./component/NavbarComponent";
import tasks from './tasks.json';
import TableComponent from "./component/TableComponent";
import FormTaskComponent from "./component/FormTaskComponent";
import WeatherComponent from "./component/WeatherComponent";

const uuid = require("uuid")

class App extends Component {

  state = {
    allTasks: tasks
  }

  addTask = (task) => {
    const newArr = this.state.allTasks
    newArr.push(
      {
        title: task.title,
        description: task.description,
        id: uuid.v4(),
        done: false
      }
    )

    this.setState({
      tasks: newArr
    })
  }

  deleteTask = (taskId) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === taskId) {
        const newArr = tasks.splice(i, 1)
        this.setState({
          tasks: newArr
        })
      }
    }
  }

  updateTaskStatus = (taskId) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === taskId) {
        const newArr = tasks[i].done = true
        this.setState({
          tasks: newArr
        })
      }
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <NavbarComponent/>
            <FormTaskComponent addTask={this.addTask}/>
            <TableComponent allTasks={tasks} deleteTask={this.deleteTask} updateTaskStatus={this.updateTaskStatus}/>
          </Route>
          <Route path="/weather">
            <NavbarComponent/>
            <WeatherComponent />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
