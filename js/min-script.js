var link=document.querySelector(".modal-link"),popup=document.querySelector(".modal"),close=popup.querySelector(".exit"),form=popup.querySelector("form"),login=popup.querySelector("[name=name]"),email=popup.querySelector("[name=email]"),message=popup.querySelector("[name=message]");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),login.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-show")&&(e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error"))}),form.addEventListener("submit",function(e){login.value&&email.value&&message.value||(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),ymaps.ready(function(){var e=new ymaps.Map(document.querySelector(".map"),{center:[59.938631,30.323055],zoom:17,controls:[]});e.behaviors.disable("scrollZoom");var o=new ymaps.Placemark([59.938631,30.323055],{},{iconLayout:"default#image",iconImageHref:"img/map-marker.png",iconImageSize:[231,190],iconImageOffset:[-50,-200]});e.geoObjects.add(o)});
