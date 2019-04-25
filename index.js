var col1=document.getElementById("col1");
var col2=document.getElementById("col2");
function changeCol(){
	document.getElementsByTagName('body')[0].style.background= `linear-gradient(to right,${col1.value},${col2.value})`;

document.querySelector('h3').textContent=`linear-gradient(to right,${col1.value},${col2.value})`
}
col1.addEventListener('change',changeCol);
col2.addEventListener('change',changeCol);