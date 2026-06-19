"use strict";

const taskKeys = {
    id: "id",
    text: "text",
    done: "done",
};

const dailyTasks = [];

const dailyTaskError = (taskId) => {
    return `There is no task with id: ${taskId}`;
};

const newDailyTaskId = (dailyTasks) =>
    dailyTasks.reduce((maxId, task) => Math.max(maxId, task[taskKeys.id]), 0) +
    1;

const createNewDailyTask = (dailyTasks, text) => {
    const newTask = {
        [taskKeys.id]: newDailyTaskId(dailyTasks),
        [taskKeys.text]: text,
        [taskKeys.done]: false,
    };
    dailyTasks.push(newTask);
    return newTask;
};


const editDailyTask = (dailyTasks, taskId, text) => {
    const id = dailyTasks.find((task) => task[taskKeys.id] === taskId);
    if (id !== -1) {
        console.log(dailyTasks[id] = `Отредактирована задача № ${taskId}`);
    }
        const editTask = { [taskKeys.id]: newDailyTaskId(dailyTasks), [taskKeys.text]: text, [taskKeys.done]: false, };
    dailyTasks.splice(newDailyTaskId, 0);
    return editTask;
};

const completeDailyTaskById = (dailyTasks, taskId) => {
    const task = dailyTasks.find((task) => task[taskKeys.id] === taskId);
    if (!task) {
        console.error(errTaskNotFound(taskId));
        return null;
    }
    task[taskKeys.done] = !task[taskKeys.done];
    return task;
};

const deleteDailyTaskById = (dailyTasks, taskId) => {
    const taskIndex = dailyTasks.findIndex(
        (task) => task[taskKeys.id] === taskId
    );
    if (taskIndex === -1) {
        console.error(errTaskNotFound(taskId));
        return dailyTasks;
    }
    dailyTasks.splice(taskIndex, 1);
    return dailyTasks;
};
