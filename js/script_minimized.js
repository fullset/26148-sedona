var button=document.querySelector(".hotel-searching-button");var form=document.querySelector(".hotel-searching-form");var isFormVisible=!0;button.addEventListener("click",function(evt){evt.preventDefault();if(isFormVisible){form.classList.add("form-hidden");isFormVisible=!1}else{form.classList.remove("form-hidden");isFormVisible=!0}});var mapImg=document.querySelector(".map-image");var mapIframe=document.querySelector(".map-interactive");mapIframe.classList.remove("map-hidden");mapImg.classList.add("map-hidden")