const createButton = document.getElementById("create-button");
const createdPanel = document.getElementById("created-panel");

createButton.addEventListener("click", function() {
	const isThere = createdPanel.dataset.panelThere;

	if (isThere === "false") {
		isHelper("open");
	} else isHelper("close");
});
// close panel via button
const closePanelCreatedButton = document.getElementById("close-created-panel-button");
closePanelCreatedButton.addEventListener("click", () => isHelper("close"));

// close panel if click is not in panel
document.addEventListener("click", function(e) {
	if (!createdPanel.contains(e.target) && !createButton.contains(e.target)) {
		isHelper("close");
	}
});
// close panel if user click Esc button
document.addEventListener("keydown", function(isKey) {
	if (isKey.key === "Escape") {
		isHelper("close");
	}
});

function isHelper(thisFor) {
	if (thisFor === "open") {
		createdPanel.dataset.panelThere = "true";
		createdPanel.classList.remove("hidden");
	} else {
		createdPanel.classList.add("hidden");
		createdPanel.dataset.panelThere = "false";
	}
}