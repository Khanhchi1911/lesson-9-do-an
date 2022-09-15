var CORRECT_EMAIL = 'khanhchi191106@gmail.com';
var CORRECT_PASS = '191106'

var inputEmail = document.getElementById('email');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form-login');
if(formLogin.attachEvent) {
    formLogin.attachEvent('submit', onFormSubmit);
} else {
    formLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e) {
    var email = inputEmail.value;
    var password = inputPassword.value;
    
    if(email == CORRECT_EMAIL && password == CORRECT_PASS) {
        alert('Đăng nhập thành công!');
    } 
    else {
        alert('Đăng nhập không thành công!');
    }
    
}
 