import { todoInputName, idInput} from "./validation.js";
import { isHelper } from "./createdPanel.js"; 
export let stack = [];
let undoStack = [];
let redoStack = [];

export const styling = {
	todo: ['todo', 'p-2', 'md:p-4', 'lg:p-6', 'pt-2', 'lg:pt-2', 'bg-gray-300', 'rounded-sm', 'shadow-md', 'shadow-bg-gray-300'],
	headTodo: ['head-todo', 'flex', 'items-center', 'justify-between', 'mb-2'],
	timeTodo: ['text-md', 'lg:text-lg'],
	deleteButton: ['delete-buton', 'w-[30px]', 'h-[30px]', 'lg:w-[40px]', 'lg:h-[40px]', 'flex', 'items-center', 'justify-center', 'hover:cursor-pointer', 'active:scale-[0.9]'],
	iconDelete: ['material-symbols-outlined', 'size'],

	bodyTodo: ['body-todo', 'py-1', 'flex', 'items-center', 'flex-col', 'lg:flex-row','gap-1'],
	todoActivityWrapper: ['todo-activity-wrapper', 'py-1', 'w-full', 'lg:grow', 'relative'],
	todoInput: ['todo-input', 'resize-none', 'block', 'w-full', 'md:text-lg', 'lg:text-[1.5rem]', 'font-semibold'],
	editTodoButton: ['edit-todo-button', 'w-[30px]', 'h-[30px]', 'lg:w-[40px]', 'lg:h-[40px]', 'absolute', 'right-[10px]', 'top-[50%]', 'translate-y-[-50%]', 'flex', 'items-center', 'justify-center', 'opacity-0', 'hover:cursor-pointer', 'hover:scale-[1.1]'],
	iconEditTodo: ['material-symbols-outlined', 'size', 'pointer-events-none'],

	todoCheckboxWrapper: ['todo-checkbox-wrapper', 'w-full', 'lg:w-fit', 'py-1', 'flex', 'gap-3', 'justify-center'],
	inputCheckboxWrapper: ['input-checkbox-wrapper', 'w-[30px]', 'h-[30px]', 'md:w-[40px]', 'md:h-[40px]', 'lg:w-[50px]', 'lg:h-[50px]', 'relative'],
	inputCheckbox: ['block', 'w-full', 'h-full']
}

const ul = document.getElementById("list-wrapper");
export function renderTask(data = stack) {
	ul.innerHTML = null;

	data.forEach((todo, index) => {
		const fragment = document.createDocumentFragment();

		const todoList = document.createElement("li");
		todoList.classList.add(...styling.todo);

		const headTodo = document.createElement("div");
		headTodo.classList.add(...styling.headTodo);

		const timetodo = document.createElement("time");
		timetodo.classList.add(...styling.timeTodo);

		const deleteButton = document.createElement("span");
		deleteButton.classList.add(...styling.deleteButton);

		const iconButton = document.createElement("i");
		iconButton.classList.add(...styling.iconDelete);
		iconButton.textContent = "delete";

		const bodyTodo = document.createElement("div");
		bodyTodo.classList.add(...styling.bodyTodo);

		const todoActivityWrapper = document.createElement("div");
		todoActivityWrapper.classList.add(...styling.todoActivityWrapper);

		const todoInput = document.createElement("textarea");
		todoInput.classList.add(...styling.todoInput);
		todoInput.value = todo.data;
		todoInput.disabled = true;

		const editTodoButton = document.createElement("span");
		editTodoButton.classList.add(...styling.editTodoButton);

		const iconEditTodo = document.createElement("i")
		iconEditTodo.classList.add(...styling.iconEditTodo);
		iconEditTodo.textContent = "edit";

		const todoCheckboxWrapper = document.createElement("div");
		todoCheckboxWrapper.classList.add(...styling.todoCheckboxWrapper);

		// combine
		headTodo.appendChild(timetodo);
		deleteButton.appendChild(iconButton);
		headTodo.appendChild(deleteButton);
		
		todoActivityWrapper.appendChild(todoInput);
		editTodoButton.appendChild(iconEditTodo);
		todoActivityWrapper.appendChild(editTodoButton);
		
		for (let i = 0; i <= 6; i++) {
			const inputCheckboxWrapper = document.createElement("div");
			inputCheckboxWrapper.classList.add(...styling.inputCheckboxWrapper);

			const inputCheckbox = document.createElement("input");
			inputCheckbox.classList.add(...styling.inputCheckbox);
			inputCheckbox.type = "checkbox";
			inputCheckbox.checked = todo.check[i];
			
			inputCheckbox.addEventListener("change", 
				function() {
					stack[index].check[i] = this.checked;
					saveStack();
				});
			inputCheckboxWrapper.appendChild(inputCheckbox);
			todoCheckboxWrapper.appendChild(inputCheckboxWrapper)
		}
		
		bodyTodo.appendChild(todoActivityWrapper);
		bodyTodo.appendChild(todoCheckboxWrapper);
		
		todoList.appendChild(headTodo)
		todoList.appendChild(bodyTodo);
		fragment.appendChild(todoList);

		ul.appendChild(fragment);
		if (data === stack) saveStack();

		// [< edit button script >]
		editTodoButton.addEventListener("click", function() {
			if (todoInput.hasAttribute("disabled")) {
				todoInput.disabled = false;
				todoInput.focus();

				this.style.opacity = "1";
			} else {
				todoInput.disabled = true;
				todoInput.blur();
				this.setAttribute("style", "");

				const newValueTodo = todoInput.value;
				stack[index].data = newValueTodo;
				saveStack();
			}
		});

		// [< remove this item script >]
		deleteButton.addEventListener("click", function() {
			redoStack = [];

			const isItemRemoved = stack.splice(index, 1)[0];
			renderTask();
			saveStack();

			undoStack.push({ item: isItemRemoved, index });
			saveItemRemoved();
			updateColorRedoUndo();
		});
	});
}

function saveStack() {
	localStorage.setItem("stack", JSON.stringify(stack));
}
function saveItemRemoved() {
	sessionStorage.setItem("itemRemoved", JSON.stringify(undoStack));
}
class Data {
	constructor(data, id) {
		this.data = data;
		this.id = id;
		this.check = [false, false, false, false, false, false, false];
	}
}
// add input data
const buttonConfirm = document.getElementById("button-confirm");
buttonConfirm.addEventListener("click", function() {
	let inputNameValue = todoInputName.value.trim();
	let IdTodo = idInput === ""
		? null
		: idInput.value.trim();

	if (inputNameValue !== "") {
		stack.push(new Data(inputNameValue, IdTodo));
		todoInputName.value = "";
		isHelper("close");
		renderTask();
		console.log(stack);
	}
});

// [< fitur remove stack forever >]
const deleteForeverButton = document.getElementById("trash-button");
deleteForeverButton.addEventListener("click", function() {
	stack = [];
	saveStack();
	renderTask();
});

window.addEventListener("DOMContentLoaded", function() {
	if (this.localStorage.getItem("stack") !== null) {
		const takeStack = this.localStorage.getItem("stack");
		stack = [...JSON.parse(takeStack)];
		renderTask();
		saveStack();
	}
	if (this.sessionStorage.getItem("itemRemoved") !== null){
		const takeItem = this.sessionStorage.getItem("itemRemoved");
		undoStack.push(JSON.parse(takeItem));
		updateColorRedoUndo();
	}
});

// [< icon undo redo color >]
const iconUndo = document.getElementById("undo-icon"),
	iconRedo = document.getElementById("redo-icon");
function updateColorRedoUndo() {
	if (undoStack.length > 0) {
		iconUndo.classList.replace("text-gray-600", "text-gray-900");
	} else {
		iconUndo.classList.replace("text-gray-900", "text-gray-600");
	}

	if (redoStack.length > 0) {
		iconRedo.classList.replace("text-gray-600", "text-gray-900");
	} else {
		iconRedo.classList.replace("text-gray-900", "text-gray-600");
	}
}

// [< undo button script >]
const undoButton = document.getElementById("undo-button");
undoButton.addEventListener("click", function() {
	if (undoStack.length > 0) {
		const {item, index} = undoStack.pop();

		redoStack.push({index,item});
		stack.splice(index, 0, item);
		renderTask();
		saveStack();
		updateColorRedoUndo();
	}
});

// [< redo button script >]
const redoButton = document.getElementById("redo-button");
redoButton.addEventListener("click", function() {
	const { item, index } = redoStack.pop();

	if (stack[index] && stack[index].data === item.data) {
		stack.splice(index, 1);
	} else {
		const fallbackIndex = stack.findIndex((i) => i === index);
		if (fallbackIndex !== -1) {
			stack.splice(fallbackIndex, 1);
		}
	}

	undoStack.push({ item, index });
	renderTask();
	saveStack();
	updateColorRedoUndo();
});
console.log(undoStack);
