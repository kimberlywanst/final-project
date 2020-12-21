let userList = [
    {
        userName: "Isaac Chong",
        userPhone: "01234567",
        userEmail: "isaac@gmail.com",
        userPassword: "password2"
    },
    {
        userName: "Andy",
        userPhone: "12345678",
        userEmail: "andy@gmail.com",
        userPassword: "password3"
    },
    {
        userName: "Kimberly",
        userPhone: "87654321",
        userEmail: "kimberly@gmail.com",
        userPassword: "password1"
    }
]

function login() {
    userEmail = document.getElementById("userEmail").value
    userPassword = document.getElementById("userPassword").value

    let valid = false;

    for (i = 0; i < userList.length; i++) {
        if (userEmail === userList[i].userEmail && userPassword === userList[i].userPassword) {
            window.location = "stories.html"
            valid = true
            break
        }
    }
    if(!valid) {
        alert("Email or password is invalid")
    }
}


function signUp() {
    signUpName = document.getElementById("signUpName").value
    signUpPhone = document.getElementById("signUpPhone").value
    signUpEmail = document.getElementById("signUpEmail").value
    signUpPassword = document.getElementById("signUpPassword").value

    if (signUpName.length == 0 || signUpPhone.length == 0 || signUpEmail.length == 0 || signUpPassword.length == 0) {
        alert("Please fill in required fields");
        return
    }

    let newUser = {
        userName: signUpName,
        userPhone: signUpPhone,
        userEmail: signUpEmail,
        userPassword: signUpPassword
    }

    userList.push(newUser)
    console.log(userList)
}


