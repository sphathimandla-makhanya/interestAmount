//declare varibales
let p = document.querySelector('[data-princ]')
let r = document.querySelector('[data-rate]')
let n = document.querySelector('[data-years]')
let answer = document.querySelector('[data-answer]')
let btn1= document.querySelector('[data-btn1]');
let btn2= document.querySelector('[data-btn2]');
//creating function
function calcInterest(p, r, n) {
    let sum = (parseFloat(p*r*n)/100)
    answer.value = parseFloat(sum.toFixed(2))
}

// Added event listners to activate buttons
btn1.addEventListener('click', function(){
    let p = document.querySelector('[data-princ]').value
    let r = document.querySelector('[data-rate]').value
    let n = document.querySelector('[data-years]').value
    calcInterest(p, r, n)
})
btn2.addEventListener('click', function(){
    answer.value = '';
    p.value = '' ;
    r.value = '';
    n.value='';
})