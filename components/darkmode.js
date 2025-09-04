import { styling } from "./render.js";

const modeButton = document.getElementById("mode-button"),
	iconMode = document.getElementById("mode-icon");
const body = document.body;
const ul = document.getElementById("list-wrapper");

modeButton.addEventListener("click", function() {
	if (body.dataset.theme === "light") {
		styleMode("dark");
	} else { styleMode("light") }
});

const allText = document.querySelectorAll("h1");
const elementShadow = document.querySelectorAll("nav, #created-panel");
// function helper
function styleMode(isMode) {
	if (isMode === "dark") {
		body.dataset.theme = "dark";
		body.classList.add("bg-gray-900");

		allText.forEach(text => text.classList.add("text-gray-200"));

		elementShadow.forEach(shad => shad.classList.replace("shadow-gray-300", "shadow-gray-700"));
		moveIcon("dark");
		localStorage.setItem("mode", "dark");
	} else {
		body.dataset.theme = "light";
		body.classList.remove("bg-gray-900");
		
		allText.forEach(text => text.classList.remove("text-gray-200"));
		
		elementShadow.forEach(shad => shad.classList.replace("shadow-gray-700", "shadow-gray-300"));
		moveIcon("light");
		localStorage.setItem("mode", "light");
	}
}
const icondark = document.getElementById("dark-icon"),
	iconLight = document.getElementById("light-icon");
// move icon
function moveIcon(forMode) {
	if (forMode === "dark") {
		iconLight.classList.add("scale-0");

		setTimeout(() => {
			iconLight.style.display = "none";
			icondark.setAttribute("style", "");
			icondark.classList.remove("scale-0");
		}, 200);
	} else {
		icondark.classList.remove("scale-0");
		iconLight.setAttribute("style", "");

		setTimeout(() => {
			icondark.style.display = "none";
			iconLight.classList.remove("scale-0");
		}, 200);
	}
}

window.addEventListener("DOMContentLoaded", function() {
	if (this.localStorage.getItem("mode") === "dark") {
		styleMode("dark");
	}
});