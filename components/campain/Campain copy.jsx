
    var settings = {
        className: 'mx-md-5 mx-1',
        autoplay: true,
        infinite: true,
        dots: true,
        accessibility: true,
        arrows: false,
        speed: 500,
        autoplaySpeed: 6000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        rtl: true,
        autoplay: true,
        focusOnSelect: true,
        touchMove: true,
    
        // className: "center",
        // centerMode: true,
       
        // centerPadding: "60px",
   
        rows: 2,
        // slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    speed: 500,
                    autoplaySpeed: 6000,
                }
            }

        ]
    };