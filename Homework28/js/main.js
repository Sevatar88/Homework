
"use strict";

const todoKeys = {
    id: "id",
    text: "text",
    is_completed: "is_completed",
};

let todos = [];

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;


const getNewTodoId = (todos) =>
    todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
    const newTodo = {
        [todoKeys.id]: getNewTodoId(todos),
        [todoKeys.text]: text,
        [todoKeys.is_completed]: false,
    };
    todos.push(newTodo);
    return newTodo;
};

const completeTodoById = (todos, todoId) => {
    const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
    if (!todo) {
        console.error(errTodoNotFound(todoId));
        return null;
    }
    todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
    return todo;
};

const deleteTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
    if (todoIndex === -1) {
        console.error(errTodoNotFound(todoId));
        return todos;
    }
    todos.splice(todoIndex, 1);
    return todos;
};


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const input = document.querySelector(".input");
    const todosList = document.querySelector(".todos");

    const createTodoElement = (text, isCompleted, onComplete, onDelete) => {
        const li = document.createElement("li");
        li.className = "todo";

        const textDiv = document.createElement("div");
        textDiv.className = "todo-text";
        textDiv.textContent = text;
        if (isCompleted) {
            textDiv.classList.add("completed");
        } else {
            textDiv.classList.remove("completed");
        }

        const actionsDiv = document.createElement("div");
        actionsDiv.className = "todo-actions";

        const completeBtn = document.createElement("button");
        completeBtn.className = "button-complete button";
        completeBtn.innerHTML = "&#10004;";
        completeBtn.type = "button";
        completeBtn.addEventListener("click", onComplete);

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "button-delete button";
        deleteBtn.innerHTML = "&#10006;";
        deleteBtn.type = "button";
        deleteBtn.addEventListener("click", onDelete);

        actionsDiv.appendChild(completeBtn);
        actionsDiv.appendChild(deleteBtn);

        li.appendChild(textDiv);
        li.appendChild(actionsDiv);

        return li;
    };


    const handleCreateTodo = (todos, text) => {
        const newTodo = createTodo(todos, text);

        const todoEl = createTodoElement(
            newTodo[todoKeys.text],
            newTodo[todoKeys.is_completed],
            () => {
                completeTodoById(todos, newTodo[todoKeys.id]);
                renderTodos();
            },
            () => {
                deleteTodoById(todos, newTodo[todoKeys.id]);
                renderTodos();
            }
        );

        todosList.appendChild(todoEl);
    };

    const renderTodos = () => {
        todosList.innerHTML = "";

        if (todos.length === 0) {
            return;
        }

        todos.forEach((todo) => {
            const todoEl = createTodoElement(
                todo[todoKeys.text],
                todo[todoKeys.is_completed],
                () => {
                    completeTodoById(todos, todo[todoKeys.id]);
                    renderTodos();
                },
                () => {
                    deleteTodoById(todos, todo[todoKeys.id]);
                    renderTodos();
                }
            );
            todosList.appendChild(todoEl);
        });
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        const text = input.value.trim();
        if (!text) return;

        handleCreateTodo(todos, text);
        input.value = "";
    });

    renderTodos();
});
