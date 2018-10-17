function validateEmpty(field, fieldName, msg){	
	//if it's NOT valid
	if(field.val().length == 0){
		//fname.addClass("validation");
		fieldName.text("Please enter "+msg);
		//fieldName.addClass("validation");
		//field.focus();
		return false;
	}
	else{
		fieldName.text("");
		return true;
	}
}

function CheckCombo(field, fieldName, msg){		
	if(field.val() < 1 || field.val() == ""){
	
		fieldName.text("Please select "+msg+".");
		
		return false;
	}
	else
	{
		fieldName.text("");
		return true;
	}
}


function CheckNumerals(field, fieldName, msg){	
	if(field.val() != ""){
		if(!(field.val()).match(/^\d+$/ ))
		{
			fieldName.text("Invalid entry. "+msg+" should be numeric.");
			//fieldName.addClass("validation");	
			field.focus();
			return false;
		}
		else
		{
			fieldName.text("");
			return true;
		}
	}
}


function CheckAlphabates(field, fieldName, msg){	
	if(!RegExp("^[A-Za-z]+$").test(field.val()))
	{
		fieldName.text("Invalid entry, "+msg+"  has to be alphabates only, please try again.");
		//fieldName.addClass("validation");	
		field.focus();
		return false;
	}
	else
	{
		fieldName.text("");
		return true;
	}
}


function validateFName(){	
	//if it's NOT valid
	if(fname.val().length == 0){
		//fname.addClass("validation");
		fnameInfo.text("Please enter your first name.");
		fnameInfo.addClass("validation");		
		return false;
	}
	else if(!RegExp("^[A-Za-z][\w]*[A-Za-z]+$").test(fname.val()))
	{
		fnameInfo.text("Please enter in alphabets");
		fnameInfo.addClass("validation");
		return false;
	}
	//if it's valid
	else{
		fnameInfo.text("");
		fnameInfo.removeClass("validation");
		return true;
	}
}
function validateLName(){	
	//if it's NOT valid
	if(lname.val().length == 0){
		//lname.addClass("validation");
		lnameInfo.text("Please enter your last name.");
		lnameInfo.addClass("validation");
		return false;
	}
	else if(!RegExp("^[A-Za-z][\w]*[A-Za-z]+$").test(lname.val()))
	{
		lnameInfo.text("Please enter in alphabets");
		lnameInfo.addClass("validation");
		return false;
	}
	//if it's valid
	else{
		lnameInfo.text("");
		lnameInfo.removeClass("validation");
		return true;
	}
}

function validatePass1(pass1, pass1Info){	
	//it's NOT valid	
	//alert(pass1.val());
	if(pass1.val().length == 0){
		//pass1.addClass("validation");		
		pass1Info.text("Please enter your password.");		
		return false;
	}
	else if(pass1.val().length < 6){		
		pass1Info.text("You need to enter a password that is at least 6 characters long.");
		return false;
	}
	else if(pass1.val().length > 15){		
		pass1Info.text("Please enter a atmost of fifteen characters.");
		return false;
	}
	/*//	Validation for atleast 1 small character
	else if(!RegExp("[a-z]+").test(c))
	{
		passwordInfo.text("Your password must contain at least one lower case letter(a,b,etc).");
		passwordInfo.addClass("validation");
		return false;
	}
	//	Validation for atleast 1 upper case letter
			
	else if(!RegExp("[A-Z]+").test(c))
	{
		passwordInfo.text("Your password must contain at least one upper case letter(A,B,etc).");
		passwordInfo.addClass("validation");
		return false;
	}

	//	Validation for atleast 1 digit ie 0-9
			
	else if(!RegExp("[0-9]+").test(c))
	{
		passwordInfo.text("Your password must contain at least one digit(1,2,etc).");
		passwordInfo.addClass("validation");
		return false;
	}

	//	Validation for atleast 1 special character
			
	else if(!RegExp("[!@#$%^&*+=]+").test(c))
	{
		passwordInfo.text("Your password must contain at least one special character(*,?,etc).");
		passwordInfo.addClass("validation");
		return false;
	}*/
	// Check against email Id.
	/*else if(email.val() == c)
	{
		passwordInfo.text("Password must be different from your email!");
		passwordInfo.addClass("validation");
		return false;
	}*/
	else{
		pass1Info.text("");
		return true;
	}
}
function validatePass2(pass1, pass2, pass2Info){	
	//are NOT valid	
	if(pass1.val() != pass2.val()){		
		pass2Info.text("Password do not match, please try again.");
		return false;
	}
	//are valid
	else{
		pass2Info.text("");
		return true;
	}
}

function validateEmail(field, fieldName, msg)
{
	if(!RegExp(/^\w[\w\-\.]+\@\w[\w\-]+(\.\w[\w\-]+)+$/).test(field.val()))
	{		
		//email.addClass("validation");
		fieldName.text("Invalid email address, please try again.");
		fieldName.addClass("validation");
		return false;
	}
	else
	{	
		fieldName.text("");
		fieldName.removeClass("validation");
		return true;
	}
}

function validateCEmail()
{
	if(email.val() != cemail.val())
	{		
		//cemail.addClass("validation");
		cemailInfo.text("This email id does not match please try again.");
		cemailInfo.addClass("validation");
		return false;
	}
	else
	{	
		cemailInfo.text("");
		cemailInfo.removeClass("validation");
		return true;
	}
}

function validateContact(){	
	//if it's NOT valid
	var c = contact.val();	
	if(!RegExp(/^[0-9][\d\- ]*[0-9]$/).test(c)){		
		contactInfo.text("Contact number don't appear to be valid!");
		contactInfo.addClass("validation");
		return false;
	}	
	//if it's valid
	else{		
		contactInfo.text("");
		contactInfo.removeClass("validation");
		return true;
	}
}

function validateLArea(){	
	//if it's NOT valid
	var c = l_area.val();	
	if(l_area.val() != "" || landline.val() != ""){
		if(!RegExp(/(^(\+|0)?[1-9][0-9]*$)/).test(c)){		
			lareaInfo.text("Invalid area code, please try again.");
			lareaInfo.addClass("validation");
			return false;
		}	
		//if it's valid
		else{		
			lareaInfo.text("");
			lareaInfo.removeClass("validation");
			return true;
		}
	}
	else{		
			lareaInfo.text("");
			lareaInfo.removeClass("validation");
			return true;
	}
}

function validateLandline(){	
	//if it's NOT valid
	var c = landline.val();
	if(l_area.val() != "" || landline.val() != ""){
		if(!RegExp(/^[0-9][\d\- ]*[0-9]$/).test(c)){		
			landInfo.text("Invalid landline number, please try again.");
			landInfo.addClass("validation");
			return false;
		}	
		//if it's valid
		else{		
			landInfo.text("");
			landInfo.removeClass("validation");
			return true;
		}
	}
	else{		
			landInfo.text("");
			landInfo.removeClass("validation");
			return true;
	}
}

function validateMArea(){	
	//if it's NOT valid
	var c = m_area.val();
//		if(!RegExp(/(^\d+$)/).test(c)){	
		if(!RegExp(/(^(\+|0)?[1-9][0-9]*$)/).test(c)){	
			mareaInfo.text("Invalid area code, please try again.");
			mareaInfo.addClass("validation");
			return false;
		}	
		//if it's valid
		else{		
			mareaInfo.text("");
			mareaInfo.removeClass("validation");
			return true;
		}	
}

function validateMobile(){	
	//if it's NOT valid
	var c = mobile.val();
		if(!RegExp(/^[0-9][\d\- ]*[0-9]$/).test(c)){		
			mobInfo.text("Invalid mobile number,please try again.");
			mobInfo.addClass("validation");
			return false;
		}	
		//if it's valid
		else{		
			mobInfo.text("");
			mobInfo.removeClass("validation");
			return true;
		}	
}


function validateAddress(){	
	//if it's NOT valid
	if(address.val().length == 0){
		//lname.addClass("validation");
		addressInfo.text("Please enter address!");
		addressInfo.addClass("validation");
		return false;
	}	
	//if it's valid
	else{		
		addressInfo.text("");
		addressInfo.removeClass("validation");
		return true;
	}
}

function validateCity(){	
	//if it's NOT valid
	if(city.val().length == 0){
		//lname.addClass("validation");
		cityInfo.text("Please enter city!");
		cityInfo.addClass("validation");
		return false;
	}	
	//if it's valid
	else{
		cityInfo.text("");
		cityInfo.removeClass("validation");
		return true;
	}
}

function validateState(){	
	//if it's NOT valid
	if(state.val().length == 0){
		//lname.addClass("validation");
		stateInfo.text("Please enter state!");
		stateInfo.addClass("validation");
		return false;
	}	
	//if it's valid
	else{		
		stateInfo.text("");
		stateInfo.removeClass("validation");
		return true;
	}
}

function validateCountry(){	
	//if it's NOT valid
	if(country.val().length == 0){
		//lname.addClass("validation");
		countryInfo.text("Please enter country!");
		countryInfo.addClass("validation");
		return false;
	}	
	//if it's valid
	else{		
		countryInfo.text("");
		countryInfo.removeClass("validation");
		return true;
	}
}

function validateZip(){	
	//if it's NOT valid
	if(!RegExp(/^[0-9][\d\- ]*[0-9]$/).test(zip.val())){
		//lname.addClass("validation");
		zipInfo.text("ZIP/PIN don't appear to be valid!");
		zipInfo.addClass("validation");
		return false;
	}	
	//if it's valid
	else{		
		zipInfo.text("");
		zipInfo.removeClass("validation");
		return true;
	}
}

function validateTerm(){	
	//if it's NOT valid
	if(!term.attr("checked")){		
		//lname.addClass("validation");
		termInfo.text("Please tick the box if 'agree'.");
		termInfo.addClass("validation");
		return false;
	}	
	//if it's valid
	else{		
		termInfo.text("");
		termInfo.removeClass("validation");
		return true;
	}
}
