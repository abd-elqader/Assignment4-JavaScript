var users =
[
    {
    name: "mohamed",
    password: "12345",
    email: "mohamed@gmail.com"
    }
];
var loginSection = document.querySelector("#login-section");
var dashboardSection = document.querySelector("#dashboard-section");
var signupSection = document.querySelector("#signup-section");
var button = document.querySelector("button");
var logout = document.querySelector("#logout");
var singup = document.querySelector("#signup");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var alert = document.querySelector(".text-danger");


button.addEventListener("click", function () {

        if(typeof(validation(email, password)) === typeof(1)) {
            loginSection.classList.add("d-none");
            dashboardSection.classList.remove("d-none");
            dashboardSection.querySelector(".user-name").innerHTML = users[validation(email, password)].name;
        }else {
            alert.innerHTML = validation(email, password);
        }
    } 
)

logout.addEventListener("click", function () {
    loginSection.classList.remove("d-none");
    dashboardSection.classList.add("d-none");
})

singup.addEventListener("click", function () {
    var newDiv = document.createElement('div');
    newDiv.innerHTML =  
    `
        <div class="mb-3 mx-4">
            <input type="password" class="form-control bg-transparent text-white" placeholder="Enter your password" id="password">
        </div>
    `;
    password.appendSibling(newDiv);
    // ele.appendChild(newDiv);
    console.log('done');
})







function validation(email, password) {
    if (email.value == "" || password.value == "") {
        return "All inputs is required";
    } 

    for(var i = 0; i < users.length; i++) {
        if (email.value == users[i].email && password.value == users[i].password) {
            return i;
        }
    }

    return "incorrect email or password";
}