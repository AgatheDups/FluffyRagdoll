let mdpSaisi = '';
let regexMaj = new RegExp("[A-Z]");
let regexMin = new RegExp("[a-z]");
let regexChiffre = new RegExp("[0-9]");
let regexSpecial = new RegExp("\\W");
let compteurForce;
let barSecu = document.getElementById('bar-secu');

function verifierPropositionMdp() {
    compteurForce = 0;
    mdpSaisi = document.getElementById('password').value;

    if (regexMaj.test(mdpSaisi)) {
        compteurForce += 1;
    } 
    if (regexMin.test(mdpSaisi)) {
        compteurForce += 1;
    } 
    if (regexChiffre.test(mdpSaisi)) {
        compteurForce += 1;
    } 
    if (regexSpecial.test(mdpSaisi)) {
        compteurForce += 1;
    } 
    if (mdpSaisi.length < 8) {
        compteurForce -= 1;
    } 
    
    switch (compteurForce) {
        case 4: 
            barSecu.innerHTML = `<p class='alert alert-success' role="alert">Très sécurisé !</p>`;
            break;
        case 3: 
            barSecu.innerHTML = `<p class='alert alert-success' role="alert">Sécurisé !</p>`;
            break;
        case 2: 
            barSecu.innerHTML = `<p class='alert alert-warning' role="alert">Moyen !</p>`;
            break;
        case 1: 
            barSecu.innerHTML = `<p class='alert alert-danger' role="alert">Dangereux !</p>`;
            break;
        case 0: 
            barSecu.innerHTML = `<p class='alert alert-danger' role="alert">Dangereux !</p>`;
            break;
        default:
            barSecu.innerHTML = `<p> </p>`;
    }
}

document.getElementById('password').addEventListener('keyup', verifierPropositionMdp);
