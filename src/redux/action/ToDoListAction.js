import {
  add_task,
  change_theme,
  delete_task,
  done_task,
  edit_task,
  update_task,
} from "../types/ToDoListTypes";

export const addTaskAction = (newTask) => {
  return {type: add_task, newTask};
};

export const changeTheme = (value) => {
  return {
    type: change_theme,
    value,
  };
};

export const finishTask = (taskId) => {
  return {
    type: done_task,
    taskId,
  };
};

export const deleteTask = (taskDeleteId) => {
  return {
    type: delete_task,
    taskDeleteId,
  };
};

export const editTask = (newTask) => {
  return {
    type: edit_task,
    newTask,
  };
};

export const updateTask = (taskName) => {
  return {
    type: update_task,
    taskName,
  };
};
