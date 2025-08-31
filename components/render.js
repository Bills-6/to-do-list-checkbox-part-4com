let stack = [];
let undoStack = [];
let redoStack = [];

const ul = document.getElementById("list-wrapper");
function renderTask(data = stack) {
	ul.innerHTML = null;

	data.forEach((todo, index) => {
		const fragment = document.createDocumentFragment();
	});
}