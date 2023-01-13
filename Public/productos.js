
const inputQuantity = document.querySelector ('.input-quantity')
const btnIncrement = document.querySelector ('#increment')
const btnDecrement = document.querySelector ('#decrement')

let valueByDeFault = parseInt (inputQuantity.value)

btnIncrement.addEventListener('click', () =>{
valueByDeFault += 1
inputQuantity.value = valueByDeFault
})

btnDecrement.addEventListener('click', () =>{
valueByDeFault = 1
inputQuantity.value = valueByDeFault
})

