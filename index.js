import refs from "./js/refs.js";
 
const colors = [
   '#FFFFFF',
   '#2196F3',
   '#4CAF50',
   '#FF9800',
   '#009688',
   '#795548',
 ];

refs.startBtn.addEventListener('click', startBtnClick);
refs.stopBtn.addEventListener('click', stopBtnClick);

let timerId = null;

function startBtnClick() {
   refs.startBtn.disabled = true;
 
    timerId = setInterval(() => {
     document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
   }, 1000);
 };
 
 function stopBtnClick() {
   clearInterval(timerId);
   refs.startBtn.disabled = false;
 };

 const randomIntegerFromInterval = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
 };