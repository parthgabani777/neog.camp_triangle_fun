const base = document.querySelector('#base');
const height = document.querySelector('#height') ;
const calculate = document.querySelector('#calculate');
const result = document.querySelector('#result');

calculate.addEventListener('click',calculateArea);

function calculateArea(){
      let baseValue = base.value;
      let heightValue = height.value;

      let area = (baseValue * heightValue)/2;

      result.innerText = `The Area of Triangle is ${area} cm²`;
}