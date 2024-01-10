import {str, int, luck} from './index.js';

console.log(str);
var strText = document.querySelector(".str")
strText.innerHTML = "Strength: " + str;
var intText = document.querySelector(".int")
intText.innerHTML = "Intelligence: " + int;
var luckText = document.querySelector(".luck")
luckText.innerHTML = "Luck: " + luck;