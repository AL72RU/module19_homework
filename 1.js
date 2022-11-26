const person = {
    city: "Moscow"
}
  
const student = Object.create(person)
  
student.ownCity = "Tyumen";

for (let key in student) {
  if(student.hasOwnProperty(key)) {
    console.log(key + ' - ' + student[key])
  }
}