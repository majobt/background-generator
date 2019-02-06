var css = document.querySelector("h2");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rando = document.querySelector("randomise");

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function setGradient() {
	var lcolor = color1.value;
	var rcolor = color2.value;
	body.style.background =
	"linear-gradient(to right, " 
	+ lcolor
	+ ", "
	+ rcolor
	+ ")";

	console.log(lcolor);
	console.log(rcolor);

	console.log("Go one " + document.getElementsByTagName("input")[0].value)

	document.getElementsByTagName("input")[0].value = lcolor;

	console.log("Go two " + document.getElementsByTagName("input")[0].value)

	//css.textContent = body.style.background + ":";
	/*console.log(componentToHex(document.getElementsByTagName("input")[0].value)/*)*//* = color1;*/
	//.value = color1;
	/*colQuotes1 =  String(document.getElementsByTagName("input")[0].value) /* = color1
	console.log(colQuotes1);
	console.log(document.getElementsByTagName("input")[1].value );*/

}

function setRandGrad (){
	var lcolor = randHex(8);
	var rcolor = randHEx(8);
	body.style.background =
	"linear-gradient(to right, " 
	+ lcolor
	+ ", "
	+ rcolor
	+ ")";

}

var randHex = function(len) {
  var maxlen = 8,
      min = Math.pow(16,Math.min(len,maxlen)-1) 
      max = Math.pow(16,Math.min(len,maxlen)) - 1,
      n   = Math.floor( Math.random() * (max-min+1) ) + min,
      r   = n.toString(16);
  while ( r.length < len ) {
     r = r + randHex( len - maxlen );
  }
  return r;
};

/*function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}*/

function showCurrentGrad() {
	var startText = /*css.textContent =*/ body.style.background + ":";
	console.log(startText);
}

document.addEventListener("load", showCurrentGrad());

/*function updateColorPick() {
	var lcolor = color1.value;
	var rcolor = color2.value;
	document.getElementsByTagName("input")[0].value = body;
	console.log(document.getElementsByTagName("input")[0].value);
	console.log(color1);
	} 

*/

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
rando.addEventListener("click", setRandGrad);
