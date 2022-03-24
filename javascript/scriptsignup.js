let email=document.getElementById('emailo');
let pwd=document.getElementById('pwd');
let pwd1=document.getElementById('pwd1');
let errorpwd=document.getElementById('pwderror');
let errorpwd2=document.getElementById('pwderror2');
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
        erroremail.style.fontStyle='italic';
        erroremail.style.fontWeight='bold';
        erroremail.style.fontSize='small';

       
    }
    else{
        event.preventDefault();
        erroremail.innerText='* email or phone number entered is not valid';
        erroremail.style.color='red';
        erroremail.style.fontStyle='italic';
        erroremail.style.fontWeight='bold';
        erroremail.style.fontSize='small';
    }
})

form.addEventListener('submit', e =>{
    if(regpwd.test(pwd.value)){
        return true;
        errorpwd.innerText='valid password';
        errorpwd.style.color='green';
        errorpwd.style.fontStyle='italic';
        errorpwd.style.fontWeight='bold';
        errorpwd.style.fontSize='small';
    }
    else{
        e.preventDefault();
        errorpwd.innerText='*   password must contain atleast one uppercase letter, one special charecter and one number ';
        errorpwd.style.color='red';
        errorpwd.style.fontStyle='italic';
        errorpwd.style.fontWeight='bold';
        errorpwd.style.fontSize='small';

    }
})
form.addEventListener('submit',en =>{
    if(pwd.value==pwd1.value){
        return true;
        errorpwd.style.display='none';
    }
    else{
        en.preventDefault();
        errorpwd2.innerText='* both entered password must be same';
        errorpwd2.style.color='red';
        errorpwd2.style.fontStyle='italic';
        errorpwd2.style.fontWeight='bold';
        errorpwd2.style.fontSize='small';
        
    }
})
