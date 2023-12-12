const counter1 = document.getElementById("counter1");
const counter2 = document.getElementById("counter2");
const counter3 = document.getElementById("counter3");

let c1 = 0;
let c2 = 0;

let c1s = setInterval(() => {
    counter1.innerHTML = ++c1;
    if(c1==20) clearInterval(c1s);
}, 1000);

for(let i=1; i<=20; i++){
    setTimeout(() => {
        counter2.innerHTML = ++c2;
    }, 1000*i)
}