function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav topnav") {
        x.className += " responsive";
    } else {
        x.className = "nav topnav";
    }
}