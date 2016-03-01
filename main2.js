var fn = function () { 
	console.log('heeey')
}
var index = 1;  
var beeper = function(){ 
	console.log('got here!')
	var id ="beep" + index; 
	var p = document.createElement('p'); 
	p.id = id; 
	document.body.appendChild(p); 
	document.getElementById(id).innerHTML = "BEEP!"; 
	index = index + 1; 	
	
} 

document.querySelector('#target').addEventListener('click', beeper); 
