let inputFObj = document.getElementById("inputF")
let inputCObj = document.getElementById("inputC")

let fValue = inputFObj.value
fValue = parseInt(fValue)

let c = (fValue - 32) * 5/9
inputCObj.value = c

console.log(c)

let inputFLObj = document.getElementById("feels")
if (c >= 30) {
    inputFLObj.value = "Wow! that is hot!"
} else {
    inputFLObj.value = "Yay, it feels nice!"
}
