var args = arguments[0] || {};
Ti.API.info("The question is: "+ args.question);

$.lblQuestion.text = args.question;
//$.tfAnswer.focus();


/*************** EVENT HANDLERS ******************/
function doClickAnswer(e){
	//Ti.API.info("Alloy.Globals.lblAnswer: " + Alloy.Globals.lblAnswer);
	//Ti.API.info("Alloy.Globals.lblAnswer apiname: " + Alloy.Globals.lblAnswer.getApiName());
	//Ti.API.info();
	Alloy.Globals.lblAnswer.text = $.tfAnswer.value;
	$.input.close();	
}
