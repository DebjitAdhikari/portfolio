const mainMenu=document.querySelector(".fa-bars");
const close=document.querySelector(".fa-xmark");
let dropMenu=document.querySelector(".dropmenu");
let overlay=document.querySelector(".overlay");
let isShown=false;

function showModal(){
    dropMenu.style.display="block";
    overlay.classList.remove("hidden");
}
function closeModal(){
    overlay.classList.add("hidden");
    dropMenu.style.display="none";
}
mainMenu.addEventListener("click",function(){
   showModal();
});
close.addEventListener("click",function(){
    closeModal();
})
dropMenu.addEventListener("click",function(e){
    if(e.target.classList.contains("navbtn")){
        closeModal();
    }
})