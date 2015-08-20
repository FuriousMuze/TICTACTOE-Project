$(function(){
	$('#one').click(clickMe); 
	$('#two').click(clickMe);
	$('#three').click(clickMe);
	$('#four').click(clickMe);
	$('#five').click(clickMe);
	$('#six').click(clickMe);
	$('#seven').click(clickMe);
	$('#eight').click(clickMe);
	$('#nine').click(clickMe);

var pressed = 0;	
function clickMe(){
	var dog = this.id;
	console.log(this.id);
	pressed = pressed +1;

if(pressed%2===0){
	$(this).css('backgroundColor', 'blue');
	$(this).click = {};
}
else{
	$(this).css('backgroundColor', 'red');
	$(this).click= {};
}

}










});