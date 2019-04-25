var col1=document.getElementById("col1");
var col2=document.getElementById("col2");
var grad=document.getElementById("grad");
function changeCol(){
	if (grad.value ==='lin'){
	document.getElementsByTagName('body')[0].style.background= `linear-gradient(to right,${col1.value},${col2.value})`;
	document.querySelector('h3').textContent=`linear-gradient(to right,${col1.value},${col2.value})`;
	}
	else{
	document.getElementsByTagName('body')[0].style.background= `radial-gradient(circle,${col1.value},${col2.value})`;
	document.querySelector('h3').textContent=`radial-gradient(circle,${col1.value},${col2.value})`;	
	}
}
col1.addEventListener('change',changeCol);
col2.addEventListener('change',changeCol);
grad.addEventListener('change',changeCol);