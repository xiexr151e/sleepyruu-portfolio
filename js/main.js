$(document).ready(function(){
    $("#li-commission").click(function(){
    	$('.fade-in-left').toggleClass('fade-out-left');
    	$('.fade-in-right').toggleClass('fade-out-right');
    	$('.tracking-in-expand').toggleClass('fade-out-left');
    });

    //Return back to main menu animation
    $("#return").click(function() {
    	var leftbar = document.getElementById("leftbar");
    	var sitelogo = document.getElementById("blogo");
    	var sitemap = document.getElementById("smap")

    	leftbar.classList.remove("fade-out-left");
    	sitelogo.classList.remove("fade-out-right");
    	sitemap.classList.remove("fade-out-left");

    	void leftbar.offsetWidth;
    	void sitelogo.offsetWidth;
    	void sitemap.offsetWidth;

    	leftbar.classList.add("fade-in-left");
    	sitelogo.classList.add("fade-in-right");
    	sitemap.classList.add("tracking-in-expand");
    });
});
