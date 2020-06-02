function changeColor() {
    if(document.getElementById("pass").value != "12345678") {
    	document.getElementById("alert").style.color = "red"
    }
}

document.getElementById("submitButton").addEventListener("click", changeColor)