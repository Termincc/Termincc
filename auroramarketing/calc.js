const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const dropdown = document.getElementById("dropdown")





input1.addEventListener("input", () => {
    if (input1.value === "") {
        document.getElementById("results1").innerHTML = ""
    } else {
        let annualSalary = parseFloat(input1.value)
        let monthlySalary = (annualSalary / 12).toFixed(2)
        let monthlySuper = ((monthlySalary / 100) * 11).toFixed(2) //This 11 is the super than changes every year!
        let hourlyRate = ((annualSalary / 52) / 38).toFixed(2)
        let casualRate = (hourlyRate * 1.25).toFixed(2)
        let casualLoading = ((hourlyRate / 100) * 25).toFixed(2)
        let labourCostPerm = (hourlyRate * 1.25).toFixed(2)
        let labourCostCasual = (casualRate * 1.2).toFixed(2)


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
            document.getElementById("results2").innerHTML = "Annual Salary: $" + ((value * 12)).toFixed(2)
        } else if (type == "Hourly Rate") {
            document.getElementById("results2").innerHTML = "Annual Salary: $" + ((value * 38) * 52).toFixed(2)
        } else { //Casual Rate
            document.getElementById("results2").innerHTML = "Annual Salary: $" + (((value / 1.25) * 38) * 52).toFixed(2)
        }
    }
})

input3.addEventListener("input", () => {
    if (input3.value === "") {
        document.getElementById("results3").innerHTML = ""
    } else {
        let annualSalary = parseFloat(input3.value)
        let monthlySalary = (annualSalary / 12).toFixed(2)
        let twoWeeksAnnual = (annualSalary * (50 / 52)).toFixed(2)
        let twoWeeksMonthly = (monthlySalary * (50 / 52)).toFixed(2)
        let fourWeeksAnnual = (annualSalary * (48 / 52)).toFixed(2)
        let fourWeeksMonthly = (monthlySalary * ( 48 / 52)).toFixed(2)

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
            document.getElementById("results2").innerHTML = "Annual Salary: $" + ((value * 12)).toFixed(2)
        } else if (type == "Hourly Rate") {
            document.getElementById("results2").innerHTML = "Annual Salary: $" + ((value * 38) * 52).toFixed(2)
        } else { //Casual Rate
            document.getElementById("results2").innerHTML = "Annual Salary: $" + (((value / 1.25) * 38) * 52).toFixed(2)
        }
    }
})

