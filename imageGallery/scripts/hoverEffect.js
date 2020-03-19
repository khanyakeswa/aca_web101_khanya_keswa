var moveForce = 20; // max popup movement in pixels
var rotateForce = 3; // max popup rotation in deg

$(document).mousemove(function(e) {
    var docX = $(document).width();
    var docY = $(document).height();
    
    var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
    var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
    
    var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
    var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
    
    $(".carousel-container .button, .carousel-container .button.clicked")
        .css('left', moveX+'px')
        .css('top', moveY+'px')
        .css('transform', 'translateZ(0px) rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');

    $(".carousel-container .button:hover, .carousel-container .button.clicked:hover")
        .css('left', moveX+'px')
        .css('top', moveY+'px')
        .css('transform', 'translateZ(20px)');
});