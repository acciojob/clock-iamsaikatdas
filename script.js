//your JS code here. If required.
let timer = document.getElementById('timer');
let newDate =new Date();
let date = new Date().toLocaleString();

let fullDate = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}, `
// let year = newDate.getFullYear()
timer.innerText = date