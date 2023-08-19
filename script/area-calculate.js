function calculateTriangleArea(){
    // get triangle-base value
    const baseField = document.getElementById('triangle-base')
    const baseValue =  baseField.value;
    const base = parseFloat(baseValue);


    // get triangle-hight value


    const hightField = document.getElementById('triangle-hight');
    const hightValue = hightField.value;
    const hight = parseFloat(hightValue);

  const area = 0.5 * base * hight ;
  

  const triangleArea = document.getElementById('triangle-area');
  triangleArea.innerText = area;
}

function calculateRectangleArea (){

   const widthField = document.getElementById('rectangle-width');
   const widthValue = widthField.value;
   const width = parseFloat(widthValue);


   const lengthField = document.getElementById('rectangle-length');
   const lengthValue = lengthField.value;
   const length = parseFloat(lengthValue);

 const area = width * length;

 const rectangleArea = document.getElementById('rectangle-area');
 rectangleArea.innerText = area;

}


function calculateParallelogramArea(){
 const base = getInputValue('parallelogram-base');
 

 const hight = getInputValue('parallelogram-hight');

 console.log(hight);

}


// reusable function 
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const inputInt = parseFloat(inputValueText);
    return inputInt;

}
