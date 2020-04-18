let navList=document.querySelector("#nav-list");
let navBtn=document.querySelector("#nav-btn");

navBtn.onclick=()=>{
    if (navList.style.display==="block"){
        navList.style.display="none";
        navBtn.textContent="="
    }
    else{
        navList.style.display="block";
        navList.style.position="block";
        navBtn.textContent="X"
    }
}

let arrayOfImages=[
    "images/fatimah.jpg",
    "images/computer.jpg"
];

let showWorks=document.getElementById("works");
const showRandomImages=()=>{
    for (let i=0; i<arrayOfImages.length; i++){
        if (i=1){
            showWorks.style.backgroundImage="url("+ arrayOfImages[i++] +")";
        }
        else{
            i+=1;
        }
    }
    
}

setInterval(showRandomImages, 3000);



let yearFooter=document.querySelector("#year");
getYearFooter=new Date();
yearFooter=getYearFooter.getFullYear();


