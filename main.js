function tofes() {
    if( chekingPassword()&& onlyEng()&&varifyEmail()&&varifyPhone()&&underOrAbove18()){
        return true}
        return false
}
function underOrAbove18() {
    var birthDate=+document.getElementById("birth-date").value.substr(0,4);
    var corentDate=new Date().getFullYear();
    if(corentDate-birthDate>=18 && birthDate*0==0 ){
        return true
    }
    birth_date_h2.innerText="you are under 18"
    birth_date_h2.style.color="red"
    return false;
}
function onlyEng() {
    var regexName = /^([a-zA-Z]{1,10})+$/
    if(regexName.test(first_name.value) && regexName.test(last_name.value)){
        return true;
        
    }
    alert_name.innerText="write only with english letters"
    alert_name.style.color="red"
    return false;
}

function varidfffyEmail() {
    var regexEmail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(regexEmail.test(user_email.value)){
        return true
    }
    email_h2.innerText="invalid email"
    email_h2.style.color="red"
        return false
}

function varifyPhone() {
  var regexPhone=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
   if(regexPhone.test(user_tel.value)){
       return true
   }
   phone_h2.innerText="invalid phone number"
   phone_h2.style.color="red"
   return false
}
function chekingPassword() {
    var regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/
    if(regexPassword.test(pS1.value)){
        if(pS1.value==pS2.value){
             console.log("sucsess");
            return true
        }
        console.log("ps not same")
        confirm_password_h2.innerText="the passwords are not the same"
        confirm_password_h2.style.color="red"
        return false
    }
    console.log("ps dosent fit");
    password_h2.innerHTML="the password needs to have at least<br>one UPPERCASE letter, a lowercase, a number<br>and between 8-12 digits"
    password_h2.style.color+"red"
    return false
}