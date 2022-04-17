function validations(index, value) {
    if (index === 4 || index === 5) {
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
    else if(index===1) {
        const regExp = /^([a-zA-Z0-9])+@([a-zA-Z]{3,5})+\.([a-zA-Z\.]{3,10})$/;
        if (value === "") {
            document.getElementById('error1').textContent = "* Please fill out the field";
        } else if (!(regExp.test(value))) {
            document.getElementById('error1').textContent = "* Invalid Email";
        } else {
            document.getElementById('error1').textContent = "";
            return value;
        }
    }
    else if(index===2) {
       // const regExp=/ ^[a-z]$/;
        if(value===""){
            document.getElementById('error2').textContent = "*Please fill out the field";
        }
       /* else if(!(regExp.test(value))){
            document.getElementById('error2').textContent="* Password should contain atleast one character,one special character";
        }*/
        else{
            document.getElementById('error2').textContent = "";
        }
    }
    else{
        if(value ===""){
            document.getElementById('error3').textContent = "*Please fill out the field";
        }
        else if(value === password.value){
            //alert("ok");
            document.getElementById('error3').textContent = "";
        }
        else{
            document.getElementById('error'+index).textContent = "* Passwords dont match";  
        }
    }
}

var form = document.getElementById('login_form');
var button = document.getElementById('submit_button');
var email = document.getElementById('email');

var password= document.getElementById('password');
var cpassword=document.getElementById('confirmPassword');

var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');

email.addEventListener('input', () => {
    let mail=validations(1, email.value);
})
password.addEventListener('input',()=>{
    validations(2,password.value);
})
cpassword.addEventListener('input',()=>{
    validations(3,cpassword.value);
})

firstName.addEventListener('input', () => {

    let fname=validations(4, firstName.value);
})

lastName.addEventListener('input', () => {
    let lname=validations(5, lastName.value);
})


function formSubmit(event){
    event.preventDefault();
    var email1 =validations(1, email.value);
    var password1 = validations(2,password.value);
    var cpassword1 = validations(3,cpassword.value);
    var firstName1 = validations(4,firstName.value);
    var lastName1 = validations(5,lastName.value);
}

function next(event,stepValue){
    //alert("inside next"+stepValue);
    document.getElementById('step'+stepValue).style.display="none";
    //alert(stepValue+1);

    alert(document.getElementById('step').classList);
    document.getElementById('step'+stepValue+1).style.display="block";
  //  event.preventDefault();
}
function previous(event,stepValue){
    document.getElementById('step'+stepValue).style.display="none";
    document.getElementById('step'+stepValue-1).style.display="block";
   // event.preventDefault();
}