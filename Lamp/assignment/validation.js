function validations(index, value) {
    //name validation
    if (index === 4 ) {
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
    //email validation
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
    //password validation
    else if(index===2) {
       const regExp=/^[a-zA-Z0-9]{6,10}$/;
        if(value===""){
            document.getElementById('error2').textContent = "*Please fill out the field";
        }
       else if(!(regExp.test(value))){
            document.getElementById('error2').textContent="* Password should contain atleast 6 character";
        }
        else{
            document.getElementById('error2').textContent = "";
            return value;
        }
    }
    //confirm password
    else if(index==3){
        if(value ===""){
            document.getElementById('error3').textContent = "*Please fill out the field";
        }
        else if(value === password.value){
            document.getElementById('error3').textContent = "";
            return value;
        }
        else{
            document.getElementById('error'+index).textContent = "* Passwords don't match";  
        }
    }
    //dob validation
    else if(index ==6){
        if(value ===""){
            document.getElementById('error6').textContent = "*Please fill out the field";
        }
        else {
            var dob = new Date(value);
            var month_diff = Date.now() - dob.getTime();
            var age_dt = new Date(month_diff); 
            var year = age_dt.getUTCFullYear();
            var age = Math.abs(year - 1970);
            if(age>=18 && age<=50){
                document.getElementById('error6').textContent = "";
                return value;
            }
            else{
                document.getElementById('error6').textContent="* Please enter a valid date";
            }
            
        }
    }
    //mob validation
    else if(index==7){
        const mobRegex=/^([9876])[0-9]{9}$/;
        if(value ===""){
            document.getElementById('error7').textContent = "*Please fill out the field";
        }
        else if (!(mobRegex.test(value))) {
            document.getElementById('error7').textContent = "* special characters and numbers are not allowed ";
          
        }
        else if (value.length<10) {
            document.getElementById('error7').textContent = "* Phone number must be of 10 digits";    
        }
        else {
            document.getElementById('error7').textContent = ""
            return value;
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

var dob =document.getElementById('dob');
var mob =document.getElementById('mobileNumber');

email.addEventListener('input', () => {
    validations(1, email.value);
})
password.addEventListener('input',()=>{
    validations(2,password.value);
})
cpassword.addEventListener('input',()=>{
    validations(3,cpassword.value);
})
firstName.addEventListener('input', () => {

    validations(4, firstName.value);
})
lastName.addEventListener('input', () => {
    validations(5, lastName.value);
})
dob.addEventListener('input', () => {
    validations(6, dob.value);
})
mob.addEventListener('input', () => {
    validations(7, mob.value);
})

function step1(event){
    event.preventDefault();
    var email1 =validations(1, email.value);
    var password1 = validations(2,password.value);
    var cpassword1 = validations(3,cpassword.value);
    var firstName1 = validations(4,firstName.value);
    var lastName1 = validations(5,lastName.value);
    if(email1 && password1 && cpassword1 && firstName1){
        return 1;
    }
}

function step2(event){
    var dob1 =validations(6,dob.value);
    var mob1 = validations(7,mob.value);
   // alert(dob1+mob1);
    if(dob1 && mob1){
        return 1;
    }
}
function next(event,stepValue){
    event.preventDefault();
    if(stepValue==1){
        if(step1(event)){
            document.getElementById('step'+stepValue).style.display="none";
            document.getElementById('step'+(stepValue+1)).style.display="block";
        }
    }
    else if(stepValue==2){
        if(step2(event)){
            document.getElementById('step'+stepValue).style.display="none";
            document.getElementById('step'+(stepValue+1)).style.display="block";

        }
    }
    else{
        document.getElementById('step'+stepValue).style.display="none";
            document.getElementById('step'+(stepValue+1)).style.display="block";

    }
}
function previous(event,stepValue){
    event.preventDefault();
    document.getElementById('step'+stepValue).style.display="none";
    document.getElementById('step'+(stepValue-1)).style.display="block";
}


function submit(event){
    alert("Thank you for registering")
}