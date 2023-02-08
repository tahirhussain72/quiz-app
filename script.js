const questions = [{
    'que': "which of the following is markup language?",
    'a': 'html',
    'b': 'css',
    'c': 'javascript',
    'd': 'php',
    'correct': 'a',
},
{
    'que': "what year was javascript lunched?",
    'a': '1996',
    'b': '1995',
    'c': '1997',
    'd': 'none of the above',
    'correct': 'b',
},
{
    'que': "what does css stand for?",
    'a': 'Hypertext markup language',
    'b': 'Cascading style sheet',
    'c': 'Json object Notation',
    'd': 'all above is correct',
    'correct': 'b',
},
{
    'que': "PHP is used for?",
    'a': 'design',
    'b': 'backend',
    'c': 'data entry',
    'd': 'all above is correct',
    'correct': 'b',
},
]
let index = 0;
total = questions.length;
let right = 0,
    wrong = 0;

const quesBox = document.getElementById("quesBox");
const optioninput = document.querySelectorAll('.option');
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index + 1}) ${data.que}`
    optioninput[0].nextElementSibling.innerText = data.a;
    optioninput[1].nextElementSibling.innerText = data.b;
    optioninput[2].nextElementSibling.innerText = data.c;
    optioninput[3].nextElementSibling.innerText = data.d;

}
const submitQuiz = () => {
    const ans = getAnswer()
    const data = questions[index]
    if (ans === data.correct) {
        right++;
    } else {
        wrong++
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let answer
    optioninput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer
}


const reset = () => {
    optioninput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {

    document.getElementById("box").innerHTML = `
          <div style= "text-align:center">
            <h3> Thank you for playing the quiz </h3>
            <h2> ${right} / ${total} are correct</h2>
            
        </div>
    `
}
loadQuestion();

