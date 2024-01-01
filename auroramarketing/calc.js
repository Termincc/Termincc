const input1 = document.getElementById("input1")


input1.addEventListener("input", () => {
    if (input1.value === "") {
        document.getElementById("box1").classList.remove('expanded')
    } else {
        document.getElementById("box1").classList.add('expanded')
    }
})

