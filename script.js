let scroll_container=document.querySelector(".movies");
let prev_btn=document.querySelector(".prev-btn");
let next_btn=document.querySelector(".next-btn");

scroll_container.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scroll_container.scrollLeft+=evt.deltaY;
    scroll_container.style.scrollBehavior='smooth';
});
prev_btn.addEventListener("click",()=>{
    
    scroll_container.scrollLeft-=800;
    scroll_container.style.scrollBehavior='smooth';
})
next_btn.addEventListener("click",()=>{
    
    scroll_container.scrollLeft+=800;
    scroll_container.style.scrollBehaviour='smooth';
})


// FAQ process
const questions=document.querySelectorAll(".question");
for(let i=0;i<questions.length;i++){
    questions[i].addEventListener("click",()=>{

        for(let j=0;j<questions.length;j++){
            if(i!=j){
        let plus=questions[j].children;
        plus[0].className="non-active";
        let answer=questions[j].nextElementSibling;
            answer.style.display="none";
            }
        }

        let plus=questions[i].children;
        plus[0].classList.toggle("active");
        let answer=questions[i].nextElementSibling;

        if(answer.style.display==="block"){
            answer.style.display="none";
        }
        else{
            answer.style.display="block";
        }
    })
}