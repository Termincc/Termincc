const opt1 = document.getElementById("opt1")
const opt2 = document.getElementById("opt2")
const opt2SelectType = document.getElementById("opt2SelectType")
const optMonthlySalary = document.getElementById("opt2opt1")
const optHourlyRate = document.getElementById("opt2opt2")
const optCasualRate = document.getElementById("opt2opt3")
const opt3 = document.getElementById("opt3")
var opt2SalaryType


optMonthlySalary.addEventListener("click", () => {
    opt2SelectType.innerHTML = "Monthly Salary"
    opt2SalaryType = "monthlySalary"
})

optHourlyRate.addEventListener("click", () => {
    opt2SelectType.innerHTML = "Hourly Rate"
    opt2SalaryType = "hourlyRate"
})

optCasualRate.addEventListener("click", () => {
    opt2SelectType.innerHTML = "Casual Rate"
    opt2SalaryType = "casualRate"
    test()
})





opt1.addEventListener("input", () => {
    if (opt1.value === "") {
        reset("1")
    }
    else {
        opt1Calc()
    }
})


function reset(option) {
    document.getElementById("box"+option).style.height = "200px"
}

function opt1Calc() {
    let startVal = parseFloat(opt1.value)
    document.getElementById("box1").style.height = "600px"
    
}
