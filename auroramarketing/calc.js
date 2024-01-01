const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const dropdown = document.getElementById("dropdown")





input1.addEventListener("input", () => {
    if (input1.value === "") {
        document.getElementById("box1").classList.remove('expanded')
    } else {
        document.getElementById("box1").classList.add('expanded')
    }
})

input2.addEventListener("input", () => {
    if (input2.value === "") {
        document.getElementById("box2").classList.remove('expanded')
    } else {
        document.getElementById("box2").classList.add('expanded')
    }
})

input3.addEventListener("input", () => {
    if (input3.value === "") {
        document.getElementById("box3").classList.remove('expanded')
    } else {
        document.getElementById("box3").classList.add('expanded')
    }
})


//let type = document.getElementById("dropdown").options[document.getElementById("dropdown").selectedIndex].text

