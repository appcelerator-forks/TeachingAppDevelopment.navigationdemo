var args = arguments[0] || {};

$.lblQuestion.text = args.question;

/*************** EVENT **********************************/
function doClickAnswerEvent(e){
	// the event if fired on this window, but the eventhandler is defined on the 'parent' and therefore executes there, pretty 1337 approach IMO
	$.input.fireEvent("return", {answer: $.tfAnswer.value});
	$.input.close();
}

/*************** DIRECT GLOBAL ACCESS ****************/
function doClickAnswerDirect(e){
	// Accessing 'parent' elements directly through Global namespace, not very elegant
	Alloy.Globals.lblAnswer.text = $.tfAnswer.value;
	$.input.close();	
}
