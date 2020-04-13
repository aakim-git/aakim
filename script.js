
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
            var objectBottom = $(this).offset().top + $(this).outerHeight()/2;
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
            var objectBottom = $(this).offset().top + $(this).outerHeight()/2;
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
            var objectBottom = $(this).offset().top + $(this).outerHeight()/2;
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
            var objectBottom = $(this).offset().top + $(this).outerHeight()/2;
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
            var objectBottom = $(this).offset().top + $(this).outerHeight()/2;
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
    if ($(window).width() > 620) {  
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('Work-List').scrollLeft -= (delta*40); // Multiplied by 40
        revealProjects();
        e.preventDefault();
    }
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


window.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("Contact-Form");
    var button = document.getElementById("Form-Button-Text");
    var loading = document.getElementById("loadingio-spinner-radio-n0wlxvx8db");

    // Success and Error functions for after the form is submitted
    function success() {
        form.reset();
        loading.style.display = "none";
        button.innerHTML = "SENT!";
    }

    function error() {
        loading.style.display = "none";
        button.innerHTML = "ERROR";
    }

    // handle the form submission event
    form.addEventListener("submit", function(ev) {
            ev.preventDefault();
            var data = new FormData(form);
            loading.style.display = "inline-block";
            button.innerHTML = "";
            ajax(form.method, form.action, data, success, error);
        });
    });

    // helper function for sending an AJAX request
    function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                success(xhr.response, xhr.responseType);
            } 
            
            else {
                error(xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }