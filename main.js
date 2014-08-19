var isTop = true;
var menu = document.getElementById("menu");

menu.onmouseover = function (){
	if(!isTop)
		menu.style.left = "-400px";
}

menu.onmouseout = function (){
	if(!isTop)
		menu.style.left = "-1300px";
}

document.onscroll = function () {
	/*if(window.pageYOffset > 10){
		menu.style.left = "-1300px";
		isTop = false;
	}else{
		menu.style.left = "0px";
		isTop = true;
	*/
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
