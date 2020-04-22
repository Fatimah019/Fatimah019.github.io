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
    "images/techterms.png",
    "images/calculator.png",
    "images/todo.png"
];

let siteLinks=[
    "https://fatimahdavies.netlify.com/myrealportfolio.html",
    "https://fatimahdavieswebdeveloper.netlify.com/technologyterms.html",
    "https://fatimahdavies.netlify.com/calculator/calculator.html",
    "https://fatimahdavies.netlify.com/TodoList/todolist.html"
]

let showWorks=document.querySelector("#works");
let index=0;
const showRandomImages=()=>{
    showWorks.style.backgroundImage=`url(${arrayOfImages[index]})`;
    index++;
    if (index==arrayOfImages.length){
        index=0;
    } 
}

setInterval(showRandomImages, 3000);

let  viewSites=document.querySelector("#view-site-btn");
let  prev=document.querySelector("#left");
let  next=document.querySelector("#right");
let siteIndex=0;
const showLinkToSite=()=>{
    siteIndex++;
    if(siteIndex==siteLinks.length){
        siteIndex=0;
    }
}

const showPrev=()=>{
    siteIndex--;
    if(siteIndex==siteLinks.length){
        siteIndex=0;
    }
}
const showSites=()=>{
    location.href=siteLinks[siteIndex];
}



let yearFooter=document.querySelector("#year");
getYearFooter=new Date();
yearFooter=getYearFooter.getFullYear();


