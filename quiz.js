const quiz = document.querySelector('#quiz');
const btn = document.querySelector('#submit');
const result = document.querySelector('#result');

const correctAnswer = ['90','right_angled'];

btn.addEventListener('click',calculateScore);

function calculateScore(e){
      e.preventDefault();
      const data = new FormData(quiz);
      let index=0,score=0;

      for(let answer of data.values()){
            if(answer === correctAnswer[index]){
                  score++;
            }
            index++;
            console.log(answer);
      }
     
      result.innerText = `Your answer is ${score}`;
}