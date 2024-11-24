document.addEventListener("DOMContentLoaded", function () {


    let firstgame = document.getElementById("firstGame");
    let secondgame = document.getElementById("secondGame")
    let thirdgame = document.getElementById("thirdGame");
    let button = document.getElementById("boutton");
    let current = document.getElementById("current");


    firstgame.addEventListener("click", function (e) {

        firstgame.className = "ombre";
        secondgame.className = "";
        thirdgame.className = "";


    })

    secondgame.addEventListener("click", function (e) {

        secondgame.className = "ombre";
        firstgame.className = "";
        thirdgame.className = "";


    })
    thirdgame.addEventListener("click", function (e) {


        thirdgame.className = "ombre";
        secondgame.className = "";
        firstgame.className = "";
    })




    button.addEventListener("click", function (e) {
        if (firstgame.className === "ombre") {
            document.location.href="/gamesite/games.html";
        }
        if (secondgame.className === "ombre") {
            document.location.href="/gamesite/games.html";
        }
        if (thirdgame.className === "ombre") {
            document.location.href="/gamesite/games.html";
        }
    })

    window.addEventListener("scroll", function(e) {
        current.className = "animate__animated animate__fadeIn";

    },{once:true});
})



