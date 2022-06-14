document.getElementById('login-submit').addEventListener('click',function(){
    // get user email
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    // get user password
    const userPasswordField = document.getElementById('user-password');
    const userPassord = userPasswordField.value;
    // check email and password to go next another page 
    if(userEmail == 'rabiul@54.com' && userPassord == 'morMon'){
        window.location.href = 'banking.html'
    }
})

