function voidWidth(lbar, slogo, sitemap) {
    void lbar.offsetWidth;
    void slogo.offsetWidth;
    void sitemap.offsetWidth;
}

/* Function to remove exit animations to reuse entrance */
function removeFadeAnimation(lbar, slogo, sitemap) {
    lbar.classList.remove("fade-out-left");
    slogo.classList.remove("fade-out-right");
    sitemap.classList.remove("fade-out-left");
}

/* Function to re-add the default entrance animations */
function addDefEntrance(lbar, slogo, sitemap) {
    lbar.classList.add("fade-in-left");
    slogo.classList.add("fade-in-right");
    sitemap.classList.add("tracking-in-expand");
}

$(document).ready(function(){

    var lbar = document.getElementById("leftbar");
    var slogo = document.getElementById("blogo");
    var sitemap = document.getElementById("smap");

    /* Animation to make the side elements smoothly fade out
     * when the Twtich bar is clicked */ 
    $('.hideall').click(function(){
    	$('.fade-in-left').toggleClass('fade-out-left');
    	$('.fade-in-right').toggleClass('fade-out-right');
    	$('.tracking-in-expand').toggleClass('fade-out-left');

        console.log('Selected');
    });

    /* Animation to smoothly return back to the main menu
     * from the Twitch screen */
    $('.return').click(function() {
        /* Remove the fade animation, then forcibly reset the offsetWidth
         * to reuse entrance animations */
        removeFadeAnimation(lbar, slogo, sitemap);
        voidWidth(lbar, slogo, sitemap);
        addDefEntrance(lbar, slogo, sitemap);
    });

    /* Method to hide the right sidebar when a normal element is clicked */
    $('.content').click(function() {
        slogo.classList.add("fade-out-right");
    });

    /* Method to restore the right sidebar when returning to landing */
    $('.landing').click(function() {

        slogo.classList.remove("fade-out-right");
        /* Reset offset width to reuse animations */
        void slogo.offsetWidth;
        slogo.classList.add("fade-in-right");
    })



});
