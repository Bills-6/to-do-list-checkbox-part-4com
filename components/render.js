let stack = [];
let undoStack = [];
let redoStack = [];

const styling = {
	todo: ['todo', 'p-2', 'md:p-4', 'lg:p-6', 'pt-2', 'lg:pt-2', 'bg-gray-300', 'rounded-sm', 'shadow-md', 'shadow-bg-gray-300'],
	headTodo: ['head-todo', 'flex', 'items-center', 'justify-between', 'mb-2'],
	timeTodo: ['text-md', 'lg:text-lg'],
	deleteButton: ['delete-buton', 'w-[30px]', 'h-[30px]', 'lg:w-[40px]', 'lg:h-[40px]', 'flex', 'items-center', 'justify-center', 'hover:cursor-pointer', 'active:scale-[0.9]'],
	iconDelete: ['material-symbols-outlined', 'size'],

	bodyTodo: ['body-todo', 'py-1', 'flex', 'items-center', 'flex-col', 'lg:flex-row gap-1'],
	todoActivityWrapper: ['todo-input', 'resize-none', 'block', 'w-full', 'md:text-lg', 'lg:text-[1.5rem]', 'font-semibold'],
	todoInput: ['todo-input', 'resize-none', 'block', 'w-full', 'md:text-lg', 'lg:text-[1.5rem]', 'font-semibold'],
	editTodoButton: ['edit-todo-button', 'w-[30px]', 'h-[30px]', 'lg:w-[40px]', 'lg:h-[40px]', 'absolute', 'right-[10px]', 'top-[50%]', 'translate-y-[-50%]', 'flex', 'items-center', 'justify-center', 'opacity-0', 'hover:cursor-pointer', 'hover:scale-[1.1]'],
	iconEditTodo: ['material-symbols-outlined', 'size', 'pointer-events-none'],

	todoCheckboxWrapper: ['todo-checkbox-wrapper', 'w-full', 'lg:w-fit', 'py-1', 'flex', 'gap-3', 'justify-center'],
	inputCheckboxWrapper: ['input-checkbox-wrapper', 'w-[30px]', 'h-[30px]', 'md:w-[40px]', 'md:h-[40px]', 'lg:w-[50px]', 'lg:h-[50px]', 'relative'],
	inputCheckbox: ['block', 'w-full', 'h-full']
}

const ul = document.getElementById("list-wrapper");
function renderTask(data = stack) {
	ul.innerHTML = null;

	data.forEach((todo, index) => {
		const fragment = document.createDocumentFragment();
	});
}