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
	if(window.pageYOffset > 10){
		menu.style.left = "-1300px";
		isTop = false;
	}else{
		menu.style.left = "0px";
		isTop = true;
	}
}
