//your JS code here. If required.
const para=document.getElementById("count");
function inc(){
	let count=Number(para.innerText);
	alert(count);
	para.innerText=++count;
}
 
       