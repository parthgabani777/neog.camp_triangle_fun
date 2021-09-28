const angle1 = document.querySelector('#angle1');
const angle2 = document.querySelector('#angle2');
const angle3 = document.querySelector('#angle3');

const checkBtn = document.querySelector('#check');
const result = document.querySelector('#result');

checkBtn.addEventListener('click',isTriangle);

function isTriangle(){
      if(calculateSumOfAngles() != 180){
            result.innerText = "Angles does not form a triangle";
      }
      else{
            result.innerText = "Angles form a triangle";
      }
}

function calculateSumOfAngles(){
      return sum = Number(angle1.value) + Number(angle2.value) + Number(angle3.value); 
}