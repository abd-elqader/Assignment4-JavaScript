var users =
[
    {
    name: "mohamed",
    password: "12345",
    email: "mohamed@gmail.com"
    },
];

if (localStorage.getItem('users') !== null) {
    users = JSON.parse(localStorage.getItem('users'));
}

var form = document.querySelector('.form');
var loginSection = document.querySelector("#login-section");
var loginHeader = document.querySelector("#login-section h1")
var dashboardSection = document.querySelector("#dashboard-section");
var signupSection = document.querySelector("#signup-section");
var button = document.querySelector("button");
var logout = document.querySelector("#logout");
var signup = document.querySelector("#signup");
var signin = document.querySelector("#signin");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var alertMessage = document.querySelector(".text-danger");


button.addEventListener("click", function () {
    alertMessage.innerHTML= '';
    var message = validation(email, password);
        if(typeof(message) === typeof(1)) {
            loginSection.classList.add("d-none");
            dashboardSection.classList.remove("d-none");
            dashboardSection.querySelector(".user-name").innerHTML = users[validation(email, password)].name;
        }else {
            if (message == 'success') {
                alertMessage.classList.replace('text-danger','text-success');
            }else{
                alertMessage.classList.replace('text-success','text-danger');
            }
            alertMessage.innerHTML = message;
        }
    });

// go to login veiw
logout.addEventListener("click", function () {
    loginSection.classList.remove("d-none");
    dashboardSection.classList.add("d-none");
});

// add field to enter the name in sign up form  
signup.addEventListener("click", function () {
    var newDiv = document.createElement('div');
    newDiv.classList.add('mb-3','mx-4');
    newInput = document.createElement('input');
    newInput.classList.add('form-control', 'bg-transparent', 'text-white');
    newInput.setAttribute('placeholder','enter the name');
    newInput.setAttribute('id','name');
    newDiv.append(newInput)
    form.prepend(newDiv);
    signup.classList.add('d-none');
    signin.classList.remove('d-none');
    button.innerHTML= 'Sign Up';
    alertMessage.innerHTML= '';
});

// to return to sign in form 
signin.addEventListener('click', function(){
    signup.classList.remove('d-none');
    signin.classList.add('d-none');
    newInput.remove();
    button.innerHTML= 'Login';
    alertMessage.innerHTML= '';
});


// validation to test if name field is already exist if 

//  yes :   store the data in local storage
//  no  :   test if data exist to login in 
function validation(email, password) {
    var nameSignup = document.querySelector("#name");

    if(nameSignup == null){
        if (email.value == "" || password.value == "") {
            return "All inputs is required";
        } 
        for(var i = 0; i < users.length; i++) {
            if (email.value == users[i].email && password.value == users[i].password) {
                return i;
            }
        }
        return 'incorrect email or password';
    }else{
        for (let i = 0; i  < users.length; ++i) {
            if (email.value == users[i].email) {
                return 'you are alraedy exist';
            }     
        }
        addUser(nameSignup, email, password)
        return 'success'
    }
}



function addUser(nameSignup, email, password) {
    var user = {
        "name": nameSignup.value,
        "email": email.value,
        "password": password.value,
    }
    
    users.push(user);
    var strObj = JSON.stringify(users);
    localStorage.setItem('users', strObj);
}
