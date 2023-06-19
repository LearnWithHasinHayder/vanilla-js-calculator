import { Calculator } from "./calculator"
export function setupButtons() {
  document.getElementById('add').addEventListener('click',function(){
    Calculator.calculate('x','y','add');
  })

  document.getElementById('sub').addEventListener('click',function(){
    Calculator.calculate('x','y','subtract');
  })

  document.getElementById('mul').addEventListener('click',function(){
    Calculator.calculate('x','y','multiply');
  })

  document.getElementById('div').addEventListener('click',function(){
    Calculator.calculate('x','y','divide');
  })
}


