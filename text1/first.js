let nav=document.getElementsByClassName("nav")[0];
let item=document.getElementsByClassName("item");
let li1=document.createElement("li");
li1.innerHTML="首页";
nav.insertBefore(li1,item[0]);

let li2=document.createElement("li");
li2.innerHTML="关于";
nav.appendChild(li2);



item[2].innerHTML="文章";


nav.removeChild(item[2]);







