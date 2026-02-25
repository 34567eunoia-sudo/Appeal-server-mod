function sendmail() {
    let parms = {
        name : document.getElementById("Username").value,
        display : document.getElementById("Display").value,
        Bdate : document.getElementById("Bdate").value,
        Que1 : document.getElementById("Que1").value,
        Que2 : document.getElementById("Que2").value,
        Que3 : document.getElementById("Que3").value,
        Que4 : document.getElementById("Que4").value,
        Que5 : document.getElementById("Que5").value,
        Que6 : document.getElementById("Que6").value,
        Que7 : document.getElementById("Que7").value
    }

    emailjs.send("service_vhhaeva","template_w7e8bhl",parms).then(alert("email sent!!"))
}