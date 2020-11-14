//used ids
let quotesContainer = document.getElementById("quotes-container");
let getStartedPage = document.getElementById("get-started-page");
let showbeforetopics = document.getElementById("show-case");
let aiBtn = document.getElementById("ai-btn");
let webBtn = document.getElementById("web-btn");
let networkBtn = document.getElementById("network-btn");
let aiContainer = document.getElementById("ai-terms-container");
let webContainer = document.getElementById("web-terms-container");
let networkContainer = document.getElementById("network-terms-container");

//dipslay education purpose random quotes
let quoteContainer = document.getElementById("quotes");
let myquotes = [
  " Science and technology revolutionize our lives, but memory, tradition and myth frame our response.",
  "The art challenges the technology, and the technology inspires the art",
  "If we continue to develop our technology without wisdom or prudence, our servant may prove to be our executioner.",
  "The real danger is not that computers will begin to think like men, but that men will begin to think like computers",
  "This is the whole point of technology.  It creates an appetite for immortality on the one hand.  It threatens universal extinction on the other. Technology is lust removed from nature",
  "Technology made large populations possible; large populations now make technology indispensable."
];

const displayQuotes = () => {
  let randomquotes = Math.floor(Math.random() * myquotes.length);
  quoteContainer.innerHTML = myquotes[randomquotes];
};
setInterval(displayQuotes, 5000);

//display get started page
const displayGetStartedPage = () => {
  getStartedPage.style.display = "block";
  quotesContainer.style.display = "none";
  // aboutPage.style.display="none";
};
let getStartedBtn = document
  .getElementById("getstarted")
  .addEventListener("click", displayGetStartedPage);

const showAiTopic = () => {
  showbeforetopics.style.display = "none";
  aiContainer.style.display = "block";
  webContainer.style.display = "none";
  networkContainer.style.display = "none";
  aiBtn.style.backgroundColor = "#a3bcb6";
  aiBtn.style.color = "#ffffff";
  webBtn.style.backgroundColor = "transparent";
  webBtn.style.color = "##3c403d";
  networkBtn.style.backgroundColor = "transparent";
  networkBtn.style.color = "##3c403d";
};

aiBtn.addEventListener("click", showAiTopic);
//call the words in jason data ai words
jsondataAi.forEach(items => {
  const divquestion = document.createElement("div");
  divquestion.setAttribute("class", "divquestion");
  const jsondatadisplay = document.getElementById("display-json-ai");
  jsondatadisplay.appendChild(divquestion);
  const listquestions = document.createElement("h3");
  listquestions.setAttribute("class", "listquestions");
  listquestions.textContent = items.name;
  listquestions.addEventListener("click", showanswers);
  const answers = document.createElement("p");
  answers.textContent = items.meaning;
  answers.setAttribute("class", "answers");
  answers.style.display = "none";
  answers.setAttribute("class", "answers");
  function showanswers() {
    if (answers.style.display === "block") {
      answers.style.display = "none";
    } else {
      answers.style.display = "block";
    }
  }
  divquestion.appendChild(listquestions);
  listquestions.appendChild(answers);
});

//show web topics
const showWebTopic = () => {
  showbeforetopics.style.display = "none";
  webContainer.style.display = "block";
  aiContainer.style.display = "none";
  networkContainer.style.display = "none";
  webBtn.style.backgroundColor = "#a3bcb6";
  webBtn.style.color = "#ffffff";
  networkBtn.style.backgroundColor = "transparent";
  networkBtn.style.color = "##3c403d";
  aiBtn.style.backgroundColor = "transparent";
  aiBtn.style.color = "##3c403d";
};
webBtn.addEventListener("click", showWebTopic);

//call the words in jason data web words
jsondataweb.forEach(itemsweb => {
  const divquestion = document.createElement("div");
  divquestion.setAttribute("class", "divquestion");
  const jsondatadisplay = document.getElementById("display-json-web");
  jsondatadisplay.appendChild(divquestion);
  const listquestions = document.createElement("h3");
  listquestions.setAttribute("class", "listquestions");
  listquestions.textContent = itemsweb.name;
  listquestions.addEventListener("click", showanswersweb);
  const answers = document.createElement("p");
  answers.textContent = itemsweb.meaning;
  answers.setAttribute("class", "answers");
  answers.style.display = "none";
  answers.setAttribute("class", "answers");
  function showanswersweb() {
    if (answers.style.display === "block") {
      answers.style.display = "none";
    } else {
      answers.style.display = "block";
    }
  }
  divquestion.appendChild(listquestions);
  listquestions.appendChild(answers);
  /*const spandropdown=document.createElement('span');
             const buttondropdown=document.createElement('button');
             buttondropdown.setAttribute('class', 'buttondropdown')
             buttondropdown.textContent="dropdown";
         
             spandropdown.appendChild(buttondropdown);*/
});

//call the words in jason data networking words
jsondatanetwork.forEach(itemsnet => {
  const divquestion = document.createElement("div");
  divquestion.setAttribute("class", "divquestion");
  const jsondatadisplay = document.getElementById("display-json-network");
  jsondatadisplay.appendChild(divquestion);
  const listquestions = document.createElement("h3");
  listquestions.setAttribute("class", "listquestions");
  listquestions.textContent = itemsnet.name;
  listquestions.addEventListener("click", showanswersnetwork);
  const answers = document.createElement("p");
  answers.textContent = itemsnet.meaning;
  answers.setAttribute("class", "answers");
  answers.style.display = "none";
  function showanswersnetwork() {
    if (answers.style.display === "block") {
      answers.style.display = "none";
    } else {
      answers.style.display = "block";
    }
  }
  divquestion.appendChild(listquestions);
  listquestions.appendChild(answers);
  /*const spandropdown=document.createElement('span');
             const buttondropdown=document.createElement('button');
             buttondropdown.setAttribute('class', 'buttondropdown')
             buttondropdown.textContent="dropdown";
         
             spandropdown.appendChild(buttondropdown);*/
});

//show network topics
const showNetworkTopic = () => {
  showbeforetopics.style.display = "none";
  networkContainer.style.display = "block";
  webContainer.style.display = "none";
  aiContainer.style.display = "none";
  networkBtn.style.backgroundColor = "#a3bcb6";
  networkBtn.style.color = "#ffffff";
  webBtn.style.backgroundColor = "transparent";
  webBtn.style.color = "##3c403d";
  aiBtn.style.backgroundColor = "transparent";
  aiBtn.style.color = "#3c403d";
};
networkBtn.addEventListener("click", showNetworkTopic);

/* let quest1=document.getElementById("quest-0");
let quest2=document.getElementById("quest-1");
let quest3=document.getElementById("quest-2");
let quest4=document.getElementById("quest-3");
let quest5=document.getElementById("quest-4");*/
//initialize all ids
// let homeLink=document.getElementById("home-link");
// let aboutPage=document.getElementById("about-page");
// let faqContainer=document.getElementById("faq-container");
// let faqBtn=document.getElementById("faq-btn");

//call the news api
//    const app = document.getElementById('display-api');
//    const theContainer=document.createElement('div');
//    theContainer.setAttribute('class', 'container');
//    app.appendChild(theContainer);
//     var request=new XMLHttpRequest();
//                request.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5aee483e492d4eaa9fa09699647bf49d', true);
//                request.onload=function(){
//                    var data=JSON.parse(this.response)
//                    data.articles.forEach(item=>{
//                         //display in a container
//     const cardList=document.createElement('div');
//    cardList.setAttribute('class', 'card');

//    const headTitle=document.createElement("h2");
//    headTitle.setAttribute('class', 'headtitle');
//    headTitle.textContent=item.title;

//    const para=document.createElement('p');
//    para.setAttribute('class', 'para');
//    para.textContent=item.description;

//    const viewmorelink=document.createElement('a');
//    viewmorelink.setAttribute('href', item.url);
//    viewmorelink.textContent="viewmore";
//    viewmorelink.style.color="#ffffff";
//    viewmorelink.style.textDecoration="none";

//    theContainer.appendChild(cardList);
//    cardList.appendChild(headTitle);
//    cardList.appendChild(para);
//    cardList.appendChild(viewmorelink);

//          });

//                }
//                request.send();

// for (let items of jsondataAi){
//     const divquestion = document.createElement("div");
//           divquestion.setAttribute('class', 'divquestion');
//     const jsondatadisplay=document.getElementById("display-json-ai");
//           jsondatadisplay.appendChild(divquestion);
//     const listquestions=document.createElement("h3");
//           listquestions.setAttribute('class', 'listquestions');
//           listquestions.textContent=items.name;
//           listquestions.addEventListener('click', showanswers);
//     const answers=document.createElement('p');
//           answers.textContent=items.meaning;
//           answers.setAttribute('class', 'answers');
//           answers.style.display="none";
//           answers.setAttribute('class', 'answers');
//     function showanswers(){
//         if (answers.style.display==="block"){
//             answers.style.display="none";
//         }
//         else{
//             answers.style.display="block";
//         }
//     }
//     divquestion.appendChild(listquestions);
//     listquestions.appendChild(answers);
//                /*const spandropdown=document.createElement('span');
//                const buttondropdown=document.createElement('button');
//                buttondropdown.setAttribute('class', 'buttondropdown')
//                buttondropdown.textContent="dropdown";

//                spandropdown.appendChild(buttondropdown);*/

// }

//call the words in jason data frequently askd questions

//    for (var itemsfaq of jsondatafaq){
//       const faqquestions=document.createElement("div");
//       faqquestions.setAttribute('class', 'faq-sects');
//       const jsondatadisplay=document.getElementById("questions-stack");
//        jsondatadisplay.appendChild(faqquestions);
//       const listquestions=document.createElement("h3");
//       listquestions.setAttribute('class', 'listquestionsfaq');
//       listquestions.textContent=itemsfaq.question;
//       listquestions.addEventListener('click', showanswersfaq);
//       const answers=document.createElement('p');
//       answers.textContent=itemsfaq.answer;
//       answers.style.display="none";
//       answers.setAttribute('class', 'faqanswers')
//       function showanswersfaq(){
//            if (answers.style.display==="block"){
//                answers.style.display="none";
//            }
//            else{
//                answers.style.display="block";
//            }
//       }
//        /*const spandropdown=document.createElement('span');
//        const buttondropdown=document.createElement('button');
//        buttondropdown.setAttribute('class', 'buttondropdown')
//        buttondropdown.textContent="dropdown";

//        spandropdown.appendChild(buttondropdown);*/
//       faqquestions.appendChild(listquestions);
//       listquestions.appendChild(answers);

//    }

//display about page
//    const displayAbout=()=>{
//        if(aboutPage.style.display==="none"){
//            faqContainer.style.display="none";
//        quotesContainer.style.display="none";
//        faqBtn.style.display="block";
//        getStartedPage.style.display="none";
//        aboutPage.style.display="block";
//        }
//      else{
//        quotesContainer.style.display="block";
//        aboutPage.style.display="none";
//      }
//    }
//    let aboutLink=document.getElementById("about-link").addEventListener("click", displayAbout);

//display main page to get started
//display faq container

//    const displayFaq=()=>{
//        if(faqContainer.style.display="block"){
//            quotesContainer.style.display="none";
//        faqBtn.style.display="none";
//        aboutPage.style.display="none";
//        getStartedPage.style.display="none";
//        }
//       else{
//           quotesContainer.style.display="block";
//       }
//        if ((aboutLink.onclick===true) || (homeLink.onclick===true)){
//            faqContainer.style.display="none";
//        }
//    }
//    let faq=document.getElementById("faq-btn").addEventListener("click", displayFaq);

//show ai topics

//close faq button
//   const closeFaq=()=>{
//       faqContainer.style.display="none";
//       quotesContainer.style.display="block";
//       faqBtn.style.display="block";

//   }

//   let closefaqBtn=document.getElementById("close-faq").addEventListener("click", closeFaq);
