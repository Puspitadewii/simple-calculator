function forclear(){
    document.getElementById("result").innerHTML = "0";
}
function perc(){
    var value = document.getElementById("result").innerHTML;
    value = value / 100;
    document.getElementById("result").innerHTML = value;
}
function fordisplay(display){
    removeZero();
    document.getElementById("result").innerHTML += display;
}
function removeZero(){
    let value = document.getElementById("result").innerHTML;
    if(value == "0"){
        value = "";
        document.getElementById("result").innerHTML = value;
    }
}


function solve(){
    removeZero();
    var equation = document.querySelector("#result").innerHTML;
    let solved = eval(equation);
    document.querySelector("#result").innerHTML;
}


