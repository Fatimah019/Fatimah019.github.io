//hire me or contact pop up on click
/*document.querySelector("#hire").onclick=()=>{
    console.log("show hire");
};
*/
//togle between nav button and nav list
let navList=document.querySelector("#nav-list");
let navBtn=document.querySelector("#nav-btn");

navBtn.onclick=()=>{
    if (navList.style.display==="block"){
        navList.style.display="none";
        navBtn.textContent="="
        //navBtn.textContent=`${<i class="fa fa-bars"></i>}`;
    }
    else{
        navList.style.display="block";
        navList.style.position="block";
        navBtn.textContent="X"
    }
}

let yearFooter=document.querySelector("#year");
getYearFooter=new Date();
yearFooter=getYearFooter.getFullYear();


