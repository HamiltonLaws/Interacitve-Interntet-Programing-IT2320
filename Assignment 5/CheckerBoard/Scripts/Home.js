var isHolding = false;
var inHand = {};

PickUpPiece = function (element)
{
    $(element).css("border", "1px solid yellow");
    inHand = element;
    isHolding = true;
}
DropPieceInHandOnElement = function (targetElement)
{

    targetElement.className = inHand.className;
    $(inHand).css("border", "1px solid black");
    inHand.className = "cell";
    isHolding = false;
    inHand = {};
}


$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }
    
    $(".cell").click(function () {

        if (!isHolding) {
            if ($(this).hasClass("piece")) {
                PickUpPiece(this)
            }
        }
        else {
            DropPieceInHandOnElement(this)
        }

    });

});
