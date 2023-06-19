import { Calculator } from "./calculator"
export function setupButtons() {
  document.getElementById('add').addEventListener('click',function(){
    const x = document.getElementById('x').value
    const y = document.getElementById('y').value
    const result = Calculator.add(x,y);
    document.getElementById('result').value = result
  })

  document.getElementById('sub').addEventListener('click',function(){
    const x = document.getElementById('x').value
    const y = document.getElementById('y').value
    const result = Calculator.subtract(x,y);
    document.getElementById('result').value = result
  })

  document.getElementById('mul').addEventListener('click',function(){
    const x = document.getElementById('x').value
    const y = document.getElementById('y').value
    const result = Calculator.multiply(x,y);
    document.getElementById('result').value = result
  })

  document.getElementById('div').addEventListener('click',function(){
    const x = document.getElementById('x').value
    const y = document.getElementById('y').value
    const result = Calculator.divide(x,y);
    document.getElementById('result').value = result
  })
}