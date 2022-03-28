const form = document.getElementById('form');
const username = document.getElementById('username');
const email =document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');




form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs();
    });
    
    function checkInputs(){
        // get inputs values and remove trims
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if (usernameValue ==='') {
    // show error color
    // add error class
    setErrorFor(username,'username cannot be blank')
    }else {
        // add success class
        setSuccessFor(username);
    }
    }
    
    // all innerdiv function and innerText messages
    function setErrorFor(input, message) {
    // to enter the index.html straight, state the div which is the parent element
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
     
    // add error message inside small tag
    small.innerText = message;
    
    // add error class 
    formControl.className ='form-control error'
    }
    
        