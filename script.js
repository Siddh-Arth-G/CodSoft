var screen=document.querySelector('#screen');
var screen1=document.querySelector('#screen2');
var btn=document.querySelectorAll('.btn');
var btn1=document.querySelectorAll('.btn1');
    
for(item of btn){
    item.addEventListener('click',(e)=>{
    btntext=e.target.innerText;
    if(btntext=='x')
    {
        btntext='*';
    }
    if(btntext=='÷')
    {
        btntext='/';
    }
    screen.value+=btntext;
    });
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function rev(){
    var x,n;
    n = screen.value;
    x = 1/n;
    screen.value = x;
}

// 2nd

for(item of btn1){
    item.addEventListener('click',(e)=>{
    btn1text=e.target.innerText;
    // if(btn1text=='x')
    // {
    //     btn1text='*';
    // }
    // if(btn1text=='÷')
    // {
    //     btn1text='/';
    // }
    screen1.value+=btn1text;
    });
}
function sin1() {
    screen1.value = Math.sin(screen1.value * Math.PI / 180);
}
function asin1() {
    screen1.value = Math.asin(screen1.value * (180 / Math.PI));
}
function cos1() {
    screen1.value = Math.cos(screen1.value * Math.PI / 180);
}
function acos1() {
    screen1.value = Math.acos(screen1.value * (180 / Math.PI));
}
function tan1() {
    screen1.value = Math.tan(screen1.value * Math.PI / 180);
}
function atan1() {
    screen1.value = Math.atan(screen1.value * (180 / Math.PI));
}
function pow1() {
    screen1.value = Math.pow(screen1.value, 2);
}
function sqrt1() {
    screen1.value = Math.sqrt(screen1.value, 2);
}
function cube1() {
    screen1.value = Math.pow(screen1.value, 3);
}
function cbrt1() {
    screen1.value = Math.cbrt(screen1.value, 3);
}
function log1() {
    screen1.value = Math.log10(screen1.value);
}
function percent1(){
    screen1.value = (screen1.value / 180)
}
function fact1() {
    var i, num, f;
    f = 1;
    num = screen1.value;
    for(i = 1; i <= num; i++){
        f = f * i;
    }
    i = i-1;
    screen1.value = f;
}
function backspc1() {
    screen1.value = screen1.value.substr(0, screen1.value.length - 1);
}

function e() {
    screen1.value = 2.71828182846;
}

function pi(){
    screen1.value = 3.14159265359;
}