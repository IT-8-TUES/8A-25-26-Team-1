const info1=document.getElementById("info1");
const info2=document.getElementById("info2");
const info3=document.getElementById("info3");

info1.style.display='none';
let s=0;
function showr(a){
    if(a===1) info1.style.display='block';

}
function hider(a){
    if(a===1) info1.style.display='none';
}
function show(a){
    s++;
    if(s%2===1) showr(a);
    else hider(a);
}