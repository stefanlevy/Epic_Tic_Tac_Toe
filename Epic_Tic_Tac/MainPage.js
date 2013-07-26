$(document).ready(function () {
    /////////////////////////////////////
    //creates the game board to play on//
    /////////////////////////////////////
    var turn = "X"; //for now X always has first turn
    var newBoard = new String();
    newBoard += "<table>";
    for (gameR = 1; gameR <= 3; gameR++) {
        newBoard += "<tr>";
        for (gameC = 1; gameC <= 3; gameC++) {
            newBoard += "<td id=" + gameR + gameC + ">";
            newBoard += "<table>";
            for (row = 1; row <= 3; row++) {
                newBoard += "<tr>";
                for (col = 1; col <= 3; col++) {
                    newBoard += "<td><div id="+gameR+""+gameC+""+row+""+col+" class=\"space\"></div></td>";
                }
                newBoard += "</tr>";
            }
            newBoard += "</table>";
            newBoard += "</td>";
        }
        newBoard += "</tr>";
    }
    newBoard += "</table>";
    $('body').append(newBoard);
    /////////////////////////////////////////////////
    //logic for when a space is clicked//////////////
    /////////////////////////////////////////////////
    $('.space').click(function () {
        var space = "00";
        space = this.id;
        if ($(this).html() !== "X" && $(this).html() !== "O") {
            if (turn === "X") {
                $(this).html("X");
            }
            else if (turn === "O") {
                $(this).html("O");
            }
            else {
                $(this).html("Error");
                turn = "Error";
            }

            checkForWinner(space);
            swapPlayer(turn);
        }
    });
    /////////////////////////////////////////////////
    //checks for a winner////////////////////////////
    /////////////////////////////////////////////////
    var checkForWinner = function (space) {
        var horzvic=0;      //for how many there are in a row
        var vertvic = 0;    //for how many there are in a column
        var dag = 0;        //for how many there are in a forward diagonal (\)
        var backDag = 0;    //for how many there are in a backward diagonal (/)
        var game = space.substring(0, 2);
        var horz=space.substring(2,3);
        var vert=space.substring(3,4);
        for(i=1;i<=3;i++)
        {
            var back = 4 - i;
            if ($('#'+ game + horz + i).html() === turn)
                vertvic++;
            if ($('#' + game + i + vert).html() === turn)
                horzvic++;
            if ($('#' + game + i + i).html() === turn)
                dag++;
            if ($('#' + game + i + back).html() === turn)
                backDag++;
        }
        // if there is a winner put a big red X or O on the board
        if (dag === 3 || backDag === 3 || vertvic === 3 || horzvic === 3) {
            var yaxis = parseInt(game.substring(0, 1));
            var xaxis = parseInt(game.substring(1, 2));
            //document.getElementById(game).disable = true; //doesnt seem to work
            $('body').append("<div class=\"ontop\" bottom=\"" + (yaxis - 1) * 300 + "px\" left=\"" + (xaxis - 1) * 300 + "px\">" + turn + "</div>");
        }      
    }

    //swaps between X and O after each turn
    var swapPlayer = function (turn) {
        if (turn === "X")
            turn = "O";
        else
            turn = "X";
    }
});