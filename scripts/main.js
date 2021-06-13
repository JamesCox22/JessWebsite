var home = document.getElementById("home")
var meetJess = document.getElementById("meetJess")
var workWithMe = document.getElementById("workWithMe")
var contact = document.getElementById("contact")

function visitHome(){
    home.style.display = "block"
    meetJess.style.display = "none"
    workWithMe.style.display = "none"
    contact.style.display = "none"
}

function visitMeetJess(){
    meetJess.style.display = "block"
    home.style.display = "none"
    workWithMe.style.display = "none"
    contact.style.display = "none"
}

function visitWorkWithMe(){
    workWithMe.style.display = "block"
    meetJess.style.display = "none"
    home.style.display = "none"
    contact.style.display = "none"
}

function visitContact(){
    contact.style.display = "block"
    home.style.display = "none"
    workWithMe.style.display = "none"
    meetJess.style.display = "none"
}