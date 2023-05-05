
const x=document.querySelector('#B');
const y=document.querySelector('#A');
function random(){
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
         x.innerHTML = result.content;
    });
}
y.addEventListener("click" , random);
  
