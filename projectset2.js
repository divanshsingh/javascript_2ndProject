const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height} is not valid`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight} is not valid`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // result.innerHTML = `<span>Your BMI is: ${bmi}</span>`
    if (bmi < 18.6) {
        result.innerHTML = `<span>Your BMI is: ${bmi} which comes in <span class = "category-UW">Under Weight</span> category</span>`
    }
    if (bmi > 18.6 || bmi < 24.9) {
        result.innerHTML = `<span>Your BMI is: ${bmi} which comes in <span class = "category-NR">Normal Range</span> category</span>`
    }
    if (bmi > 24.9) {
        result.innerHTML = `<span>Your BMI is: ${bmi} which comes in <span class = "category-OW">Over Weight</span> category</span>`
    }
}
})
//     // switch (bmi) {
//     //     case bmi < 18.6:
//     //         result.innerHTML = `<span>Your BMI is: ${bmi} which comes in Under Weight category</span>`
//     //         break;
//     //         case bmi > 18.6 || bmi < 24.9:
//     //             result.innerHTML = `<span>Your BMI is: ${bmi} which comes in Normal Range category</span>`
//     //         break;
//     //         case bmi > 24.9:
//     //             result.innerHTML = `<span>Your BMI is: ${bmi} which comes in Over Weight category</span>`
//     //         break;
    
//     //     default:
//     //         break;
//     // }}