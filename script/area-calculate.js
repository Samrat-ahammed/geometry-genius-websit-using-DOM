function calculateTriangleArea(){
    // get triangle-base value
    const baseField = document.getElementById('triangle-base')
    const baseValue =  baseField.value;
    const base = parseFloat(baseValue);


    // get triangle-hight value


    const hightField = document.getElementById('triangle-hight');
    const hightValue = hightField.value;
    const hight = parseFloat(hightValue);

    console.log(base , hight);
}