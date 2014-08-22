$(function(){
	$(".tab span:first").addClass("current");
	$(".tab ul:not(:first)").hide();

	$(".tab span").on("mouseover", function(){
		$(".tab span").removeClass("current");
		$(this).addClass("current");

		$(".tab ul").hide();
		$("." + $(this).attr("id")).fadeIn("slow");

	})
	
})