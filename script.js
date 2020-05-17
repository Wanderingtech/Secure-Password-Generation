//figure out all prompts 
//set length guidelines
document.getElementById("button").onclick = function(){
    prompt ("Would you like uppercase letters?");
   
} 

var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    SpecChar: getRandomSpecChar

};

//Getting Random Characters
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecChar(){
    var SpecChar = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    return SpecChar[Math.floor(Math.random() * SpecChar.length)];
}

//Event Listener Created
generateEl.addEventListener('click', () => {
    var length = +lengthEl.value;
    var hasLower = lowercaseEl.true;
    var hasUpper = uppercaseEl.true;
    var hasNumber = numbersEl.true;
    var hasSpecChar = SpecCharEl.true;

//Display Generated Password in Text Box. Can I make this an alert?
    resultEl.innerText = generatedPassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSpecChar,
        length
    );
});

//Generate Password function
function generatedPassword(lower, upper, number, SpecChar, length){
var generatedPassword = '';

var typesCount = lower + upper + number + SpecChar;

var typesArray = [{ lower }, { upper }, { number }, { SpecChar }].filter(
    item => Object.values(item)[0]);

if(typesCount === 0){
    return '';
}

for(var i = 0; i < length; i += typesCount) {
    typesArray.forEach(type => {
        var funcName = Object.keys(type)[0];

        generatedPassword += randomFunc[funcName()];
    });
}

}
