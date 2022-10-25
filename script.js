var questionEl = document.querySelector("h1");
var introEl = document.querySelector("h2");
var answerA = document.querySelector(".a")
var answerB = document.querySelector(".b")
var answerC = document.querySelector(".c")
var answerD = document.querySelector(".d")
var startEl = document.querySelector(".button");
var timerEl = document.querySelector(".timer");
var highScoresEl = document.querySelector(".scores");
var correctDiv = document.querySelector("rightOrWrong");

var score = localStorage.getItem("score");
//Declaring the quizBank array that holds the objects that store the questions and answers, as well as the correct answer. Each object has 6 key:value pairs.
const quizBank =[
  {
    question: "What does DOM stand for?",
    a: "Digital Operating Manual",
    b: "Digital Object Modifier",
    c: "Document Object Model",
    d: "Display Object Modifier",
    asnwer: "c"
  },
  {
    question: "What does API stand for?",
    a: "Application Programming Interface",
    b: "Application Production Interface",
    c: "Artificial Programming Intelligence",
    d: "Application Proccessing Interface",
    asnwer: "a"
  },
  {
    question: "What can be stored in objects?",
    a: "Only variables",
    b: "Arrays and variables",
    c: "Arrays and objects only",
    d: "Arrays, objects, and variables",
    asnwer: "d"
  },
  {
    question: "What does the querySelectorAll() method do?",
    a: "Selects all querries in a dataset",
    b: "Selects a single element to be modified",
    c: "Returns all elements that match the specified selectors",
    d: "Returns the first child element that matches a specified CSS selector of an element",
    asnwer: "c"
  },
  {
    question: "What is the second paramter of the addEventListener() method?",
    a: "An object",
    b: "A function",
    c: "An array",
    d: "An event",
    asnwer: "b"
  },
  {
    question: "What kind of function is used by the addEventListener() method?",
    a: "A throwback function",
    b: "A latent function",
    c: "A listening function",
    d: "A callback function",
    asnwer: "d"
  },
  {
    question: "To apply an attribute to an html element in JavaScript, the following method is used: ",
    a: ".createAttribute",
    b: ".addAttribute",
    c: ".setAttribute",
    d: ".attributeSet",
    asnwer: "c"
  },
  {
    question: "What does event bubbling refer to?",
    a: "Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event",
    b: "Multiple functions being executed on an event",
    c: "Formatting of a webpage",
    d: "Event bubbling is a method of event propagation within CSS that allows animations to all occur at once",
    asnwer: "a"
  },
  {
    question: "What is local storage used for?",
    a: "To store data in the cloud",
    b: "To store data locally on the end-users machine",
    c: "To store key-value pairs in a web browser with no expiration date",
    d: "To store all data on a webpage in the users cache folder",
    asnwer: "c"
  },
  {
    question: "How do you link a JavaScript file to an HTML file?",
    a: "With a src attribute enclosed in <script> tags in the middle of the HTML markup",
    b: "With a src attribute enclosed in <script> tags at the bottom of the HTML markup",
    c: "Exactly like an external CSS style sheet",
    d: "In the head of the HTML with <script> tags enclosing an href attribute",
    asnwer: "b"
  },
]



//Hides the timer
timerEl.style.display = "none";
//Sets the display style property to none on the four answer elements, hides them until the startEl.addEventListener() method is called.
answerA.style.display = "none";
answerB.style.display = "none";
answerC.style.display = "none";
answerD.style.display = "none";

//Declaring a function that takes the value of what getRandomNumber returned and stores it into a local variable ranNum. 
//Then takes the text content of the questionEl and replaces it with the corresponding [ranNum] member of questionBank array.
//Then takes the text content of each list item and replaces it with the corresponding answerBank object key pair value.

function randomQuestion(){
  var rnd = Math.floor(Math.random()* quizBank.length);

questionEl.textContent = quizBank[rnd].question;
answerA.textContent = quizBank[rnd].a;
answerB.textContent = quizBank[rnd].b;
answerC.textContent = quizBank[rnd].c;
answerD.textContent = quizBank[rnd].d;
quizBank.splice(rnd,1);





if(quizBank.length ===0){
  questionEl.textContent = "Quiz Complete!";
  introEl.style.display = "initial";
  introEl.textContent = "Your score: "+ secondsLeft;
  timerEl.style.display = "none";
  answerA.style.display = "none";
  answerB.style.display = "none";
  answerC.style.display = "none";
  answerD.style.display = "none";
  highScoresEl.style.visibility = "initial";
}
 
};


//Delcaring a function to execute when the timer has reached 0. Hides displays of list items and shows a times up message and the users score.
function timesUp(){
    timerEl.textContent = "Times up!";
    questionEl.textContent = "You ran out of time!";
    answerA.style.display = "none";
    answerB.style.display = "none";
    answerC.style.display = "none";
    answerD.style.display = "none";
    introEl.style.display = "initial";
    introEl.textContent = "Your score: "+ secondsLeft;


};
var secondsLeft;
startEl.addEventListener("click", function (){
        //Sets the display state to none, hides the button element.
        startEl.style.display = "none";
        //Shows the timer once the 'start quiz' button is clicked by reverting back to its initial display state.
        timerEl.style.display = "initial";
        //Hides the h2 element, introEl, that showed a message to the user about the quiz.
        introEl.style.display = "none";
        //Hides "View Highscores" but keeps the element in place so that the timer element does not shift left after the quiz is started.
        highScoresEl.style.visibility="hidden";
        //Shows the list item answers once the quiz is started, setting display = initial shows the members of the array as they are stored, not as list items, hence display = list-item must be used to convert back to list format
        answerA.style.display = "list-item";
        answerB.style.display = "list-item";
        answerC.style.display = "list-item";
        answerD.style.display = "list-item";
        //Initializes a variable that holds the value of 60, the starting time on the timer.
        secondsLeft = 60;
        //Changes the text content of the timer element to 'Timer: (seconds left here)'.
        timerEl.textContent = "Timer: " + secondsLeft;
        //Initializes the timer interval of 1 second and counts down from the value of 60 stored in secondsLeft.
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timerEl.textContent = "Timer: " + secondsLeft;
          //If the value of secondsLeft reaches 0 then run the sendMessage() function, which replaces the text content of timerEl to "Times Up!".
          if(secondsLeft === 0) { 
            clearInterval(timerInterval);
            timesUp();
          }
          if(quizBank.length===0){
            clearInterval(timerInterval);
          }
        }, 1000);
        randomQuestion();
        
});
//Event handler that allows event bubbling only on the li elements, runs the randomQuestion() function when an li item is clicked.
document.body.addEventListener("click", function(event){
  
  if(event.target !== answerA && event.target !== answerB && event.target !== answerC && event.target !== answerD){
    return;
  };

// correctDiv.append(h3);
  randomQuestion();
});
highScoresEl.addEventListener("click", function(){
  questionEl.textContent = "High Scores:";
  introEl.textContent = "Placeholder";
});


// if (selectedAnswer!=){
  
// }