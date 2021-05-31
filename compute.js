function forclear(){
    document.getElementById("result").innerHTML = "0";
}
function removeZero(){
    let value = document.getElementById("result").innerHTML;
    if(value == "0"){
        value = "";
        document.getElementById("result").innerHTML = value;
    }
}
function perc(){
    removeZero();
    var value = document.getElementById("result").innerHTML;
    value = value / 100;
    document.getElementById("result").innerHTML = value;
}
function fordisplay(display){
    removeZero();
    document.getElementById("result").innerHTML += display;
}



function solve(){
    removeZero();
    var equation = document.getElementById("result").innerHTML;
    let solved = eval(equation);
    document.getElementById("result").innerHTML = solved;
}
const output = document.getElementById("result").value;
console.log(output);





