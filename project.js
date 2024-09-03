const more = document.querySelector("#more");
const btn = document.querySelector("#myBtn");
const dot = document.querySelector("#dots");

btn.addEventListener("click",()=>{
    
    if(more.style.display === "none"){
        more.style.display = "block";
        dot.style.display  = "none";
        btn.innerHTML = "Read less";
    }else{
        more.style.display = "none";
        dot.style.display  = "block";
        btn.innerHTML = "Read more";
    }
});