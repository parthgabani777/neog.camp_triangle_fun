const a = document.querySelector('#a');
const b = document.querySelector('#b');
const calculate = document.querySelector('#calculate');
const result = document.querySelector('#result');

calculate.addEventListener('click',calculateHypotenuse);

function calculateHypotenuse(){
      let aValue = a.value;
      let bValue = b.value;

      let c = Math.sqrt(aValue*aValue+bValue*bValue);
      result.innerText = `The length is ${c}`;
}