
$.index.open();


/*************** EVENT **********************************/
function doClickAskEvent(e){
	var args = {
		question: $.tfQuestion.value
	};
	var newwin = Alloy.createController("input",args).getView();
	newwin.addEventListener("return", function(e){
		$.lblAnswer.text = e.answer;
	});
	newwin.open();	
}

/*************** DIRECT GLOBAL ACCESS ****************/
Alloy.Globals.lblAnswer = $.lblAnswer;

function doClickAskDirect(e){
	var args = {
		question: $.tfQuestion.value
	};
	var newwin = Alloy.createController("input",args).getView();
	newwin.open();	
}
