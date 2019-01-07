var button = document.querySelector(".hotel-searching-button");
var form = document.querySelector(".hotel-searching-form");
var isFormVisible = true;

button.addEventListener("click", function(evt) {
	evt.preventDefault();
	if (isFormVisible) {		
		form.classList.add("form-hidden");
		isFormVisible = false;
	} else {		
		form.classList.remove("form-hidden");
		isFormVisible = true;
	}
});

var mapImg = document.querySelector(".map-image");
var mapIframe = document.querySelector(".map-interactive");

mapIframe.classList.remove("map-hidden");
mapImg.classList.add("map-hidden");