function BMI (height, weight){
const bmi =weight/(height*height)
if (bmi<18.5){
return "underweight";
} else if (bmi>-18.5 && bmi<-24.9){
return "normal weight";
} else if (bmi>=25 && bmi<=29.9){
return "over weight";
Jelsef
return "obese";
}
}
console.1og(BMI(100,100))
