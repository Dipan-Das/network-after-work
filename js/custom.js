// JavaScript Document
jQuery('#custom-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
jQuery(document).ready(function(){
    jQuery('#step-3-btn').click(function(){
        jQuery('#form-step-4').slideDown(1000);
        jQuery('#form-step-3').hide();
        jQuery('.number-wrap li:nth-child(3)').addClass('active');
        jQuery('.custom-progress-line').addClass('reach-step-4')
    })
})
