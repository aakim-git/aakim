
$( document ).ready( function() {
    // set 'fader's opacity to 0
    $("[class^='fader']").css({opacity: 0}); 
    
    // enable horizontal scrolling in work-list
    if (document.getElementById('Work-List').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('Work-List').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('Work-List').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } 
    else {
        // IE 6/7/8
        document.getElementById('Work-List').attachEvent("onmousewheel", scrollHorizontally);
    }
});

$(window).on("load", function() { 
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        var windowTop = $(this).scrollTop();
        
        $(".fader-300").each( function() {
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            if (objectBottom < windowBottom && objectBottom > windowTop) { 
                if ($(this).css("opacity")==0 ) {
                    $(this).fadeTo(300,1);
                }
            } 
            else {
                if ($(this).css("opacity")==1 ) {
                    $(this).fadeTo(100,0);
                }
            }
        });
        
        $(".fader-500").each( function() {
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            if (objectBottom < windowBottom && objectBottom > windowTop) { 
                if ($(this).css("opacity")==0 ) {
                    $(this).fadeTo(500,1);
                }
            } 
            else {
                if ($(this).css("opacity")==1 ) {
                    $(this).fadeTo(100,0);
                }
            }
        });
        
        $(".fader-750").each( function() {
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            if (objectBottom < windowBottom && objectBottom > windowTop) { 
                if ($(this).css("opacity")==0 ) {
                    $(this).fadeTo(750,1);
                }
            } 
            else {
                if ($(this).css("opacity")==1 ) {
                    $(this).fadeTo(100,0);
                }
            }
        });
        
        $(".fader-1000").each( function() {
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            if (objectBottom < windowBottom && objectBottom > windowTop) { 
                if ($(this).css("opacity")==0 ) {
                    $(this).fadeTo(1000,1);
                }
            } 
            else {
                if ($(this).css("opacity")==1 ) {
                    $(this).fadeTo(100,0);
                }
            }
        });
        
        $(".fader-2000").each( function() {
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            if (objectBottom < windowBottom && objectBottom > windowTop) { 
                if ($(this).css("opacity")==0 ) {
                    $(this).fadeTo(2000,1);
                }
            } 
            else {
                if ($(this).css("opacity")==1 ) {
                    $(this).fadeTo(100,0);
                }
            }
        });
    }).scroll();
});



function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('Work-List').scrollLeft -= (delta*40); // Multiplied by 40
        revealProjects();
        e.preventDefault();
}

function revealProjects() {
    var windowRight = $(window).width();
    
    $(".fader-s700").each( function() {
        var objectLeft = $(this).offset().left;
        if (objectLeft < windowRight) { 
            if ($(this).css("opacity")==0 ) {
                $(this).fadeTo(700,1);
            }
        }
        else {
            if ($(this).css("opacity")==1 ) {
                $(this).fadeTo(300,0);
            }
        }
    });
    
    $(".fader-s1000").each( function() {
        var objectLeft = $(this).offset().left;
        if (objectLeft < windowRight) { 
            if ($(this).css("opacity")==0 ) {
                $(this).fadeTo(1000,1);
            }
        }
        else {
            if ($(this).css("opacity")==1 ) {
                $(this).fadeTo(300,0);
            }
        }
    });
}