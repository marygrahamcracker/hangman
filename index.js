let wordToGuess = '';
let playingGame = false;
let lettersGuessed = '';
let missedGuesses = 0;

const randomPicker = () => {
    const min = 0;
    const max = wordBank.length - 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    const randomWord = wordBank[randomNumber];
    return randomWord;
};

document.addEventListener('DOMContentLoaded', e => {
drawGallows();
document.getElementById('lblMessage').innerText = 'click new game to start!';
});

const drawGallows = () => {
    const canvas = document.getElementById('gallow');
    const context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
   
    //verticle line
    context.moveTo(35, 10);
    context.lineTo(35, 300);

    //top horizontal line
    context.moveTo(33.5, 10);
    context.lineTo(200, 10);

    //connector line
    context.moveTo(198.5, 10);
    context.lineTo(198.5, 20);

    //bottom horizontal line
    context.moveTo(2, 298);
    context.lineTo(80, 298);

    context.stroke();
};

const wordBank = [
    'Xerces', 'Lullaby', 'Aerials', 'Money', 'Disorder', 'Dumb', 'Drown',
    'Disintegration', 'Incinerate', 'Sometimes', 'Slowdive', 'Teenager', 'Marigold', 'Lithium',
    'Ashtray', 'Alison', 'Lovesong', 'Today', 'Egg', 'She', 'Everlong',
    'Temptation', 'Aneurysm', 'Loser', 'Spoonman', 'Paranoid', 'Alive', 'Reptillia',
    'Santeria', 'Drive', 'Peaches', 'Sabotage', 'Rhiannon', 'Lump', 'Roxanne',
    'Wonderwall', 'Otherside', 'Apocalypse', 'Creep', 'Holiday', 'Abracadabra', 'Panama',
    'Godzilla', 'Walk', 'Riot', 'Bodys', 'Californication', 'Shout', 'Closer',
    'Toxicity', 'Rosemary', 'Hurt', 'Mein', 'Thunderstruck', 'Barracuda', 'Jump',
    'Revolution', 'Zombie'
];

const startNewGame = () => { 
    let randomWord = randomPicker();
    console.log(randomWord);
    drawLetters(randomWord);
    wordToGuess = randomWord;
    clearDrawing();
    drawGallows();
    document.getElementById('lblMessage').innerText = 'click the letters to guess';
    let playingGame = true;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < alphabet.length; i++) {
        document.getElementById(`btn${alphabet[i]}`).disabled = false;
    }
};

const btnLetterClick = (letterBeingPassedIn) => {
    console.log(letterBeingPassedIn)
     if (!playingGame) {
        return;
     };
    lettersGuessed += letterBeingPassedIn;
        console.log(letterBeingPassedIn);
        let mybutton = document.getElementById(`btn${letterBeingPassedIn}`)
        mybutton.disabled = true;

        const foundLetter = wordToGuess.toLowerCase().includes(letterBeingPassedIn.toLowerCase());
        if (foundLetter) {
        
        } else {
            missedGuesses++;
            if (missedGuesses == 1) {
                drawHead();
            } else if (missedGuesses == 2) {
                drawBody();
            } else if (missedGuesses == 3) {
                drawArmLeft();
            } else if (missedGuesses == 4) {
                drawArmRight();
            } else if (missedGuesses == 5) {
                drawLegLeft();
            } else if (missedGuesses == 6) {
                drawLegRight();
            } else {drawFrown(); drawSadEyes(); }
      
           };

        if (missedGuessed == 7) {
            document.getElementById('lblMessage').innerText = 'you lost. click new game to play again!';
            playingGame = false;
        } else if (areAllLettersGuessed()) {
            drawHead();
            drawSmile();
            drawHappyEyes();
            document.getElementById('lblMessage').innerText = 'you win! click new game to play again!';
            playingGame = false;
        };

 };

const revealLetter = (letter) => {
    for (let i = 0; i < currentword.length; i++) {
        const currentwordletter = currentword[i];
        if (letter.toLowerCase() === currentwordletter.toLowerCase()) {
            const inputvar = document.getElementById(`hm-letter-to-guess${i}`);
            inputvar.value = currentwordletter;

};
};
};

const areAllLettersGuessed = () => {
    for (let i = 0; i < currentword.length; i++) {
        const currentwordletter = currentword[i];
        if (!lettersGuessed.includes(currentwordletter)) {
            return false;
        }
    } 
    return true;
};

const drawLetters = (word) => {
    const lettersDiv = document.getElementById('word-guess');
    lettersDiv.innerHTML = '';
    const letterCount = word.length;
    for(let i=0; i < letterCount; i++) {
        const inputVar = document.createElement('input');
        inputVar.readOnly = true;
        inputVar.className = 'letter-to-guess';
        inputVar.id = `hm-letter-to-guess-${i}`;
        lettersDiv.appendChild(inputVar);
    }
};

const clearDrawing = () => {
    const canvas = document.getElementById('gallow');
    if (canvas.getContext('2d')) {
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
};

const drawHead = () => {
    const canvas = document.getElementById('gallow');
    const context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.arc(200, 50, 30, 0, Math.PI * 2, true);
    context.stroke();
};

const drawBody = () => {
    const canvas = document.getElementById('gallow');
    const context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.moveTo(200, 80);
    context.lineTo(200, 200);
    context.stroke();
};

const drawArmLeft = () => {
    const canvas = document.getElementById('gallow');
    const context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.moveTo(200, 90);
    context.lineTo(150, 130);
    context.stroke();
};

const drawArmRight = () => {
    const canvas = document.getElementById('gallow');
    const context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.moveTo(200, 90);
    context.lineTo(250, 130);
    context.stroke();
};

const drawLegLeft = () => {
    const canvas = document.getElementById('gallow');
    const context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.moveTo(200, 200);
    context.lineTo(150, 280);
    context.stroke();
};

const drawLegRight = () => {
    const canvas = document.getElementById('gallow');
    const context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.moveTo(200, 200);
    context.lineTo(250, 280);
    context.stroke();
}

const drawSmile = () => {
    const canvas = document.getElementById('gallow');
    const context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.arc(200, 50, 20, 0, Math.PI, false);
    context.stroke();
};

const drawHappyEyes = () => {
    const canvas = document.getElementById('gallow');
    const context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.arc(190, 45, 3, 0, Math.PI * 2, true); //draw left eye
    context.arc(210, 45, 3, 0, Math.PI * 2, true); // draw right eye
    context.stroke();
}

const drawFrown = () => {
    const canvas = document.getElementById('gallow');
    const context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.arc(200, 70, 10, 0, Math.PI, true);
    context.stroke();
}

const drawSadEyes = () => {
    const canvas = document.getElementById('gallow');
    const context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 3;
    context.arc(190, 45, 3, 0, Math.PI * 2, true); //draw left eye
    context.arc(210, 45, 3, 0, Math.PI * 2, true); // draw right eye
    context.stroke();
}
