let userList = [
    {
        userName: "Isaac Chong",
        userPhone: "90404148",
        userEmail: "isaac@ymail.com",
        userPassword: "password2"
    },
    {
        userName: "Andy",
        userPhone: "12345678",
        userEmail: "andy@ymail.com",
        userPassword: "password3"
    }
]

function login() {
    userEmail = document.getElementById("userEmail").value
    userPassword = document.getElementById("userPassword").value

    for (i = 0; i < userList.length; i++) {
        if (userEmail == userList[i].userEmail && userPassword == userList[i].userPassword) {
            console.log("User has logged in!")
            return
        }
    }
    console.log("error")
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


