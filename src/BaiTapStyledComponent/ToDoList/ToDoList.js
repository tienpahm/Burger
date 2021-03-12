import React, {Component} from "react";
import {Container} from "../../ComponentToDoList/Container";
import {Dropdown} from "../../ComponentToDoList/Dropdown";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../../ComponentToDoList/Heading";
import {TextField, Label, Input} from "../../ComponentToDoList/TextField";
import {Button} from "../../ComponentToDoList/Button";
import {Table, Thead, Tbody, Tr, Td, Th} from "../../ComponentToDoList/Table";
import {ThemeProvider} from "styled-components";
import {ToDoListDarkTheme} from "../../JSSDemo/Theme/ToDoListDarkTheme";
import {ToDoListLightTheme} from "../../JSSDemo/Theme/ToDoListLightTheme";
import {connect} from "react-redux";
import {add_task, edit_task} from "../../redux/types/ToDoListTypes";
import {
  addTaskAction,
  changeTheme,
  deleteTask,
  editTask,
  finishTask,
  updateTask,
} from "../../redux/action/ToDoListAction";
import {arrTheme} from "../../JSSDemo/Theme/ThemeManager";
class ToDoList extends Component {
  state = {
    taskName: "",
    updateID: "",
    disbaled: true,
  };

  renderTaskToDo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.setState(
                    {
                      disbaled: false,
                    },
                    () => {
                      this.props.dispatch({
                        type: edit_task,
                        task,
                      });
                    }
                  );
                }}>
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                onClick={() => {
                  this.finsihTask(task.id);
                }}>
                <i className="fa fa-check"></i>
              </Button>
              <Button
                onClick={() => {
                  this.deleteTask(task.id);
                }}>
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  finsihTask = (taskId) => {
    // console.log(taskId);
    this.props.dispatch(finishTask(taskId));
  };

  deleteTask = (taskDeleteId) => {
    this.props.dispatch(deleteTask(taskDeleteId));
  };

  pushInfoToInput = (id) => {
    let item = this.props.taskList.find((item) => item.id === id);
    this.setState({
      taskName: item.taskName,
      updateID: item.id,
    });
  };
  updateTask = () => {
    let {taskName, updateID} = this.state;
    let newTask = {
      id: updateID,
      taskName: taskName,
      done: false,
    };
    this.props.dispatch(editTask(newTask));
  };

  renderTaskComplete = () => {
    return this.props.taskList
      .filter((task) => task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.deleteTask(task.id);
                }}>
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  addTaskToDoList = () => {
    //Lấy thông tin người dùng nhập vào input
    let {taskName} = this.state;
    // Tạo ra 1 task object
    let newTask = {
      id: Date.now(),
      taskName: taskName,
      done: false,
    };
    this.setState({
      taskName: "",
    });

    //Dua object vao taskList
    this.props.dispatch(addTaskAction(newTask));
  };

  renderTheme = () => {
    return arrTheme.map((theme, index) => {
      return <option value={theme.id}>{theme.name}</option>;
    });
  };

  changTheme = (e) => {
    let {value} = e.target;
    this.props.dispatch(changeTheme(value));
  };
  //life cycle 16 nhận vào props thì mới render
  // componentWillReceiveProps(newProps) {
  //   console.log("this props", this.props);
  //   console.log("new props", newProps);
  //   this.setState({
  //     taskName: newProps.taskEdit.taskName,
  //   });
  // }

  //Đây là lifecycle chạy sau render trả về props cũ và state cũ trước khi render

  componentDidUpdate(prevProps, prevState) {
    //để tránh vòng lặp vô tận thì  ta so sanh néu task edit cũ mà khác task edit mới thì chúng ta mới set state và render lại
    if (prevProps.taskEdit.id !== this.props.taskEdit.id)
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    console.log("ahihi");
  }

  render() {
    return (
      <ThemeProvider theme={this.props.themeToDoList}>
        <Container className="w-50">
          <Dropdown onChange={this.changTheme}>{this.renderTheme()}</Dropdown>
          <Heading3>To Do List</Heading3>
          <TextField
            onChange={(e) => {
              this.setState({
                taskName: e.target.value,
              });
            }}
            value={this.state.taskName}
            label="Task Name"
            name="taskName"
          />
          <Button
            className="ml-2"
            onClick={() => {
              this.addTaskToDoList();
            }}>
            <i class="fa fa-plus"></i> Add Task
          </Button>
          <Button
            className="ml-2"
            disabled={this.state.disbaled}
            onClick={() => {
              this.setState(
                {
                  disbaled: true,
                },
                () => {
                  this.props.dispatch(updateTask(this.state.taskName));
                }
              );
            }}>
            <i class="fa fa-upload"></i> Update Task
          </Button>
          <hr />
          <Heading3>Task To Do</Heading3>
          <Table>
            <Thead>{this.renderTaskToDo()}</Thead>
          </Table>
          <hr />
          <Heading3>Complete</Heading3>
          <Table>
            <Thead>{this.renderTaskComplete()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    themeToDoList: state.ToDoListReducer.themeToDoList,
    taskList: state.ToDoListReducer.taskList,
    taskEdit: state.ToDoListReducer.taskEdit,
  };
};

export default connect(mapStateToProps)(ToDoList);
