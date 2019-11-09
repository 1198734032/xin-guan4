const arr1=[];

function leftput(){
    arr1.unshift(put.value);
    for(i=0;i<arr1.length;i++){
    document.getElementById("div2").innerHTML="";
    let div2=document.getElementById("div2");
    let div3=document.createElement("div");
    div3.style.width="60px";
    div3.style.height=arr1[i]+"px";
    div3.style.backgroundColor="pink";
    div3.innerHTML=arr1[i];
    div3.style.marginLeft="10px";
    div2.appendChild(div3);
    div2.style.flexDirection="row";
    console.log(arr1)
}
}
function rightput(){
arr1.push(put.value);
div2.style.flexDirection="row-reverse";
add();
console.log(arr1);
}