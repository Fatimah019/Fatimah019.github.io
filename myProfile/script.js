//hire me or contact pop up on click
document.querySelector("#hire").onclick=()=>{
    console.log("show hire");
};

//togle between nav button and nav list
let navList=document.querySelector("#nav-list");
let navBtn=document.querySelector("#nav-btn");
showNavBtn=()=>{
    if ((window.innerWidth<800) || (navList.style.display==="block")){
            navList.style.display="none";
            navBtn.style.display="inline-block";
    }
    else{
        navList.style.display="block";
        navBtn.style.display="none";
    }
}
showNavBtn();



