// global scope
    var page1 = document.getElementById("Home")
    var page2 = document.getElementById("Meet Jess")
    var page3 = document.getElementById("Work With Me")    ​
    var page4 = document.getElementById("Contact")    ​
            
function togglePage1() {
    // local scope
    var x = 10
    ​
    page1.style.display = "block"
    page2.style.display = "none"
    page3.style.display = "none"
    page4.style.display = "none"    ​
    }
    ​
function toggelPage2() {
    ​
    page2.style.display = "block"
    page1.style.display = "none"
    ​page3.style.display = "none"
    page4.style.display = "none"

    }
function togglePage3() {
                    ​
    page3.style.display = "block"
    page1.style.display = "none"
    page2.style.display = "none"
    page4.style.display = "none"    ​
    }
function togglePage4() {
                    ​
    page4.style.display = "block"
    page1.style.display = "none"
    page2.style.display = "none"
    page3.style.display = "none"    ​
    }