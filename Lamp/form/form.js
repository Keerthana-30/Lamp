function validations(index, value) {
    if (index === 0 || index === 1) {
        const regExpName = /^[a-zA-Z]+$/;
        if (value === "") { document.getElementById('error' + index).textContent = "* Please fill out the field" ; }
        else if (value.length <= 3) {
            document.getElementById('error' + index).textContent = "* Username must be atleast 5 Characters";    
        }
        else if (value.length > 14) {
            document.getElementById('error' + index).textContent = "* Username should not exceeds 14 Characters"; 
        }
        else if (!(regExpName.test(value))) {
            document.getElementById('error' + index).textContent = "* special characters and numbers are not allowed ";
          
        }
        else {
            document.getElementById('error' + index).textContent = ""
            return value;
        }
    }
    else {
        const regExp = /^([a-zA-Z0-9])+@([a-zA-Z]{3,5})+\.([a-zA-Z\.]{3,10})$/;
        if (value === "") {
            document.getElementById('error2').textContent = "* Please fill out the field";
        } else if (!(regExp.test(value))) {
            document.getElementById('error2').textContent = "* Invalid Email";
        } else {
            document.getElementById('error2').textContent = "";
            return value;
        }
    }
}

var form = document.getElementById('login_form');
var button = document.getElementById('submit_button');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var email = document.getElementById('email');
var password= document.getElementById('password');
var cpassword=document.getElementById('cpassword');


firstName.addEventListener('input', () => {
    let fname=validations(0, firstName.value);
})

lastName.addEventListener('input', () => {
    let lname=validations(1, lastName.value);
})
email.addEventListener('input', () => {
    let mail=validations(2, email.value);
})
password.addEventListener('input',()=>{
    validations(3,password.value);
})
cpassword.addEventListener('input',()=>{
    validations(4,cpassword.value);
})


function formSubmit(event){
    event.preventDefault();
    var firstName1 = validations(0,firstName.value);
    var lastName1 = validations(1,lastName.value);
    var email1 =validations(2, email.value);
    if(firstName1 && lastName1 && email1){
        if(localStorage.getItem(firstName1+"_"+email1)){
            alert('Already Existing please login');
            document.location.href="loginform.html";
        }
        else{
            let user ={
                name:firstName1+lastName1,
                emailID:email1
            }
            localStorage.setItem(firstName1+"_"+email1,user);
            alert("Registered");
        }  
    }
}























/*button.addEventListener('submit',(event) => {

//event.preventDefault();
validations(0,fname);
alert("dhuirh");
//alert("dhcud");
/* console.log("inside button");*/
/* var firstName1 = validations(0,firstName.value);
var lastName1 = validations(1,lastName.value);
var email1 =validations(2, email.value);
})*/


