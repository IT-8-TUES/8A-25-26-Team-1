const info1=document.getElementById("info1");
const info2=document.getElementById("info2");
const info3=document.getElementById("info3");
const info4=document.getElementById("info4");

info1.style.display='none';
info2.style.display='none';
info3.style.display='none';
info4.style.display='none';


let s3=0, s=0, s2=0, s4=0;
function show(a){
    if(a===1) {s++;if(s%2)info1.style.display='block'; else info1.style.display='none';}
    else if(a===2) {s2++;if(s2%2)info2.style.display='block'; else info2.style.display='none';}
    else if(a===3) {s3++;if(s3%2)info3.style.display='block'; else info3.style.display='none';}
    else if(a===4) {s4++;if(s4%2)info4.style.display='block'; else info4.style.display='none';}
}
