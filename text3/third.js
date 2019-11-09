let get=document.getElementsByTagName("li");
let listArr = ['list1','list2','list3','list4','list5'];
for(let i=0;i<get.length;i++){
    get[i].addEventListener("click",function(){
        get[i].innerHTML=(listArr)[i];
    },false)
     
}