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

// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const input = document.querySelector(".input");
    const todosList = document.querySelector(".todos");

    function renderTodos() {
        todosList.innerHTML = "";

        if (todos.length === 0) {
            return;
        }

        todos.forEach((todo) => {
            const li = document.createElement("li");
            li.className = "todo";

            const textDiv = document.createElement("div");
            textDiv.className = "todo-text";
            textDiv.textContent = todo[todoKeys.text];
            if (todo[todoKeys.is_completed]) {
                textDiv.classList.add("completed");
            }

            const actionsDiv = document.createElement("div");
            actionsDiv.className = "todo-actions";

            // Кнопка «Готово»
            const completeBtn = document.createElement("button");
            completeBtn.className = "button-complete button";
            completeBtn.innerHTML = "&#10004;";
            completeBtn.type = "button";
            completeBtn.addEventListener("click", () => {
                completeTodoById(todos, todo[todoKeys.id]);
                renderTodos();
            });

            // Кнопка «Удалить»
            const deleteBtn = document.createElement("button");
            deleteBtn.className = "button-delete button";
            deleteBtn.innerHTML = "&#10006;";
            deleteBtn.type = "button";
            deleteBtn.addEventListener("click", () => {
                deleteTodoById(todos, todo[todoKeys.id]);
                renderTodos();
            });

            actionsDiv.appendChild(completeBtn);
            actionsDiv.appendChild(deleteBtn);

            li.appendChild(textDiv);
            li.appendChild(actionsDiv);
            todosList.appendChild(li);
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;

        createTodo(todos, text);
        input.value = "";
        renderTodos();
    });
    renderTodos();
});
