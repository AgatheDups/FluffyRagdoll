const passwordInput= document.querySelector('#password');
const passwordInputVerif= document.querySelector('#password-verif');
const show= document.querySelector('.show');
const showVerif= document.querySelector('.show-verif');

show.addEventListener('click',visibility)
showVerif.addEventListener('click',visibilityVerif)

function visibility(){
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        show.innerHTML=`<ion-icon name="eye-outline"></ion-icon>`;
    }else{
        passwordInput.type ="password";
        show.innerHTML=`<ion-icon name="eye-off-outline"></ion-icon>`;
    }
}

function visibilityVerif() {
    if (passwordInputVerif.type === "password") {
        passwordInputVerif.type = "text";
        showVerif.innerHTML=`<ion-icon name="eye-outline"></ion-icon>`;
    }else{
        passwordInputVerif.type ="password";
        showVerif.innerHTML=`<ion-icon name="eye-off-outline"></ion-icon>`;
    }
}





// <ion-icon name="checkmark-outline"></ion-icon> for check the email