// Variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startDiv = document.querySelector('.start');
const title = document.querySelector('.title');
const overlay = document.getElementById('overlay');

let missed = 0;

// Listen for start game button to be pressed

startDiv.addEventListener('click', () => {
    if (startDiv.style.display === 'none') {
        StartDiv.style.display = 'flex';
    } else {
        startDiv.style.display = 'none';
    }

});


// Listen for on screen keyboard to be clicked

qwerty.addEventListener('click', (e) => {
     if (e.target.tagName === 'BUTTON') {
        e.target.classList.add('chosen');
        e.target.disabled = true;
        const letterFound = checkLetter(e.target.innerHTML);

        if (letterFound === null) {
            let heart = document.getElementsByTagName('img')[missed];
            heart.src = 'images/lostHeart.png';
            missed += 1;
                                  
          
        }
    }

    checkWin();
   
});


// Phrase list

const wordPhrase = [
    'shaun of the dead',
    'lord of the rings',
    'wrestle mania',
    'leonardo dicaprio',
    'merry christmas',
    'this is the way',
    'dogs',
    'president',
    'treehouse',
    'i love you',
    'baby yoda'
]

// Return a random phrase from an array

const getRandomPhraseAsArray = (arr) => {
    let getRandomPhrase = Math.floor(Math.random() * wordPhrase.length);
    
     return wordPhrase[getRandomPhrase].split('');
}
getRandomPhraseAsArray(wordPhrase);



// adds the letter of a string to the display

const addPhraseToDisplay = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let li = document.createElement('li');
      li.textContent = arr[i];

      if (li.textContent === ' ') {
        li.classList.add('space');

      } else {
        li.classList.add('letter');
      }

      phrase.appendChild(li);
    }
    
}

const phraseArray = getRandomPhraseAsArray(wordPhrase);
addPhraseToDisplay(phraseArray);



// Check if a letter is in the phrase

const checkLetter = (button) => {
    let listItems = document.getElementsByClassName('letter');
    let matchFound = null;

    for (let i = 0; i < listItems.length; i++) {
        
        if (listItems[i].textContent === button) {
            listItems[i].classList.add('show');
            matchFound = listItems[i].textContent;
           
        } 
        
    }
        return matchFound;

}


// check if game has been won or loss

const checkWin = () => {
    const showLetter = document.getElementsByClassName('letter');
    const showItems = document.getElementsByClassName('show');
    if (showLetter.length === showItems.length) {
        overlay.classList.add('win');
        overlay.style.display = 'flex';
        title.textContent = 'You Won!';
        startDiv.setAttribute("onClick","window.location.reload()");
        
    } 
    
    
    if (missed > 4 ) {
            overlay.classList.add('lose');
            overlay.style.display = 'flex';
            title.textContent = 'You Lose!';
            startDiv.setAttribute("onClick","window.location.reload()");
        
    }
    

}



