document.onscroll = function (){
	var menu = document.getElementById("menu");
	if(window.pageYOffset > 10){
		menu.style.left = "-1000px";
	}else{
		menu.style.left = "0px";
	}
}