let inputFObj = document.getElementById("inputF")
let inputCObj = document.getElementById("inputC")

let fValue = inputFObj.value
fValue = parseInt(fValue)

let c = (fValue - 32) * 5/9
inputCObj.value = c

console.log(c)