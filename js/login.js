document.getElementById("loginBtn").addEventListener('click', function(){
    // email input capture
    const emailField = document.getElementById('email');
    const email = emailField.value;
    
    // password capture
    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    // verification ---- simply for this practice only: danger;;;
    if (email === "admin@fokir.com" && password === "Bangladesh"){
        console.log('Valid user')
    }
    else{
        console.log('Invalid User')
    }
})