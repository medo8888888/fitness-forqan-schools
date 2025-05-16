
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    const weight = parseFloat(document.querySelector("#weight").value);
    const height = parseFloat(document.querySelector("#height").value);
    const result = document.querySelector("#result");
    if (isNaN(weight)|| isNaN(height) || height <= 0) {
        result.innerHTML = "Please enter valid weight and height.";
    }
     else{
        const bmi=(weight / (height * height)).toFixed(2);
        result.innerHTML = bmi;
        if (bmi < 18.5) {
            category = "Underweight";
            document.getElementById("body").style.backgroundColor= "lightblue"; 
          } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
            document.getElementById("body").style.backgroundColor= "green"; 
          } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
            document.getElementById("body").style.backgroundColor= "orange"; 
          } else {
            category = "Obesity";
            document.getElementById("body").style.backgroundColor= "red"; 
          }
        result.innerHTML = `Your BMI is ${bmi} and you are classified as ${category}.`; 
          
     }
    
     
}); 

