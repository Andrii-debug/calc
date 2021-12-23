const submitBtn = document.querySelector('.btn')
const input1 = document.querySelector('.inp-num1')
const input2 = document.querySelector('.inp-num2')
const out = document.querySelector('.out-1')
const operation = document.querySelector('.operation')



submitBtn.addEventListener('click', () => {
    let res;
    let num1 = parseInt(input1.value)
    let num2 = parseInt(input2.value)

    let selecValue = operation.options[operation.selectedIndex].value;
    
    
    if (selecValue === '+') {
        res = Math.floor(num1 + num2)
        out.innerHTML = `Cумма вычисления: ${res}` 
    } 
    if (selecValue === '-') {
        res = Math.floor(num1 - num2)
        out.innerHTML = `Cумма вычисления: ${res}`
    }
    if (selecValue === '*') {
        res = Math.floor(num1 * num2)
        out.innerHTML = `Cумма вычисления: ${res}`
    }
    if (selecValue === '/') {
        res = Math.floor(num1 / num2)
        out.innerHTML = `Cумма вычисления: ${res}` 
    }
   
    
})