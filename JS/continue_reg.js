


//Chevron icons in HOME//
document.getElementById("addCar").addEventListener("click", function(){
    document.getElementById("home").style.display="none";
    document.getElementById("first").style.display="block";
    document.getElementById("second").style.display="none";
    document.getElementById("third").style.display="none";
    
});
document.getElementById("uploadCar").addEventListener("click", function(){
    document.getElementById("home").style.display="none";
    document.getElementById("first").style.display="none";
    document.getElementById("second").style.display="block";
    document.getElementById("third").style.display="none";
});
document.getElementById("parkOwner").addEventListener("click", function(){
    document.getElementById("home").style.display="none";
    document.getElementById("first").style.display="none";
    document.getElementById("second").style.display="none";
    document.getElementById("third").style.display="block";
});

//back arrow
document.getElementById("first1").addEventListener("click", function(){
    document.getElementById("home").style.display="block";
    document.getElementById("first").style.display="none";
});
document.getElementById("second1").addEventListener("click", function(){
    document.getElementById("first").style.display="block";
    document.getElementById("second").style.display="none";
});
document.getElementById("third1").addEventListener("click", function(){
    document.getElementById("second").style.display="block";
    document.getElementById("third").style.display="none";
});


function moveForward(){
    document.getElementById("home").style.display="block";
    document.getElementById("first").style.display="none";
    document.getElementById("addCar").classList.remove('fa-chevron-right');
    document.getElementById("addCar").classList.add('fa-check');
}
function moveForward2(){
    document.getElementById("home").style.display="block";
    document.getElementById("second").style.display="none";
    document.getElementById("uplaodCar").classList.remove('fa-chevron-right');
    document.getElementById("uplaodCar").classList.add('fa-check');
}
function moveForward3(){
    document.getElementById("home").style.display="block";
    document.getElementById("third").style.display="none";
    document.getElementById("parkOwner").classList.remove('fa-chevron-right');
    document.getElementById("parkOwner").classList.add('fa-check');
}