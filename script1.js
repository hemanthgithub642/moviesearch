document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm'); 
    const signupForm = document.getElementById('signupForm'); 
    const showSignupBtn = document.getElementById('showSignup'); 
    const showLoginBtn = document.getElementById('showLogin'); 
    const signInButton = document.getElementById('signInButton'); 
    const signUpButton = signupForm.querySelector('button'); 

    
    showSignupBtn.addEventListener('click', () => {
        loginForm.classList.add('hidden'); 
        signupForm.classList.remove('hidden'); 
    });

    
    showLoginBtn.addEventListener('click', () => {
        loginForm.classList.remove('hidden'); 
        signupForm.classList.add('hidden'); 
    });

   
    signInButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

   
    signUpButton.addEventListener('click', () => {
        alert('Registered successfully');
        window.location.href = 'login.html';
    });
});
