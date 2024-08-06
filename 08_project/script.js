document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const resultDiv = document.getElementById('result');
    const weightGuideDiv = document.getElementById('Wight-guide');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const heightInput = document.querySelector('#height').value;
      const weightInput = document.querySelector('#weight').value;
      const height = parseInt(heightInput);
      const weight = parseInt(weightInput);
  
      if (isNaN(height) || height <= 0 ) {
        resultDiv.innerHTML = `Please enter a valid height: ${heightInput} `;
        return;
      }
  
       else if (isNaN(weight) || weight <= 0) {
        resultDiv.innerHTML = `Please enter a valid weight: ${weightInput}`;
        return;
      }
  
      const bmi = (weight/((height*height)/10000)).toFixed(2);
      resultDiv.innerHTML = `<span> ${bmi} <\span>`;
  
      if (bmi < 18.6) {
        weightGuideDiv.innerHTML = "Underweight";
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        weightGuideDiv.innerHTML = "Normal range";
      } else {
        weightGuideDiv.innerHTML = "Overweight";
      }
    });
  });
  