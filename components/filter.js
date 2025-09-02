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

document.addEventListener("click", (e) => {
	if (!filterPenel.contains(e.target) &&
		!filterButton.contains(e.target)
	) {
		filterPanelVisibility("close");
	}
});

document.addEventListener("keydown", (is) => {
	if (is.key === "Escape") filterPanelVisibility("close");
});