var email = document.getElementById('email');
var password= document.getElementById('password');
var cpassword=document.getElementById('confirmPassword');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var dob =document.getElementById('dob');
var mob =document.getElementById('mobileNumber');
var flag=0;
const obj={
    1:{
        reg:/^([a-zA-Z0-9])+@([a-zA-Z]{3,5})+\.([a-zA-Z\.]{3,10})$/,
        messages:["Please enter a valid email"]
    },
    2:{
        reg:/^[a-zA-Z0-9]{6,10}$/,
        messages:["* Should contain a minimum of 6 characters and maximum of 10"]
    },
    3:{
        messages:["* Passwords don't match"]
    },
    4:{
        reg:/^[a-zA-Z]{3,14}$/,
        messages:["* special characters and numbers are not allowed ","* Must be atleast 3 Characters and atmost 14 Characters"]
    },
    5:{ 
        messages:["* Please enter a valid date"]
    },
    6:{
        reg:/^([9876])[0-9]{9}$/,
        messages:["* special characters and alphabets are not allowed ","* Phone number must be of 10 digits"]
    }
}

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
dob.addEventListener('input', () => {
    validations(5, dob.value);
})
mob.addEventListener('input', () => {
    validations(6, mob.value);
})

function validations(index,value){
    var {reg=0,messages} = obj[index];
   return testing(index,value,reg,messages);
    
}

function testing(index,value,reg,messages) {
    if(value==="") {
        document.getElementById('error'+index).textContent="*Please fill out this field";
    }
    else if((reg!==0) && (!(reg.test(value)))) {
        if ((index===4) && (value.length<=3 || value.length>14)) {
            document.getElementById('error' + index).textContent = messages[1]; 
        }
        else if ( (index===6) && (value.length<10 || value.length>10)) {
            document.getElementById('error' + index).textContent = messages[1];
        }
        else{
            document.getElementById('error' + index).textContent = messages[0];
        }
    }
    else if (index==5 && flag==0) {
        var dob = new Date(value);
        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff); 
        var year = age_dt.getUTCFullYear();
        var age = Math.abs(year - 1970);
        console.log(age);
        if(age<18 || age>=50) {
            console.log(age+"hi");
            document.getElementById('error'+index).textContent=messages[0];
        }
        else{
            flag=1;
        }
    }
    // else if (age==undefined && index==5) {
    //     console.log("88" +age);
    //     var dob = new Date(value);
    //     var month_diff = Date.now() - dob.getTime();
    //     var age_dt = new Date(month_diff); 
    //     var year = age_dt.getUTCFullYear();
    //     age = Math.abs(year - 1970);
    //     console.log(age);
    //     if(age<18 || age>=50) {
    //         console.log(age+"hi");
    //         document.getElementById('error'+index).textContent=messages[0];
    //     }
    //     console.log("afyter")
    // }

    else if((reg==0) && (value!==document.getElementById('password').value)) {
        document.getElementById('error'+index).textContent = messages[0];
    }
    else{
        //console.log(age)
        document.getElementById('error'+index).textContent = "";
        return value;
    }
}
function step1(event) {
    event.preventDefault();
    var email1 =validations(1, email.value);
    var password1 = validations(2,password.value);
    var cpassword1 = validations(3,cpassword.value);
    var firstName1 = validations(4,firstName.value);
    if(email1 && password1 && cpassword1 && firstName1) {
        return 1;
    }
}
function step2(event) {
    var dob1 =validations(5,dob.value);
    var mob1 = validations(6,mob.value);
    if(dob1 && mob1) {
        return 1;
    }
}
function next(event,stepValue) {
    event.preventDefault();
    if(stepValue==1) {
        if(step1(event)) {
            document.getElementById('step'+stepValue).style.display="none";
            document.getElementById('step'+(stepValue+1)).style.display="block";
        }
    }
    else if(stepValue==2) {
        if(step2(event)) {
            document.getElementById('step'+stepValue).style.display="none";
            document.getElementById('step'+(stepValue+1)).style.display="block";
        }
    }
    else {
        document.getElementById('step'+stepValue).style.display="none";
            document.getElementById('step'+(stepValue+1)).style.display="block";
    }
}
function previous(event,stepValue) {
    event.preventDefault();
    document.getElementById('step'+stepValue).style.display="none";
    document.getElementById('step'+(stepValue-1)).style.display="block";
}
function submitForm() {
  document.getElementsByClassName('tabcontent')[0].style.display="none";
  document.getElementById('final').style.display="block";
}
