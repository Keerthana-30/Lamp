class Validation {
    setter(firstName, lastName, email) {
        const details = new userDetails();
        details.setFirstName(this.validations(0, firstName));
       // console.log("called setterfma")
        details.setLastName(this.validations(1,lastName));
        details.setEmail(this.validations(2, email));
        //alert(details['Email']);
        //alert(details['FirstName']);
        //alert(details['LastName']);
    }
    validations(index, value) {
        if (index === 0 || index === 1) {
            const regExpName = /^[a-zA-Z]+$/
            if (value === "") { document.getElementById('error' + index).textContent = "*Please fill out the field" }
            else if (value.length <= 3) {
                document.getElementById('error' + index).textContent = "* Username must be atleast 5 Characters"
            }
            else if (value.length > 14) {
                document.getElementById('error' + index).textContent = "* Username should not exceeds 14 Characters"
            }
            else if (!(regExpName.test(value))) {
                document.getElementById('error' + index).textContent = "* special characters and numbers are not allowed "
            }
            else {
                document.getElementById('error' + index).textContent = ""
                return value;
            }
        }
        else {
            const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
            if (value === "") {
                document.getElementById('error2').textContent = "* Please Enter Valid Email"
            } else if (!(regExp.test(value))) {
                document.getElementById('error2').textContent = "* Invalid Email"
            } else {
                document.getElementById('error2').textContent = ""
                return value;
            }
        }

    }
}
class userDetails {
    setFirstName(firstname) {
        this.FirstName = firstname;
    }
    setLastName(lastname) {
        this.LastName = lastname;
    }
    setEmail(email) {
        this.Email = email;
    }
}
let object = new Validation();
var form = document.getElementById('login_form');
const button = document.getElementById('submit_button');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var email = document.getElementById('email');


firstName.addEventListener('input', () => {
    //console.log("inside fname");
    //console.log(firstName.value);
    object.validations(0, firstName.value);
})

lastName.addEventListener('input', () => {
    //console.log("inside lastname");
    object.validations(1, lastName.value);
})
email.addEventListener('input', () => {
    //console.log("inside email");
    object.validations(2, email.value);
})
button.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("pressingsubmit");
    var firstName1 = firstName.value;
    var lastName1 = lastName.value;
    var email1 = email.value;
    let obj = new Validation();
    obj.setter(firstName1, lastName1, email1);
})

