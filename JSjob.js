const headings2 = ["How do I reset my password",
"Can I cancel my subscription",
"Do you provide additional support"];

const answers = ["Click \“Forgot password\” from the login page or \“Change password\” from your profile page. A reset link will be emailed to you",
"Yes! Send us a message and we’ll process your request no questions asked",
"Chat and email support is available 24/7. Phone lines are open during normal business hours"];

const DDIR = "faq-accordion-card-main";
var myHref = location.href;
var myDir = myHref.slice(0, myHref.lastIndexOf(DDIR));
var questionOneList = document.getElementsByClassName("one-question");
var question = questionOneList[0];
var queOpen = questionOneList[1];
var h2s = document.querySelectorAll("h2");
var answer = questionOneList[1].querySelectorAll("p")[0];
var questions = document.getElementsByClassName("questions")[0];
var justQ = questions.querySelector("#pitanja");
var figure = document.getElementsByTagName("figure")[0];    
var html = document.getElementsByTagName("html")[0];
var desktPitanja = document.querySelectorAll(".desktPitanja")[0];


function togle(oneQElem) {

    oneQElem.classList.toggle("closed");
    oneQElem.classList.toggle("opened");      

}   

function makeH2Node(i) {

    var h2 = document.createElement("h2");
    h2.innerHTML = headings2[i] + "?";
    return h2;

}

function makePNode(i) {

    var p = document.createElement("p");
    p.innerHTML = answers[i] + ".";
    return p;

}

function extractPxValue(pxValue) {

    return pxValue.substring(0, pxValue.length - 2);

}

function myMargin(smaller, bigger) {

    return (extractPxValue(window.getComputedStyle(bigger).getPropertyValue("width")) 
    - extractPxValue(window.getComputedStyle(smaller).getPropertyValue("width"))) / 2;

}


function whichTestFile() {

    var testFileDiff = "";
    
    if (innerWidth >= 1000) {

        testFileDiff = "Desktop";
    
    }
    
    return "spec/JSTestAcc" + testFileDiff + ".js";    

}


var node;

window.resizeTo(1480, 1000);

for(var i = 0; i < 3; i++) {

    node = document.createElement("section");

    node.appendChild(makeH2Node(i));  
    node.appendChild(document.createElement("button"));
    node.appendChild(makePNode(i));
    node.setAttribute("class", "one-question closed");  
    node.setAttribute("onclick", "togle(this)");
    justQ.appendChild(node);

}


