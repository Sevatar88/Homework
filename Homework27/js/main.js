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
    dailyTasks.reduce((maxId, task) => Math.max(maxId, task[taskKeys.id]), 0) + 1;

const createNewDailyTask = (dailyTasks, text) => {
    const newTask = {
        [taskKeys.id]: newDailyTaskId(dailyTasks),
        [taskKeys.text]: text,
        [taskKeys.done]: false,
    };
    dailyTasks.push(newTask);
    return newTask;
};

const completeDailyTaskById = (dailyTasks, taskId) => {
    const task = dailyTasks.find((task) => task[taskKeys.id] === taskId);
    if (!task) {
        console.error(dailyTaskError(taskId));
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
        console.error(dailyTaskError(taskId));
        return dailyTasks;
    }
    dailyTasks.splice(taskIndex, 1);
    return dailyTasks;
};


const editDailyTaskById = (dailyTasks, taskId, newText) => {
    const task = dailyTasks.find((task) => task[taskKeys.id] === taskId);
    if (!task) {
        console.error(dailyTaskError(taskId));
        return null;
    }
    if (!newText || newText.trim() === '') {
        console.error('Task text cannot be empty or null');
        return null;
    }
    task[taskKeys.text] = newText.trim();
    return task;
};
