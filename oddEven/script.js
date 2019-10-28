var chosen;
var pcNum = nRandom();
var usrNum = oddEven();
var sumResult = pcNum + usrNum;
var defaultTxt = "User ha dichiarato " + chosen +". La somma tra: "+ pcNum + "+" + usrNum + " è uguale a " + sumResult;

//functions
function nRandom(){
    var nRand = Math.floor((Math.random()*5) + 1);
    return nRand
}
function oddEven() {
    chosen = prompt('scegli pari o dispari');
    var myNum = nRandom();
    return myNum
}

//execution
if(!(sumResult % 2) && chosen == "pari"){
    console.log(defaultTxt + "\nVINCE USER" );
} else if (sumResult % 2 > 0 && chosen == "dispari"){
    console.log(defaultTxt + "\nVINCE USER");
} else (
    console.log(defaultTxt + "\nVINCE PC")
)
