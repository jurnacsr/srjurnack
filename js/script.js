$(document).ready(loaded);
var isMobile = false;

function loaded() {
	isMobile = $(window).width() < 800;
	$(".navlist").click(navlistClick);
	$(".navDisplayButton").click(slideNav);

	var hash = location.hash;
	if (hash) {
		preselect(hash);
	}

	showCorrectContent();
}

function navlistClick(e) {
	console.log(isMobile);
	if (isMobile) $(window).scrollTop(0);
	$("li.navlist").removeClass("active");
	console.log("hey");
	var id = $(e.target).attr('id');
	if (!id) {
		id = $(e.target).closest(".navList").attr("id");
	}
	document.location.hash = id;
	$("li#"+id).addClass("active");
	$(".navSlidein").removeClass("navVisible");
	showCorrectContent();
	e.preventDefault();
	e.stopPropagation();
}

function preselect(id) {
	$("li.navlist").removeClass("active");
	$("li"+id).addClass("active");
	showCorrectContent();	
}

function showCorrectContent() {
	var id = $("li.active").attr("id");
	$("div.navContent").hide();
	$("div#"+id+"-content").show();
}

function slideNav(e) {
	if ($(".navSlidein").hasClass("navVisible")) {
		$(".navSlidein").removeClass("navVisible");
	} else {
		$(".navSlidein").addClass("navVisible");
	}
}
