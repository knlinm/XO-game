var first = 1;
var second = 2;
var third = 3;
var forth = 4;
var fifth = 5;
var sixth = 6;
var seventh = 7;
var eighth = 8;
var ninth = 9;

var counter = 0


$(".element-wrapper").click(function(event) {

    if (counter % 2 == 0) {
        $(this).find("p.gamer-input").text("X")
        $("#info-text").text("O's turn")
    } else if (counter % 2 == 1) {
        $(this).find("p.gamer-input").text("O")
        $("#info-text").text("X's turn")
    }
    counter++
    first = $('[data-id="1"]').find("p.gamer-input").text();
    second = $('[data-id="2"]').find("p.gamer-input").text();
    third = $('[data-id="3"]').find("p.gamer-input").text();
    forth = $('[data-id="4"]').find("p.gamer-input").text();
    fifth = $('[data-id="5"]').find("p.gamer-input").text();
    sixth = $('[data-id="6"]').find("p.gamer-input").text();
    seventh = $('[data-id="7"]').find("p.gamer-input").text();
    eighth = $('[data-id="8"]').find("p.gamer-input").text();
    ninth = $('[data-id="9"]').find("p.gamer-input").text();

    if (first == "X" && second == "X" && third == "X") {
        $("#info-text").text("X is winner")


    } else if (forth == "X" && fifth == "X" && sixth == "X") {
        $("#info-text").text("X is winner")

    } else if (seventh == "X" && eighth == "X" && ninth == "X") {
        $("#info-text").text("X is winner")

    } else if (first == "X" && forth == "X" && seventh == "X") {
        $("#info-text").text("X is winner")

    } else if (second == "X" && fifth == "X" && eighth == "X") {
        $("#info-text").text("X is winner")

    } else if (third == "X" && sixth == "X" && ninth == "X") {
        $("#info-text").text("X is winner")

    } else if (first == "X" && fifth == "X" && ninth == "X") {
        $("#info-text").text("X is winner")

    } else if (third == "X" && fifth == "X" && seventh == "X") {
        $("#info-text").text("X is winner")
    } else if (first == "O" && second == "O" && third == "O") {
        $("#info-text").text("O is winner")

    } else if (forth == "O" && fifth == "O" && sixth == "O") {
        $("#info-text").text("O is winner")

    } else if (seventh == "O" && eighth == "O" && ninth == "O") {
        $("#info-text").text("O is winner")

    } else if (first == "O" && forth == "O" && seventh == "O") {
        $("#info-text").text("O is winner")

    } else if (second == "O" && fifth == "O" && eighth == "O") {
        $("#info-text").text("O is winner")

    } else if (third == "O" && sixth == "O" && ninth == "O") {
        $("#info-text").text("O is winner")

    } else if (first == "O" && fifth == "O" && ninth == "O") {
        $("#info-text").text("O is winner")

    } else if (third == "O" && fifth == "O" && seventh == "O") {
        $("#info-text").text("O is winner")
    }
})