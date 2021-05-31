// function forclear(){
//     document.getElementById("result").innerHTML = "0";
// }

// function perc(){
//     removeZero();
//     var value = document.getElementById("result").innerHTML;
//     value = value / 100;
//     document.getElementById("result").innerHTML = value;
// }
// function fordisplay(display){
//     removeZero();
//     document.getElementById("result").innerHTML += display;
// }

// function solve(){
//     removeZero();
//     var equation = document.getElementById("result").innerHTML;
//     let solved = eval(equation);
//     document.getElementById("result").innerHTML = solved;
// }
// const output = document.getElementById("result").value;







let result = document.getElementById("result");
let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map(button =>{
    button.addEventListener('click', (e) =>{
      switch(e.target.innerText){
            case 'AC':         
              result.innerText = "";
              break;
            case 'del':
                if(result.innerText){
                  result.innerText = result.innerText.slice(0 , -1);
                }
            break;
            case '=':
           try{
            result.innerText = eval(result.innerText);
           }catch{
            result.innerText = 'Error'
           }
            break;
              default: result.innerText += e.target.innerText;
      }
    });
});