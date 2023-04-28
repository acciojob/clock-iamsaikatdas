//your JS code here. If required.
let timer = document.getElementById('timer');
let newDate =new Date();

let fullDate = `${newDate.getFullYear} / ${newDate.getMonth(),} / ${newDate.getDate().}`

timer.innerText = fullDate