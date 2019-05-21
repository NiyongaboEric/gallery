//check user read our privacy policy
document.querySelector(".checkbox").addEventListener("click", isPolicyCheked);
function isPolicyCheked(){
	let isChecked = document.querySelector(".checkbox").value;

	if (isChecked === "on"){
		return document.querySelector(".checkbox").value = "true";
	}
	if (isChecked ==="true"){
		return document.querySelector(".checkbox").value = "false";
	}
	if (isChecked === "false") {
		return document.querySelector(".checkbox").value = "true";
	}
}

function validate(){
	let first_name = document.querySelector(".first_name").value;
	let last_name = document.querySelector(".last_name").value;
	let address = document.querySelector(".address").value;
	let email = document.querySelector(".email").value;
	let password = document.querySelector(".password").value;
	let confirm_password = document.querySelector(".confirm_password").value;
	let checkbox = document.querySelector(".checkbox").value;


	if (first_name === "") {
		document.querySelector(".input_errors").innerHTML = " first name is required *";
		document.querySelector(".input_errors").style.color = "red";
		return false;
	}

	if (last_name === "") {
		document.querySelector(".input_errors").innerHTML = " last name is required *";
		document.querySelector(".input_errors").style.color = "red";
		return false;
	}

	isEmailValid = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	} 

	if (address === "") {
		document.querySelector(".input_errors").innerHTML = " address is required *";
		document.querySelector(".input_errors").style.color = "red";
		return false;
	}

	if (email === "" || isEmailValid(email) === false) {
		document.querySelector(".input_errors").innerHTML = " a valid email is required *";
		document.querySelector(".input_errors").style.color = "red";
		return false;
	}
	
	isPasswordMatch = true ? password === confirm_password : false;
	if(!isPasswordMatch){
		console.log("a");
		document.querySelector(".input_errors").innerHTML = " a password should match *";
		document.querySelector(".input_errors").style.color = "red";
		return false;
	}

	isPwdLengthZero = true ? password.length === 0 || confirm_password.length === 0 : false;
	if(isPwdLengthZero){
		console.log("b");
		document.querySelector(".input_errors").innerHTML = " a password length should be greater than zero *";
		document.querySelector(".input_errors").style.color = "red";
		return false;
	}

	if(checkbox !== "true"){
		document.querySelector(".input_errors").innerHTML = " you must read our privacy *";
		document.querySelector(".input_errors").style.color = "red";
		return false;	
	}
	document.querySelector(".input_errors").innerHTML = "yes ";
	document.querySelector(".input_errors").style.color = "green";
	return true;
}