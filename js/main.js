$(document).ready(function(){
	$("#form1 .reg").addClass("active");
   	$("#form1 .log").click(function(){
   	$("#form2 .log").addClass("active");
    $("#form1").toggleClass("active_form form_lost");
    $("#form2").toggleClass("form_hide active_form");
});
   $("#form2 .reg").click(function(){
    $("#form2").toggleClass("active_form form_lost");
    $("#form1").toggleClass("form_lost active_form");
	});
});
