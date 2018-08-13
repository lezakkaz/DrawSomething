$(".comming-soon").hover(function() {
        $(this).children('.text-wrapper').css('opacity','0.2');
        $(this).append(
            "<div class='comming-soon-message'>Comming Soon...</div>"
        );
        $(".comming-soon-message").fadeIn(200);
    }, function() {
        $(this).children('.text-wrapper').css('opacity','1');
        $(".comming-soon-message").remove();
    }
);