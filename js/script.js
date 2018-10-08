$("#imageType").click(function () {
	$("#imageType").addClass("is_selected");
	$("#listType").removeClass("is_selected");
	$(".an_panel_image").show();
	$(".an_panel_list").hide();
});
$("#listType").click(function () {
	$("#listType").addClass("is_selected");
	$("#imageType").removeClass("is_selected");
	$(".an_panel_list").show();
	$(".an_panel_image").hide();
});