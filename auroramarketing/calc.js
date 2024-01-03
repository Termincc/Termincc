const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const dropdown = document.getElementById("dropdown")





input1.addEventListener("input", () => {
    if (input1.value === "") {
        document.getElementById("results1").innerHTML = ""
    } else {
        let annualSalary = parseFloat(input1.value)
        let monthlySalary = Math.round(((annualSalary / 12) + Number.EPSILON)*100)/100
        let monthlySuper = Math.round((((monthlySalary / 100) * 11) + Number.EPSILON)*100)/100 //This 11 is the super than changes every year!
        let hourlyRate = Math.round((((annualSalary / 52) / 38) + Number.EPSILON)*100)/100
        let casualRate = Math.round(((hourlyRate * 1.25) + Number.EPSILON)*100)/100
        let casualLoading = Math.round((((hourlyRate / 100) * 25) + Number.EPSILON)*100)/100
        let labourCostPerm = Math.round(((hourlyRate * 1.25) + Number.EPSILON)*100)/100
        let labourCostCasual = Math.round(((casualRate * 1.2) + Number.EPSILON)*100)/100


        document.getElementById("results1").innerHTML = `<p>Monthly Salary:        $`+ monthlySalary +`</p>
<p>Monthly Super:         $`+ monthlySuper +`</p>
<p>Hourly Rate:           $`+ hourlyRate +`</p>
<p>Casual Rate:           $`+ casualRate +`</p>
<p>Casual Loading:        $`+ casualLoading +`</p>
<p>Labour Cost (Perm):    $`+ labourCostPerm +`</p>
<p>Labour Cost (Casual):  $`+ labourCostCasual +`</p>`
    }
})

input2.addEventListener("input", () => {
    if (input2.value === "") {
        document.getElementById("results2").innerHTML = ""
    } else {
        let type = document.getElementById("dropdown").options[document.getElementById("dropdown").selectedIndex].text
        let value = parseFloat(input2.value)
        if (type == "Monthly Salary") {
            document.getElementById("results2").innerHTML = "Annual Salary: $" + Math.round((((value * 12)) + Number.EPSILON)*100)/100
        } else if (type == "Hourly Rate") {
            document.getElementById("results2").innerHTML = "Annual Salary: $" + Math.round((((value * 38) * 52) + Number.EPSILON)*100)/100
        } else { //Casual Rate
            document.getElementById("results2").innerHTML = "Annual Salary: $" + Math.round(((((value / 1.25) * 38) * 52) + Number.EPSILON)*100)/100
        }
    }
})

input3.addEventListener("input", () => {
    if (input3.value === "") {
        document.getElementById("results3").innerHTML = ""
    } else {
        let annualSalary = parseFloat(input3.value)
        let monthlySalary = Math.round(((annualSalary / 12) + Number.EPSILON)*100)/100
        let twoWeeksAnnual = Math.round(((annualSalary * (50 / 52)) + Number.EPSILON)*100)/100
        let twoWeeksMonthly = Math.round(((monthlySalary * (50 / 52)) + Number.EPSILON)*100)/100
        let fourWeeksAnnual = Math.round(((annualSalary * (48 / 52)) + Number.EPSILON)*100)/100
        let fourWeeksMonthly = Math.round(((monthlySalary * ( 48 / 52)) + Number.EPSILON)*100)/100

        document.getElementById("results3").innerHTML = `<p>2 Weeks Time for Living (Annual Rate): $`+ twoWeeksAnnual +`</p>
<p>2 Weeks Time for Living (Monthly Rate): $`+ twoWeeksMonthly +`</p>
<p>4 Weeks Time for Living (Annual Rate): $`+ fourWeeksAnnual +`</p>
<p>4 Weeks Time for Living (Monthly Rate): $`+ fourWeeksMonthly +`</p>`
    }
})


dropdown.addEventListener("input", () => {
    if (input2.value === "") {
        document.getElementById("results2").innerHTML = ""
    } else {
        let type = document.getElementById("dropdown").options[document.getElementById("dropdown").selectedIndex].text
        let value = parseFloat(input2.value)
        if (type == "Monthly Salary") {
            document.getElementById("results2").innerHTML = "Annual Salary: $" + Math.round((((value * 12)) + Number.EPSILON)*100)/100
        } else if (type == "Hourly Rate") {
            document.getElementById("results2").innerHTML = "Annual Salary: $" + Math.round((((value * 38) * 52) + Number.EPSILON)*100)/100
        } else { //Casual Rate
            document.getElementById("results2").innerHTML = "Annual Salary: $" + Math.round(((((value / 1.25) * 38) * 52) + Number.EPSILON)*100)/100
        }
    }
})

