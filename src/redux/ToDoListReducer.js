import {ToDoListLightTheme} from "../JSSDemo/Theme/ToDoListLightTheme";
import {ToDoListDarkTheme} from "../JSSDemo/Theme/ToDoListDarkTheme";
import {ToDoListDefaultTheme} from "../JSSDemo/Theme/ToDoListDefaultTheme";
import {
  add_task,
  change_theme,
  delete_task,
  done_task,
  edit_task,
  update_task,
} from "./types/ToDoListTypes";
import {arrTheme} from "../JSSDemo/Theme/ThemeManager";
const initialState = {
  themeToDoList: ToDoListDefaultTheme,
  taskList: [
    {id: "task-1", taskName: "task 1", done: true},
    {id: "task-2", taskName: "task 2", done: false},
    {id: "task-3", taskName: "task 3", done: true},
    {id: "task-4", taskName: "task 4", done: false},
  ],
  taskEdit: {id: "-1", taskName: "", done: false},
};

const ToDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      //Kiểm tra rỗng
      if (action.newTask.taskName.trim() === "") {
        alert("task field require");
        return {...state};
      }
      //Kiểm tra tồn tại
      let newTaskList = [...state.taskList];
      let index = newTaskList.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );
      if (index !== -1) {
        alert("Task existed");
        return {...state};
      }

      state.taskList = [...newTaskList, action.newTask];
      return {...state};
    }

    case change_theme: {
      let theme = arrTheme.find((theme) => theme.id === action.value);

      if (theme !== "") {
        state.themeToDoList = {...theme.theme};
      }
      return {...state};
    }

    case done_task: {
      let newTaskList = [...state.taskList];
      let index = newTaskList.findIndex((item) => item.id === action.taskId);
      if (index !== -1) {
        newTaskList[index].done = true;
      }
      // state.taskList = newTaskList;
      return {...state, taskList: newTaskList};
    }

    case delete_task: {
      // let newTaskList = [...state.taskList];
      // let index = newTaskList.findIndex(
      //   (item) => item.id === action.taskDeleteId
      // );
      // if (index !== -1) {
      //   newTaskList.splice(index, 1);
      // }
      // newTaskList = newTaskList.filter(
      //   (task) => task.id !== action.taskDeleteId
      // );
      // state.taskList = newTaskList;
      return {
        ...state,
        taskList: state.taskList.filter(
          (task) => task.id !== action.taskDeleteId
        ),
      };
    }

    case edit_task: {
      // let newTaskList = [...state.taskList];
      // let index = newTaskList.findIndex(
      //   (task) => task.id === action.newTask.id
      // );
      // if (index !== -1) {
      //   newTaskList[index] = action.newTask;
      // }
      // return {...state, taskList: newTaskList};

      return {...state, taskEdit: action.task};
    }

    case update_task: {
      //Chỉnh sửa lại taskName của  taskEdit
      state.taskEdit = {...state.taskEdit, taskName: action.taskName};

      //Tìm trong taskLit cập nhật lại TaskEdit người dừng nhập
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.id === state.taskEdit.id
      );

      if (index !== -1) {
        taskListUpdate[index] = state.taskEdit;
      }
      let newTaskEdit = {id: "-1", taskName: "", done: false};
      state.taskList = taskListUpdate;
      return {...state, taskEdit: newTaskEdit};
    }

    default:
      return {...state};
  }
};

export default ToDoListReducer;
