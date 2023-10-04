const registerForm=document.getElementById('register-form');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');
registerForm.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
}
);
const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText=message;
    inputControl.classList.add('Error');
    inputControl.classList.remove('Success');
}
const setSuccess=element=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText='';
    inputControl.classList.add('Success');
    inputControl.classList.remove('Error');
}

const validateInputs=()=>{
    const password1value=password1.value.trim();
    const password2value =password2.value.trim();
    if(password1value.length<8)
    {
        setError(password1,'Password must be required at least 8 character');
    }else
    {
        setSuccess(password1);
    }
if(password2value!==password1value)
    {
        setError(password2,'Passwords doesn\'t match');
    }else
    {
        setSuccess(password2);
    }

}