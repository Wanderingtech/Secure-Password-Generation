
 
var generateBtn = document.querySelector("#generate");

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
var symbol = ['!', '#', '$', '%', '&', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

var password = ''
var typesArray = []

//User clicks button to start password generation prevents page refresh
var form = document.getElementById('generate')
form.addEventListener('click', e => {
    e.preventDefault();

    //When user chooses between 8 & 128, functions begin adding elements to password
    var length = prompt('How long would you like your password: ');
    if (length < 8 || length > 128){
        alert('Please choose a number between 8 and 128');
    }else {
        alert('You chose  ' + length);

        //alert and add to array if user chooses yes lowercase.
        var hasLower = confirm("Would you like lowercase letters?");
       if (hasLower){
        alert("We'll add lowercase characteres to your password!");
        typesArray = typesArray.concat(lowercase);
        };

        //alert and add to array if user chooses yes uppercase.
        var hasUpper = confirm("Would you like uppercase letters?");
        if (hasUpper){
            alert("We'll add uppercase characters to your password!");
            typesArray = typesArray.concat(uppercase);
        };

        //alert and add to array if user chooses yes number.
        var hasNumber = confirm("Would you like to use numbers?");
        if (hasNumber){
            alert("We'll add numbers to your password!");
            typesArray = typesArray.concat(number);
        };

        //alert and add to array if user chooses yes symbols.
        var hasSymbol = confirm("Would you like to use symbols?");
        if (hasSymbol){
            alert("We'll add symbols to your password!");
            typesArray = typesArray.concat(symbol);
        };
        //generates password with random characters from users choices
        for (var i = 0; i < length; i++){
        var randomNumber = Math.floor(Math.random()*typesArray.length);
        password += typesArray[randomNumber];
    }
} 
    //displays in text box in HTML
    document.getElementById('password').innerHTML = password;
});

