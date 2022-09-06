$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    const svg_tick_tick = document.getElementById("tick_tick");
    svg_tick_tick.onclick = () => {
        if (svg_tick_tick.animationsPaused()) {
            svg_tick_tick.unpauseAnimations();
        }
        else {
            svg_tick_tick.pauseAnimations();
        }
    };

    const svg_circle_rec = document.getElementById("circle_rec");
    svg_circle_rec.onclick = () => {
        if (svg_circle_rec.animationsPaused()) {
            svg_circle_rec.unpauseAnimations();
        }
        else {
            svg_circle_rec.pauseAnimations();
        }
    };

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

function hideShowFunction(){
    if (document.getElementById("hide_show_rec").style.display === 'none') {
        document.getElementById("hide_show_rec").style.display = 'block';
    } else {
        document.getElementById("hide_show_rec").style.display = 'none';
    }
}