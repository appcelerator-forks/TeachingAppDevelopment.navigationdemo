/***************** EVENT HANDLERS *****************/
function doClickAsk(e){
	var args = {
		question: $.tfQuestion.value
	};
	
	
	
	var newwin = Alloy.createController("input",args).getView();
	newwin.open();	
}

$.index.open();
Alloy.Globals.lblAnswer = $.lblAnswer;