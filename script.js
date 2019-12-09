// Validation var
var bunactive = false;
var cheeseactive = false;
var topactive = false;
var chickenactive = false;
var bottomactive = false;

// POP! sound
var p = document.getElementById("sfxpop");

// Row 1
var a = document.getElementById("one");
var b = document.getElementById("two");
var c = document.getElementById("three");

function whiteClicked(elem){
	document.getElementById("select-one").innerHTML = "<img src='images/buns/horizontal/white-side.png' width='250px' height='150px' class='centerpanel'>";
	p.play();
	a.classList.remove("opaque");
	b.classList.add("opaque");
	c.classList.add("opaque");
	bunactive = true;
	checkDone();
	console.log("sup");
}

function sesameClicked(elem){
	document.getElementById("select-one").innerHTML = "<img src='images/buns/horizontal/sesame-side.png' width='250px' height='150px' class='centerpanel'>";
	p.play();
	b.classList.remove("opaque");
	a.classList.add("opaque");
	c.classList.add("opaque");
	bunactive = true;
	checkDone();
}

function pretzelClicked(elem){
	document.getElementById("select-one").innerHTML = "<img src='images/buns/horizontal/pretzel-side.png' width='250px' height='150px' class='centerpanel'>";
	p.play();
	c.classList.remove("opaque");
	b.classList.add("opaque");
	a.classList.add("opaque");
	bunactive = true;
	checkDone();
}

// Row 2
var d = document.getElementById("four");
var e = document.getElementById("five");
var f = document.getElementById("six");

function americanClicked(elem){
	document.getElementById("select-two").innerHTML = "<img src='images/cheeses/horizontal/side-american.png' width='250px' height='70px' class='centerpanel'>";
	p.play();
	d.classList.remove("opaque");
	e.classList.add("opaque");
	f.classList.add("opaque");
	cheeseactive = true;
	checkDone();
}

function colbyClicked(elem){
	document.getElementById("select-two").innerHTML = "<img src='images/cheeses/horizontal/colby-side.png' width='250px' height='70px' class='centerpanel'>";
	p.play();
	e.classList.remove("opaque");
	d.classList.add("opaque");
	f.classList.add("opaque");
	cheeseactive = true;
	checkDone();
}

function pepperClicked(elem){
	document.getElementById("select-two").innerHTML = "<img src='images/cheeses/horizontal/pepper-side.png' width='250px' height='70px' class='centerpanel'>";
	p.play();
	f.classList.remove("opaque");
	e.classList.add("opaque");
	d.classList.add("opaque");
	cheeseactive = true;
	checkDone();
}

//Row 3
var g = document.getElementById("seven");
var h = document.getElementById("eight");
var i = document.getElementById("nine");

function baconClicked(elem){
	document.getElementById("select-four").innerHTML = "<img src='images/toppings/horizontal/bacon-side.png' width='250px' height='75px' class='centerpanel'>";
	p.play();
	g.classList.remove("opaque");
	h.classList.add("opaque");
	i.classList.add("opaque");
	topactive = true;
	checkDone();
}

function pickleClicked(elem){
	document.getElementById("select-four").innerHTML = "<img src='images/toppings/horizontal/pickle-side.png' width='250px' height='75px' class='centerpanel'>";
	p.play();
	h.classList.remove("opaque");
	g.classList.add("opaque");
	i.classList.add("opaque");
	topactive = true;
	checkDone();
}

function tomatoClicked(elem){
	document.getElementById("select-four").innerHTML = "<img src='images/toppings/horizontal/tomato-side.png' width='250px' height='75px' class='centerpanel'>";
	p.play();
	i.classList.remove("opaque");
	g.classList.add("opaque");
	h.classList.add("opaque");
	topactive = true;
	checkDone();
}

//Row 4
var j = document.getElementById("ten");
var k = document.getElementById("eleven");
var l = document.getElementById("twelve");

function chickenClicked(elem){
	document.getElementById("select-three").innerHTML = "<img src='images/chicken/horizontal/chicken-side.png' width='250px' height='75px' class='centerpanel'>";
	p.play();
	j.classList.remove("opaque");
	k.classList.add("opaque");
	l.classList.add("opaque");
	chickenactive = true;
	checkDone();
}

function spicyClicked(elem){
	document.getElementById("select-three").innerHTML = "<img src='images/chicken/horizontal/spicy-side.png' width='250px' height='75px' class='centerpanel'>";
	p.play();
	k.classList.remove("opaque");
	j.classList.add("opaque");
	l.classList.add("opaque");
	chickenactive = true;
	checkDone();
}

function grilledClicked(elem){
	document.getElementById("select-three").innerHTML = "<img src='images/chicken/horizontal/grilled-side.png' width='250px' height='75px' class='centerpanel'>";
	p.play();
	l.classList.remove("opaque");
	j.classList.add("opaque");
	k.classList.add("opaque");
	chickenactive = true;
	checkDone();
}

//Row 5
var m = document.getElementById("thirteen");
var n = document.getElementById("fourteen");
var o = document.getElementById("fifteen");

function white2Clicked(elem){
	document.getElementById("select-five").innerHTML = "<img src='images/buns/horizontal2/white-bottom.png' width='250px' height='70px' class='centerpanel'>";
	p.play();
	m.classList.remove("opaque");
	n.classList.add("opaque");
	o.classList.add("opaque");
	bottomactive = true;
	checkDone();
}

function sesame2Clicked(elem){
	document.getElementById("select-five").innerHTML = "<img src='images/buns/horizontal2/sesame-bottom.png' width='250px' height='70px' class='centerpanel'>";
	p.play();
	n.classList.remove("opaque");
	m.classList.add("opaque");
	o.classList.add("opaque");
	bottomactive = true;
	checkDone();
}

function pretzel2Clicked(elem){
	document.getElementById("select-five").innerHTML = "<img src='images/buns/horizontal2/pretzel-bottom.png' width='250px' height='70px' class='centerpanel'>";
	p.play();
	o.classList.remove("opaque");
	m.classList.add("opaque");
	n.classList.add("opaque");
	bottomactive = true;
	checkDone();
}

//Reset function
function resetClicked(elem){
	location.reload();
}

var bfin = false;

//Advanced If Then function that calls for another JS function
function checkDone(elem){
	if (bunactive && cheeseactive && topactive && chickenactive && bottomactive) {
		document.getElementById("chick").classList.add("glow");
		bfin = true;
	}
}

function changeWebsite(elem){
	if (bfin == true) {
		document.getElementById("sfxmusic").play();
		document.getElementById("sfxmusic").loop = true;
		window.open("finished.html", "_blank");
	}
}

//About page music
function aboutClicked(elem){
	document.getElementById("sfxabout").play();
}
