

$(function(){
    /* ---------- Display Scocial Media Icon Name ---------- */
    "use strict",
    $('.social-media [data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });

     /* ---------- Owl Carousel ---------- */

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});


/* ---------- cube Portfolio ---------- */
jQuery(function($){
    "use strict";
    $('#flat').cubeportfolio({
        filters: '#flat',
        layoutMode: 'mosaic',
        sortByDimenion: true,
        mediaQueries: [{
            width: 1300,
            cols: 4,
        },{
            width: 1100,
            cols: 4,
        }, {
            width: 920,
            cols: 4,
        }, {
            width: 4000,
            cols: 1,
            options:{
                gapHorizontal: 15,
                gapVertical: 15,
            }
        }],

        defaultFilter: '*',
        animationType: 'fadeOutTop',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',

    });

    /* ---------- Scroll To Smooth ---------- */
    var smoothScroll = new scrollToSmooth('a', {
        easing: 'easeInOutBack',
        duration: 1490,
        durationRelative: true,
        onScrollStart: (data) => {console.log(data);},
        onScrollUpdate: (data) => {console.log(data);},
        onScrollEnd: (data) => {console.log(data);},
    });
    smoothScroll.init();
});

