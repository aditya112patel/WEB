var score=0;
var id = 0;
const Questions = [{
    id: 0,
    q: "What is capital of India?",
    a: [{ text: "gandhinagar", isCorrect: 0 },
        { text: "Surat", isCorrect: 0 },
        { text: "Delhi", isCorrect: 1 },
        { text: "mumbai", isCorrect: 0 }
    ]

},
{
    id: 1,
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: 0},
        { text: "phuket", isCorrect: 0 },
        { text: "Ayutthaya", isCorrect: 0 },
        { text: "Bangkok", isCorrect: 1 }
    ]

},
{
    id: 2,
    q: "What is the capital of Gujarat",
    a: [{ text: "surat", isCorrect: 0 },
        { text: "vadodara", isCorrect: 0 },
        { text: "gandhinagar", isCorrect: 1 },
        { text: "rajkot", isCorrect: 0 }
    ]

}

]

// Set start
var start = true;
if (start) {
iterate("0");
}

function next(selected){
    start = false;
   
    if (id < 3) {
         if(selected==1) {
            score++;
        }
        id++;
        iterate(id);
    }
    else{
        document.getElementById('main').innerHTML="<div><h3>YOUR SCORE IS</h3></div>"+score;
    }
  
};
function iterate(id) {

const result = document.getElementsByClassName("result").innerHTML;


const question = document.getElementById("question");


question.innerText = Questions[id].q;

const op1 = document.getElementById('answer1');
const op2 = document.getElementById('answer2');
const op3 = document.getElementById('answer3');
const op4 = document.getElementById('answer4');

op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = 0;

op1.addEventListener("click", () => {
    selected = op1.value;
    next(selected);
})

op2.addEventListener("click", () => {
    selected = op2.value;
    next(selected);
})

op3.addEventListener("click", () => {
    selected = op3.value;
    next(selected);
})

op4.addEventListener("click", () => {
    selected = op4.value;
    next(selected);
})

}







