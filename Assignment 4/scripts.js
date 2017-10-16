var dynamicObject = {};
dynamicObject.ThankYouText = "Thank You!";

var alertUpdateDataFunction = function(page, input, message)
{
	message.innerHTML = dynamicObject.ThankYouText;
	page.removeChild(input);
};

function TextInputChanged(input)
{
	var page = document.getElementsByClassName("index")[0];
	var message = document.getElementsByClassName("footer")[0];
	alertUpdateDataFunction(page, input, message);
}
window.onload = function Load()
{
	
	for(var x=0; x < 6; x++)
	{
		var classes = document.getElementsByClassName("desc")[x].addEventListener("click", Clicked);
		var desc = [classes]
	}
	
	
	
}
function Clicked(element)
{
	element.target.className = (element.target.className=="desc") ? "change" : "desc";
}

