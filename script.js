//***** Missing functionality: program does not calculate and store the users score. Nor can the quiz be retaken without refreshing the webpage.
//***** Still need to learn the proper thought-process behind where to start/ how to iterate in a cleaner, more efficient manner; my code is incredibly messy and I find myself jumping back and forth between functions and parts of the file to add in and take away lines of code.
//***** However, I am understanding very well the syntax and methodology behind the code.


//Declaring and assigning most elements to variables using querySelector.
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
//This was to be used later on to retrieve the user's score from local storage
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

//Function that is supposed to be used on startup, however I am using it to TRY to revert back to the original state of the webpage
function onStart(){
  //Hides the timer
timerEl.style.display = "none";
//Sets the display style property to none on the four answer elements, hides them until the startEl.addEventListener() method is called.
answerA.style.display = "none";
answerB.style.display = "none";
answerC.style.display = "none";
answerD.style.display = "none";
highScoresEl.style.visibility = "initial";
questionEl.textContent = "Welcome to the Javascript fundementals quiz.";
introEl.textContent = "To start the quiz click on the 'Start Quiz' button. You will have 60 seconds to complete 10 questions. Good luck!";
startEl.style.display = "initial";
goBackEl.style.display ="none";
};

//Hides the timer
timerEl.style.display = "none";
//Sets the display style property to none on the four answer elements, hides them until the startEl.addEventListener() method is called.
answerA.style.display = "none";
answerB.style.display = "none";
answerC.style.display = "none";
answerD.style.display = "none";

//Declaring a function that takes the value of what the Math.random() method returns and stores it into a local variable rnd. 
//Then takes the text content of the questionEl and replaces it with the corresponding [rnd] member of questionBank array.
//Then takes the text content of each list item and replaces it with the corresponding answerBank object key pair value.
// I also had to include a splice() method on quizbank in order to keep the random selection from repeating, this causes big problem later on, as the array is now indexless when the user tries to re-run the quiz.
function randomQuestion(){
  var rnd = Math.floor(Math.random()* quizBank.length);

questionEl.textContent = quizBank[rnd].question;
answerA.textContent = quizBank[rnd].a;
answerB.textContent = quizBank[rnd].b;
answerC.textContent = quizBank[rnd].c;
answerD.textContent = quizBank[rnd].d;
quizBank.splice(rnd,1);
//If statement that says if the length of the quizBank array is equal in type and in value to 0, then run the proceeding code.
//Hides most of the elements, and replaces the question element text with "Quiz complete", and shows the users score.
if(quizBank.length ===0){
  questionEl.textContent = "Quiz Complete!";
  introEl.style.display = "initial";
  introEl.textContent = "Your score: "+ secondsLeft;
  timerEl.style.display = "none";
  answerA.style.display = "none";
  answerB.style.display = "none";
  answerC.style.display = "none";
  answerD.style.display = "none";
};
 
};


//Delcaring a function to execute when the timer has reached 0. Hides displays of list items and shows a times up message and the users score.
function timesUp(){
    timerEl.textContent = "Times up!";
    questionEl.textContent = "You ran out of time!";
    answerA.style.display = "none";
    answerB.style.display = "none";
    answerC.style.display = "none";
    answerD.style.display = "none";
    introEl.style.visibility = "initial";
    introEl.textContent = "Your score: "+ secondsLeft;


};
//Declaring variable that stores the div element with class "goBack" using querySelector() method.
var goBackEl = document.querySelector(".goBack");
  //Creating a new button element and storing it into a variable called goBackButton. To be used later for modifying the text content of that button element.
  var goBackButton = document.createElement("button");
//Declaring a function to add a go back button at the end of the quiz and or when the timer runs out.
function createGoBack(){
  //sets the text content of the button
  goBackButton.textContent = "Go Back";
  //sets the id attribute of the button to 'goBack'
  goBackButton.setAttribute("id", "goBack");
  //appends the goBackButton to the element captured in goBackEl
  goBackEl.append(goBackButton);
  //reverts the display of the goBackEl to it's initial state (not hidden)
  goBackEl.style.display ="initial";
};


//Variable to store seconds in the timer and compute score.
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
            //If the time runs out, the interval is stopped and the timesUp() function is called as well as the createGoBack() function.
            clearInterval(timerInterval);
            timesUp();
            createGoBack(); 
          }
          if(quizBank.length===0){
            //" " excluding timesUp() function.
            clearInterval(timerInterval);
            createGoBack();
          }
        }, 1000);
        //Runs the randomQuestion() function once the start quiz button is clicked.
        randomQuestion();
        
});
//Event handler that allows event bubbling only on the li elements, runs the randomQuestion() function when an li item is clicked.
document.body.addEventListener("click", function(event){
  //Used this if condition to exclude anything else but the answer elements as the event trigger.
  if(event.target !== answerA && event.target !== answerB && event.target !== answerC && event.target !== answerD){
    return;
  };
  //Runs the randomQuestion() function whenever any answer is clicked.
  randomQuestion();
});
//Event listener for the high scores element, displays high scores, and creates a Go Back button.
highScoresEl.addEventListener("click", function(){
  questionEl.textContent = "High Scores:";
  introEl.textContent = "Placeholder";
  highScoresEl.style.display = "none";
  createGoBack();
});
//Event listener for the Go Back button, runs the onStart() function when clicked.
document.body.addEventListener('click',function(e){
  if(e.target && e.target.id== 'goBack'){
    //Calls the onStart() function to TRY and revert webpage back to original state.
    onStart();
   }
});