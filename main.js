$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleclass('fa-times');
        $('.navbar').toggleclass('nav-toggle');

    });

    $(window).on('scroll load',function(){
        $('#menu').removeclass('fa-times');
        $('.navbar').removeclass('nav-toggle');

        if($(window).scrollTop() > 60){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');

        }



    });
});