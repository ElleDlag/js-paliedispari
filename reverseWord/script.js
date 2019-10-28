//my version :-/
function reverseCheck (){
    var myWord = prompt("inserisci una parola");
    var wordLength = myWord.length;
    //var arrWord = myWord.split("");
    //var wordReverse = arrWord.reverse().join("");
    for (i = (wordLength -1) ; i >= 0; i--){
        var letter = myWord[i] //is a string
        var wPos = (wordLength - i) -1  //is a number
        var matchLetter = myWord[wPos] //is a string
        if(letter == matchLetter){
            console.log("è una parola palindroma");
        } else {
            console.log("non è una parola palindroma");
        }
    }  
}
//reverseCheck();

//more quickly version solution :-/
function reverseCheck2 (){
    var myWord = prompt("inserisci una parola");
    var reverseWord = '';
    for (i = (myWord.length -1) ; i >= 0; i--){
        reverseWord += myWord[i] //sufficently to fill an empty string variable :-/
        console.log(reverseWord)
    }
    if(reverseWord == myWord){ //match the old string with new string :-/
        console.log("è una parola palindroma");
    } else {
        console.log("non è una parola palindroma");
    }
}
reverseCheck2()