// Variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startDiv = document.querySelector('.start')
const missed = 0;



startDiv.addEventListener('click', () => {
    
    if (startDiv.style.display === 'none') {
        StartDiv.style.display = 'block';
    } else {
        startDiv.style.display = 'none';
    }

});


qwerty.addEventListener('click', (e) => {
    
});


// Phrase list

const wordPhrase = [
    'learning javascript',
    'lord of the rings',
    'wrestle mania',
    'leonardo dicaprio',
    'merry christmas',
    'this is the way',
    'dogs'
]

// Return a random phrase from an array

const getRandomPhraseAsArray = (arr) => {
    const getRandomPhrase = Math.floor(Math.random() * wordPhrase.length);

     return wordPhrase[getRandomPhrase].split('');
}
getRandomPhraseAsArray(wordPhrase);



// adds the letter of a string to the display

const addPhraseToDisplay = (arr) => {
    for (let i = 0; i < wordPhrase.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = arr[i];

      if (li.innerHTML != ' ') {
        li.classList.add('letter');

      } 
      phrase.appendChild(li);
    }
    
}

const phraseArray = getRandomPhraseAsArray(wordPhrase);
addPhraseToDisplay(phraseArray);



// Check if a letter is in the phrase

const checkLetter = (button) => {
    let listItems = document.querySelectorAll('.letter');
    let matchFound = null;

    for (i = 0; i < listItems.length; i++) {
        
        if (button.textContent === listItems[i].textContent) {
            listItems.classList.add('Show');
            matchFound = listItems[i].textContent;
           
        } 
        
    }
        return matchFound;

}

