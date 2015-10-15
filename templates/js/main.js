$(document).ready( function() {
    var lastScroll = 0;
    var downScrollInitiated = false; // we only want the animation to run on the first scrolldown trigger, not once for every pixel movement.
    var upScrollInitialted = false;

    $(window).scroll(function(event){ //Sets the current scroll position
        var st = $(this).scrollTop(); //Determines up-or-down scrolling
        if (st > lastScroll){ //Replace this with your function call for downward-scrolling
            if($(document).scrollTop() > 530 && (downScrollInitiated == false)) {
                $('#nav').animate({'top': '0px', 'left': '0px'}, 350)
                $('#nav').css('position', 'fixed')
                $('#nav').css('width', '100%')

                downScrollInitiated = true;
                console.log('downscroll');
                upScrollInitialted = false;
            } 
        }
        else {
            if ($(document).scrollTop() < 520) {
                if (!upScrollInitialted && downScrollInitiated) {
                    $('#nav').css('position', 'relative')
                    upScrollInitialted = true;
                    downScrollInitiated = false;

                }
            }
        }
    lastScroll = st;    
    })
})