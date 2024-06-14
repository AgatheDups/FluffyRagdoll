document.getElementById("ageChat").addEventListener("change", convertirAge)

function convertirAgeChatEnHumain(ageChat) {
    if (ageChat === 2) {
        return 2; // Le deuxième mois équivaut à 2 ans humains.
    } else if (ageChat === 4) {
        return 6; // Le quatrième mois équivaut à 6 ans humains.
    } else if (ageChat === 6) {
        return 10; // Le sixième mois équivaut à 10 ans humains.
    } else if (ageChat === 12) {
        return 15; // Le premier an équivaut à 15 ans humains.
    } else if (ageChat === 24) {
        return 24; // Le deuxième an équivaut à 9 ans humains de plus, soit 15 + 9.
    } else {
        return 24 + ((ageChat/12) - 2) * 4; // Chaque année supplémentaire équivaut à 4 ans humains.
    }
}

function convertirAge() {
    const ageChatSelect = document.getElementById('ageChat');
    const ageChat = parseInt(ageChatSelect.value);
    const ageHumain = convertirAgeChatEnHumain(ageChat);
    
    const resultatElement = document.getElementById('resultatAge');
    resultatElement.textContent = `L'âge de votre Ragdoll en années humaines est ${ageHumain} ans`;
}
