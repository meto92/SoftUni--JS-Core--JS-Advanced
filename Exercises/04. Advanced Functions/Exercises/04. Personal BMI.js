function getPersonInfo(name, age, weightInKg, heightInCm) {
    let bmi = weightInKg / (heightInCm / 100) ** 2
    
    let obj = {
        name,
        personalInfo: {
            age,
            weight: weightInKg,
            height: heightInCm
        },
        BMI: Math.round(bmi)
    };

    if (bmi < 18.5) {
        obj.status = "underweight";
    } else if (bmi < 25) {
        obj.status = "normal";
    } else if (bmi < 30) {
        obj.status = "overweight";
    } else {
        obj.status = "obese";
        obj.recommendation = "admission required";
    }

    return obj;
}