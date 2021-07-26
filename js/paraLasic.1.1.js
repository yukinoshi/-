$(window).bind("scroll", function () {
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		var paralasicValue = $(".main").attr("data-paralasic");
		$(".main").css(
			"background-position",
			"center top -" + scrollTop * paralasicValue + "px"
		);
	});
});

var bgc = "background-color: rgba(0, 0, 0, .4)";
var appendStr = "<style>.list-item::before{" + bgc + "}</style>";
$(".list-item").hover(function () {
	$(".list-item").append(appendStr);
});

/*
	视差效果jq
*/
