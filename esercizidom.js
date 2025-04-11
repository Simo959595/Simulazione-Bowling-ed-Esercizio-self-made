// **Es - 1:**creare una pagina HTML con 3 paragrafi e 3 bottoni. 
// Il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale, 
// il secondo dovra’ rendere il testo dei paragrafi in grassetto 
// il terzo dovra’ far scomparire e ricomparire i paragrafi!

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('colorButton').addEventListener('click', function() {
    let paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.style.color = getRandomColor();
    });
});

document.getElementById('boldButton').addEventListener('click', function() {
    let paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.style.fontWeight = 'bold';
    });
});

document.getElementById('toggleButton').addEventListener('click', function() {
    let paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.classList.toggle('hidden');
    });
});


// Es - 2: Inserire nel file html due campi input ed un pulsante per generare un articolo: un campo per inserire un titolo un campo per inserire un paragrafo inserire nell’articolo anche la data di pubblicazione 
// Implementare la seguente funzionalita’: al click del pulsante, dovrete creare un articolo popolato dai valori prelevati dai due campi input 

document.getElementById('bottone').addEventListener('click', function() {
    let title = document.getElementById('titleInput').value;
    let content = document.getElementById('contentInput').value;
    let date = new Date().toLocaleDateString();

    if (title && content) {
        let articleContainer = document.getElementById('articleContainer');

        let article = document.createElement('article');
        article.innerHTML = `<h2>${title}</h2><p>${content}</p><p><em>Pubblicato il: ${date}</em></p>`;
        articleContainer.appendChild(article);
      
    } else {
        alert('inserisci sia il titolo che il contenuto!!!');
    }
});


// **Es - 3:**
// Dato un array di contatti:
// let contacts = [
//     { 'id': 1, 'name': 'Nicola'},
//     { 'id': 2, 'name': 'Fabio'},
//     { 'id': 3, 'name': 'Luca'},
//     { 'id': 4, 'name': 'Giulia'}
// ] 
// Visualizzare tutti i contatti mediante una lista

// Creare diversi pulsanti:

// - per ordinarli tramite id in ordine crescente o decrescente
// - per ordinarli tramite name in ordine alfabetico dalla A-Z e dalla Z-A

let contacts = [
    { 'id': 1, 'name': 'Alessio'},
    { 'id': 2, 'name': 'Benedetta'},
    { 'id': 3, 'name': 'Carlo'},
    { 'id': 4, 'name': 'Daniela'},
    { 'id': 5, 'name': 'Ernesto'},
    { 'id': 6, 'name': 'Flavia'},
]

console.log(contacts);

let list = document.querySelector(`#list`)

function displayContacts(array) {
    list.innerHTML = ''; 
    array.forEach(contact => {
        let li = document.createElement('li');
        li.innerHTML = `ID: ${contact.id}, Nome: ${contact.name}`;
        list.appendChild(li)
    });
}
displayContacts(contacts);


// ordinamento elementi tramite i bottoni

document.getElementById('tastoAsc').addEventListener('click', function() {
    let contattiOrdinati = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    displayContacts(contattiOrdinati);
});

document.getElementById('tastoDisc').addEventListener('click', function() {
    let contattiOrdinati = [...contacts].sort((a, b) => b.name.localeCompare(a.name));
    displayContacts(contattiOrdinati);
});

document.getElementById('tastoAscId').addEventListener('click', function() {
    let contattiOrdinati = [...contacts].sort((a, b) => a.id - b.id);
    displayContacts(contattiOrdinati);
});

document.getElementById('tastoDiscId').addEventListener('click', function() {
    let contattiOrdinati = [...contacts].sort((a, b) => b.id - a.id);
    displayContacts(contattiOrdinati);
});
