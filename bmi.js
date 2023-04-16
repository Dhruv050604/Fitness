function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = weight / ((height / 100) * (height / 100));
    var result = document.getElementById("result");
    result.innerHTML = "Your BMI is: " + bmi.toFixed(2);

    if (bmi < 18.5) {
        result.innerHTML += "<br>You are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerHTML += "<br>You are normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerHTML += "<br>You are overweight.";
    } else {
        result.innerHTML += "<br>You are obese.";
}
}