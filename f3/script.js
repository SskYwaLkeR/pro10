var naam  = document.querySelector('#naam');
var chanda = document.querySelector('#chanda');
var btn = document.querySelector('#btn');
var details = document.querySelector('#details');
var kheer = document.querySelector('#kheer');
var raayta = document.querySelector('#raayta');
var halwa = document.querySelector('#halwa');
var pakodi = document.querySelector('#pakodi');
var aloo = document.querySelector('#aloo');
var paneer = document.querySelector('#paneer');
var thaali = document.querySelector('#thaali');
var poodi = document.querySelector('#poodi');
var paisa = document.querySelector('#paisa');
var budget = document.querySelector('#budget');
var menu = document.querySelector('#menu');
var dinaankWalaDabba =document.querySelector('#dinaankWalaDabba');
var error = document.querySelector('#error');




var dates = new Date();

var currentDate = dates.getDate()+'/'+(dates.getMonth()+1)+'/'+dates.getFullYear();



dinaankWalaDabba.innerHTML = currentDate;


btn.addEventListener('click',function(){
    var naamVal = naam.value;
    var chandaVal = chanda.value;
    paisa.innerText = chandaVal;
    details.classList.add('hidden');
    menu.classList.remove('hidden');
    
});


function thaaliValue(){
    if(isNaN(Number(thaali.value))){
        error.innerText = 'nam dal bc';

    }
    else{
        error.innerText = '';
    }
}