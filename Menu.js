function Menu(){
	document.getElementById('MenuBottonPlay').style.display="none";
	document.getElementById('MenuBottonReference').style.display="none";
	document.getElementById('MenuBottonAgreement').style.display="none";
	document.getElementById('MenuBottonSponsor').style.display="none";

	document.getElementById('MenuBotton_Play').style.background="#997";
	document.getElementById('MenuBotton_Reference').style.background="#997";
	document.getElementById('MenuBotton_Agreement').style.background="#997";
	document.getElementById('MenuBotton_Sponsor').style.background="#997";
}
function Open_Play(){
	Menu();
	document.getElementById('MenuBottonPlay').style.display="block";
	document.getElementById('MenuBotton_Play').style.background="#999";
}
function Open_Reference(){
	Menu();
	document.getElementById('MenuBottonReference').style.display="block";
	document.getElementById('MenuBotton_Reference').style.background="#999";
}
function Open_Agreement(){
	Menu();
	document.getElementById('MenuBottonAgreement').style.display="block";
	document.getElementById('MenuBotton_Agreement').style.background="#999";
}
function Open_Sponsor(){
	Menu();
	document.getElementById('MenuBottonSponsor').style.display="block";
	document.getElementById('MenuBotton_Sponsor').style.background="#999";
}