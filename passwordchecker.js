//replace with your own password
let password = "spoonify"

function validatePasswordLength() {
    if (password.length < 8) {
        console.log("Password is too short. Current length is "
            + password.length + ". kind add "
            + (8 - password.length) + " characters");
    } else {
        console.log("Password is long enough. Current password length is " 
        + password.length + ".");
    }
}

validatePasswordLength()