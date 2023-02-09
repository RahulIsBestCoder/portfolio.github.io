var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontents");
function openTab(tabName) {
	for (tablink of tablinks) {
		tablink.classList.remove("activelink");
	}
	for (tabcontent of tabcontents) {
		tabcontent.classList.remove("activeTab");
	}
	event.currentTarget.classList.add("activelink");
    document.getElementById(tabName).classList.add('activeTab')
}
function openMenu() {
    document.getElementById("sidemenu").style.right="0px"
}
function closeMenu() {
    document.getElementById("sidemenu").style.right="-200px"
}

function submitForm() {
	return false; // Prevent the form from submitting
}
const links = document.getElementsByClassName("myForm");
function subMit(){
	// Get the values of the form elements
	const name = document.forms["myForm"]["name"].value;
	const email = document.forms["myForm"]["email"].value;
	const message = document.forms["myForm"]["message"].value;
	if(name && email && message){
		document.getElementById('success').style.display='block'
	}
	setTimeout(() => {
		document.getElementById('success').style.display='none'
	}, 3000);
	// Log the values to the console
	console.log("Name: " + name);
	console.log("Email: " + email);
	console.log("Message: " + message);
	
	// Submit the form data to a server (omitted for simplicity)

}
//adding day/night mode changing
function changeMode() {
	var day=document.body.classList.toggle('day')
	if(day){
		document.getElementById('Mode').src='https://ik.imagekit.io/Rahul2023/portfoliowebsite/Icons/moon-icon-5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675886356699'
	}
	else{
		document.getElementById('Mode').src='https://ik.imagekit.io/Rahul2023/portfoliowebsite/Icons/sun.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675883291275'
		
	}

	
}
                
