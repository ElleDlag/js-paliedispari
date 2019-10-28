function reverseCheck (){
    var myWord = prompt("inserisci una parola");
    var arrWord = myWord.split("");
    var wordReverse = arrWord.reverse().join("");
    if(myWord == wordReverse){
        console.log("è una parola palindroma");
    } else {
        console.log("non è una parola palindroma");
    }
}
reverseCheck();