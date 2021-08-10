 function number(num){
 let result = document.getElementById('input');
 result.value+=(num);
 }

 function result(){
     var result = document.getElementById('input');
    result.value=eval(result.value)    
 }
 function ClearResult(){
     var result = document.getElementById('input');
    result.value ="";
 }

 function deleteChar(){
    var number = document.getElementById('input');
    var remove = number.value;
    remove = remove.slice(0,-1);
    number.value = remove ;

 }


// let screen = document.getElementById('screen');
// buttons = document.querySelectorAll('button');
// let screenValue = '';
// for (item of buttons) {
//     item.addEventListener('click', (e) => {
//         buttonText = e.target.innerText;
//         console.log('Button text is ', buttonText);
//         if (buttonText == '*') {
//             buttonText = '*';
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//         else if (buttonText == 'C') {
//             screenValue = "";
//             screen.value = screenValue;
//         }
//         else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }

//     })
// }

