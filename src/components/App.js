import React from 'react';
import TaskList from './TaskList';
import { Wrapper, InputWrapper, Button, Input, Error, Header, ActiveButton } from './StyledComponents';

class App extends React.Component {
  state = {
    value: '',
    taskList: [],
    completedTaskList: [],
    isEmpty: false,
    activeList: 'all',
  };

  styledSpan = { color: 'gold' };

  componentDidMount() {
    this.setState({
      taskList: JSON.parse(localStorage.getItem('tasks')) || [],
      completedTaskList: JSON.parse(localStorage.getItem('completedTasks')) || []
    });
  }

  handleChange = (e) => {
    const input = e.target.value;

    this.setState({ value: input, isEmpty: false });
  }

  handleAddTask = () => {
    const managedTasks = [...this.state.taskList];
    if (!this.state.value) {
      this.setState({ isEmpty: true });
      return;
    }

    managedTasks.push(this.state.value);
    localStorage.setItem('tasks', JSON.stringify(managedTasks));
    this.setState({ taskList: managedTasks, value: '' });
  }

  handleCompleteTask = (e) => {
    const index = parseInt(e.target.dataset.key);
    const managedActiveTasks = [...this.state.taskList];
    const managedCompletedTasks = [...this.state.completedTaskList];

    const completedTask = managedActiveTasks[index];
    console.log(managedCompletedTasks, managedActiveTasks, completedTask);

    managedCompletedTasks.push(completedTask);
    managedActiveTasks.splice(index, 1);

    localStorage.setItem('completedTasks', JSON.stringify(managedCompletedTasks));
    localStorage.setItem('tasks', JSON.stringify(managedActiveTasks));

    this.setState({
      taskList: managedActiveTasks,
      completedTaskList: managedCompletedTasks,
    });
  }

  handleDelete = (e) => {
    const index = parseInt(e.target.dataset.key);
    const managedCompletedTasks = [...this.state.completedTaskList];

    managedCompletedTasks.splice(index, 1);
    localStorage.setItem('completedTasks', JSON.stringify(managedCompletedTasks));
    this.setState({ completedTaskList: managedCompletedTasks });
  }

  render() {
    console.log(this.state.taskList);
    return (
      <Wrapper>
        <Header>YOUR <span style={this.styledSpan}>TO</span>DO LIST</Header>
        <InputWrapper>
          <label htmlFor="addTask">
            <Input
              isEmpty={this.state.isEmpty}
              placeholder="Input your next task..."
              onChange={this.handleChange}
              type="text"
              value={this.state.value}
              name="addTask"
              id="addTask" />
          </label>
          <Button onClick={this.handleAddTask}>Add Task!</Button>
          {this.state.isEmpty && <Error>You have can't have an empty task.</Error>}
        </InputWrapper>
        <TaskList
          completeTask={this.handleCompleteTask}
          activeList={this.state.activeList}
          deleteTask={this.handleDelete}
          list={this.state.taskList}
          completedList={this.state.completedTaskList} />
        <ActiveButton
          active={this.state.activeList === 'all' && true}
          onClick={() => this.setState({ activeList: 'all' })}>All</ActiveButton>
        <ActiveButton
          active={this.state.activeList === 'completed' && true}
          onClick={() => this.setState({ activeList: 'completed' })}>Completed</ActiveButton>
        <ActiveButton
          active={this.state.activeList === 'active' && true}
          onClick={() => this.setState({ activeList: 'active' })}>Active</ActiveButton>
      </Wrapper >
    );
  }
}

export default App;
