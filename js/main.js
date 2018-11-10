$(document).ready(function(){
	$("#form1 .log").addClass("active");
   	$("#form1 .reg").click(function(){
   	$("#form2 .reg").addClass("active");
    $("#form1").toggleClass("active_form form_lost");
    $("#form2").toggleClass("form_hide active_form");
});
   $("#form2 .log").click(function(){
    $("#form2").toggleClass("active_form form_lost");
    $("#form1").toggleClass("form_lost active_form");
	});
});