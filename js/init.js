$(document).ready(function() {

    // slideshow options

    $(".slideshow").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 0,
 
        addClass: '',
        mode: "fade",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
 
        speed: 0, //ms'
        auto: true,
        loop: true,
        slideEndAnimation: true,
        pause: 10000,
 
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
 
        rtl:false,
        adaptiveHeight:false,
 
        vertical:false,
        verticalHeight:500,

        pager: false,
        gallery: false,
 
        enableTouch:true,
        enableDrag:false,
        freeMove:false,
        swipeThreshold: 40,
 
        responsive : [],
 
        onBeforeStart: function (el) {
            // alert('onBeforeStart');
        },
        onBeforeSlide: function (el) {
            // alert('onBeforeSlide');
        },
        onBeforeNextSlide: function (el) {
            // alert('onBeforeNextSlide');
        },
        onBeforePrevSlide: function (el) {
            // alert('onBeforePrevSlide');
        },

        onSliderLoad: function (el) {
            let id = $(el).find('.active').attr('id'); 
            $('body').removeClass();
            $('body').addClass(id);

            var title = $(el).find('.active').data("title")
            var link = $(el).find('.active').data("link")
            $('#home-project-title').html(title);
            $('#home-project-title').attr("href", link);
        },

        onAfterSlide: function (el) {
            let id = $(el).find('.active').attr('id'); 
            $('body').removeClass();
            $('body').addClass(id);
            
            var title = $(el).find('.active').data("title")
            var link = $(el).find('.active').data("link")
            $('#home-project-title').html(title);
            $('#home-project-title').attr("href", link);          
        } 
    });


    // time

    let objDate = new Date();
    let hours = objDate.getHours();
    let options = {
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false
    };
    
    if(hours > 7 && hours < 18){
        // $('body').addClass('day');
        $('#sun').css('opacity', '1');
    }
    
    else {
        // $('#moon').css('opacity', '1');
        // $('body').addClass('night');

        // $('body').addClass('day');
        $('#moon').css('opacity', '1');        
        // $('body').addClass('day');
    }
    // if(hours == 6 || hours == 18){
    //     $('body').addClass('dusk');
    // }

    window.setInterval(function(){
        objDate = new Date();
        $('#clock').html(new Intl.DateTimeFormat('en-US', options).format(objDate));
    }, 1000);  

    // color links

    n=0;

    $('#project-description a').each(function(){
        if(n%3 === 0){
            $(this).addClass('magenta');
        }
        if(n%3 === 1){
            $(this).addClass('yellow');
        }
        if(n%3 === 2){
            $(this).addClass('cyan');
        }
        n++;
    });

    // tags 
    let tagsList = [];    
    $('.tag').click(function(){
        // get tag
        let tags = $(this).attr('data-tag');

        // toggle tag appearance
        $(this).toggleClass('active');

        // add tag to array
        tagsList.push( $(this).data('tag') );

        // remove tag from array
        if ($(this).hasClass('active') === false) {
            tagsList = tagsList.filter(e => e !== tags);
        }

        // clear all tags
        $('.projects li').removeClass('active');
        $('.projects-list a').removeClass('active');

        // loop through posts
        let i;
        for (i = 0; i < tagsList.length; i++) {
            $('.projects li.'+tagsList[i]+'').addClass('active');
            $('.projects-list a.'+tagsList[i]+'').addClass('active');
        }

        // grey out posts
        $('body').addClass('active-tags');
        if (tagsList.length === 0) {
            $('body').removeClass('active-tags');
        }
        console.log(tagsList);
    });
    
    // lightbox gallery
    var lightbox = GLightbox({
        loop: true,
        touchNavigation: true,
        openEffect: 'none',
        closeEffect: 'none'
    });    


        
});