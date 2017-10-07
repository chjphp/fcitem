$(function(){
    $(".nav ul li").hover(function() {
        $(this).find('span').addClass('current');
        $(this).find('.nav_cont').show();
    }, function() {
        $(this).find('span').removeClass('current');
        $(this).find('.nav_cont').hide();
    });
    $('.grow_slide').slides({
        preload: true,
        generatePagination:false,
        generateNextPrev: true,
        play: 4000,
        pause: 2500,
        hoverPause: true
    });
    $('.designer_slide').slides({
        preload: true,
        generatePagination:false,
        generateNextPrev: true,
        play: 4000,
        pause: 2500,
        hoverPause: true
    });
    $(".tab").each(function(tIndex){
        var tabIndex = tIndex;
        $(this).find("li").each(function(tlindex) {
            var tabLiIndex = tlindex;
            $(this).click(function() {
                $(this).addClass("current").siblings("li").removeClass("current");
                $(".tabContent").eq(tIndex).find(".tab_con").removeClass("block");
                $(".tabContent").eq(tIndex).find(".tab_con:eq("+tabLiIndex+")").addClass("block");
            });
        });
    });
    $(".product_list li").hover(function() {
        $(this).find(".hover_cont").show()
    }, function() {
        $(this).find(".hover_cont").hide();
    });
});