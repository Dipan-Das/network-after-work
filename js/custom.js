// JavaScript Document
jQuery('#events-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        992:{
            items:4
        }
    }
});

jQuery('#members-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        992:{
            items:4
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
