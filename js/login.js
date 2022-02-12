document.getElementById('submit-button').addEventListener('click',function(){
    const emailField = document.getElementById('input-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    const passwordField = document.getElementById('input-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    if(userEmail == 'abir@gmail.com' && userPassword == '1234'){
        window.location.href = 'banking.html';
    }
    else if(userEmail != 'abir@gmail.com'){
        const emailField = document.getElementById('input-email');
        emailField.style.border = '2px solid red'
        ;
    }
    else if(userPassword != '1234'){
        const passwordField = document.getElementById('input-password');
        passwordField.style.border = '2px solid red'
        ;
    }
})