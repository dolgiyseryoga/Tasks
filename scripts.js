function tasks(){

      let a = prompt('Введите число a', '');
      let b = prompt('Введите число b', '');

      function number(a,b){ 
      if((!isNaN(parseFloat(a)) && isFinite(a)) && (!isNaN(parseFloat(b)) && isFinite(b))){
      function min(a,b) {
        if (a > b)  { alert('Меньшее = '+ b);}
        if (a < b)  { alert('Меньшее = '+ a);}
        if (a == b) { alert('Числа '+a+' и '+b+' равны!');}
      }
      min(a,b);
      }
        else {
      alert('Это не числа!');
      }
      };
      number(a,b);
}

function tasks2(){

  let x = prompt('Введите число x', '');
let n = prompt('Введите число n', '');
function pow(x,n) {
  if((!isNaN(parseFloat(x)) && isFinite(x)) && (!isNaN(parseFloat(n)) && isFinite(n))){
    return Math.pow(x, n);
}
  else {
    alert('Это не числа!');
    exit();}
}
alert(pow(x, n));

}

function tasks3(){

  alert("Вы нажали на кнопку3");

}

