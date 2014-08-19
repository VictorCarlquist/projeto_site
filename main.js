document.onscroll = function () {
	var menu = document.getElementById("menu_box");
	if(window.pageYOffset > 10){
		menu.style.background = "linear-gradient(#111, #333, #111)";
		menu.style.visibility = "hidden";
		menu.style.opacity = "0";
		menu.style.transition = "visibility 0s linear 0.5s,opacity 0.5s linear";
	}else{
		menu.style.background = "linear-gradient(#333, #111, #333)";
		menu.style.visibility = "visible";
		menu.style.opacity = "1";
		menu.style.transitionDelay = "0s";
	}
}
