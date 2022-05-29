$(function(){
    $('.toggler_btn').click(function(){
        $('#navBar ul').toggleClass('active_ul');
        $('.myLogo').toggleClass('active_logo');
        
    });
    $('.my_slider').slick({
        
        prevArrow :'.left',
        nextArrow :'.right',
        autoplay: true,
        autoplaySpeed: 3000,
       
    });

    $('.portfolio_slider').slick({
        slidesToShow:4,
        slidesToScroll:1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1000,

        responsive: [
          
            {
              breakpoint:991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
           ]
        
    })

    $('.blog_slider_parent').slick({
      slidesToShow:3,
      slidesToScroll:1,
      arrows:false,
      centerMode:true,
      centerPadding: '0px',
      autoplay:true,
      autoplaySpeed:1000,

      responsive: [
          
        {
          breakpoint:991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay:false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:false,
          }
        },
       ]
    
    })

    $('.testimonial_cnt').slick({
      slidesToShow:1,
      slidesToScroll:1,
      arrows:false,
      asNavFor:'.client_img'
    })

    $('.client_img').slick({
      slidesToShow:3,
      slidesToScroll:1,
      arrows:false,
      centerMode:true,
      centerPadding: '0px',
      asNavFor:'.testimonial_cnt'

    })

    $('.web_slider').slick({
      slidesToShow:5,
      slidesToScroll:1,
      arrows:false,
      centerMode:true,
      centerPadding: '0px',
      autoplay:true,
      autoplaySpeed:1000,
      responsive: [
          
        {
          breakpoint:991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay:false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay:false,
          }
        },
       
       ]

    })

    $('.team_slider_parents2').slick({
      slidesToShow:3,
      slidesToScroll:1,
      arrows:false,
      centerMode:true,
      centerPadding: '0px',
      autoplay:true,
      autoplaySpeed:1000,

      responsive: [
          
        {
          breakpoint:991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay:false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:false,
          }
        },
       
       ]
    })


    AOS.init();
});