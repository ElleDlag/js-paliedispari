var chosen;
function nRandom(){
    var nRand = Math.floor((Math.random()*5) + 1);
    return nRand
}
function oddEven() {
    chosen = prompt('scegli pari o dispari');
    var myNum = nRandom();
    return myNum
}
var pcNum = nRandom();
var usrNum = oddEven();
var deafultTxt = "User ha dichiarato " + chosen +". La somma tra: "+ pcNum + "+" + usrNum + " è uguale a " + (pcNum+usrNum)

if(!((pcNum + usrNum) % 2) && chosen == "pari"){
    console.log(deafultTxt + "\nVINCE USER" )
} else if (((pcNum + usrNum) % 2) > 0 && chosen == "dispari"){
    console.log(deafultTxt + "\nVINCE USER")
} else (console.log(deafultTxt + "\nVINCE PC"))
