function toggle(id, color1, color2){
	var button = document.getElementById(id);
	if(button.style.background == color1){
		button.style.background = color2;
	}
	else{
		button.style.background = color1;
	}
}