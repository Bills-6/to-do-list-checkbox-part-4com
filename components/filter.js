import { renderTask, stack } from "./render.js";

const filterButton = document.getElementById("filter-button");
const filterPenel = document.getElementById("filter-panel");

filterButton.addEventListener("click", function() {
	if (filterPenel.dataset.status === "close") {
		filterPanelVisibility("open");
	} else filterPanelVisibility("close");
});

function filterPanelVisibility(forWhat) {
	if (forWhat === "open") {
		filterPenel.dataset.status = "open";
		filterPenel.classList.remove("hidden");
	} else {
		filterPenel.dataset.status = "close";
		filterPenel.classList.add("hidden");
	}
}
// [< close panel if user click is not on panel >]
document.addEventListener("click", (e) => {
	if (!filterPenel.contains(e.target) &&
		!filterButton.contains(e.target)
	) {
		filterPanelVisibility("close");
	}
});
// [< close panel if user click on the key Escape >]
document.addEventListener("keydown", (is) => {
	if (is.key === "Escape") filterPanelVisibility("close");
});

// [< filter todo finished >]
const finishedFilter = document.getElementById("finish-filter");
finishedFilter.addEventListener("change", function() {
	if (this.checked) {
		const finishTodos = stack.filter((todos) => {
			return todos.check.every(value => value === true);
		});
		renderTask(finishTodos);
	} else renderTask();
});