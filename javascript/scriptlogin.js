let email=document.getElementById('email');
let pwd=document.getElementById('pwd');
let errorpwd=document.getElementById('pwderror');
let erroremail=document.getElementById('emailerror');
let form=document.getElementById('form');
let regx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regex=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let regpwd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
function mailvalidate(){
    if(email.value.match(regx) || email.value.match(regex)){
        return true;
        
    }
    else{
        return false;
    }
}
form.addEventListener('submit', function(event) {
    if(mailvalidate()){
        erroremail.innerText='* email or phone number entered is valid';
        erroremail.style.color='green';
        erroremail.style.fontWeight='bold';
        erroremail.style.fontSize='small';
       
    }
    else{
        event.preventDefault();
        erroremail.innerText='* email or phone number entered is not valid';
        erroremail.style.color='red';
        erroremail.style.fontWeight='bold';
        erroremail.style.fontSize='small';
    }
})
form.addEventListener('submit', e =>{
    if(pwd.value===''|| pwd.value==null){
        e.preventDefault();
        errorpwd.innerText='* fill the password field';
        errorpwd.style.color='red';
        errorpwd.style.fontWeight='bold';
        errorpwd.style.fontSize='small';  
    }
    else{
        return true;
        errorpwd.style.display='none';
    }
})
