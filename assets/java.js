$(document).ready(function () {
    var randomNum = Math.floor(Math.random() * 120 + 19);
    $("#randomnum").append("Target: " + randomNum);



    var wins = 0;
    var losses = 0;
    var userScore = 0;


    



    var crystal1 = $("#crystal1");
    var crystal1Number = Math.floor(Math.random() * 12 + 1);


    $(crystal1).on("click", function () {
        crystal1Number = parseInt(crystal1Number);
        userScore += crystal1Number;
        $("#scoretext").text("You total score is: " + userScore);
        console.log(userScore);
        winnlose();

    })

    var crystal2 = $("#crystal2");
    var crystal2Number = Math.floor(Math.random() * 12 + 1);

    $(crystal2).on("click", function () {
        crystal2Number = parseInt(crystal2Number);
        userScore += crystal2Number;
        $("#scoretext").text("You total score is: " + userScore);
        console.log(userScore);
        winnlose();


    })



    var crystal3 = $("#crystal3");
    var crystal3Number = Math.floor(Math.random() * 12 + 1);

    $(crystal3).on("click", function () {
        crystal3Number = parseInt(crystal3Number);
        userScore += crystal3Number;
        $("#scoretext").text("You total score is: " + userScore);
        console.log(userScore);
        winnlose();
    })

    var crystal4 = $("#crystal4");
    var crystal4Number = Math.floor(Math.random() * 12 + 1);

    $(crystal4).on("click", function () {
        crystal4Number = parseInt(crystal4Number);
        userScore += crystal4Number;
        $("#scoretext").text("You total score is: " + userScore);
        console.log(userScore);
        winnlose();
    })


    function winnlose() {
        if (randomNum === userScore) {
            wins++;
            $(".wins").text("wins: " + wins);
            alert("You win!!");
            console.log(userScore);
            reset();
        }
        if (userScore > randomNum) {
            losses++;
            $(".losses").text("losses: " + losses);
            alert("you lost");
            console.log(userScore);
            reset();
        }
    }

    function reset() {
        randomNum = Math.floor(Math.random() * 120 + 19);
        $("#randomnum").text("Target: " + randomNum);
        userScore = 0;
        $("#scoretext").text("You total score is: " + userScore);

        crystal1Number = Math.floor(Math.random() * 12 + 1);
        crystal2Number = Math.floor(Math.random() * 12 + 1);
        crystal3Number = Math.floor(Math.random() * 12 + 1);
        crystal4Number = Math.floor(Math.random() * 12 + 1);

        // try to create a play again button 


    }



});