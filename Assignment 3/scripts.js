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
