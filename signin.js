
//for SIGN IN 
document.addEventListener('DOMContentLoaded', function () {
    var openPopupButton = document.getElementById('openPopup');
    var closePopupButton = document.getElementById('closePopup');
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');

    openPopupButton.addEventListener('click', function () {
        overlay.style.display = 'block';
        popup.style.display = 'block';
    });

    closePopupButton.addEventListener('click', function () {
        overlay.style.display = 'none';
        popup.style.display = 'none';
        // Clear email and password inputs
        emailInput.value = '';
        passwordInput.value = '';
    });

    overlay.addEventListener('click', function () {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });

    popup.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    var signInForm = document.getElementById('signInForm');
    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var email = emailInput.value;
        var password = passwordInput.value;
        var rememberMe = document.getElementById('rememberMe').checked;
        // Handle sign in logic here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
        // You can replace the console logs with actual sign-in functionality
    });

    var forgotPasswordLink = document.getElementById('forgotPassword');
    forgotPasswordLink.addEventListener('click', function (event) {
        event.preventDefault();
        // Handle forgot password logic here
        console.log('Forgot password clicked');
        // You can replace the console log with actual forgot password functionality
    });
});


//for CONTACT US
document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('#contactopen');
    const footer = document.getElementById("contactus")

    contactButton.addEventListener('click', function() {
      footer.scrollIntoView({ behavior: 'smooth' });
    });
  });