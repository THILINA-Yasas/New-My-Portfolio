
$(function() {
    var portfolioItems = [
        {
            title: "CHECKERAPP",
            imgSrc: "img/Organizational/CHECKERAPP.png",
            filter: "filter-1",
            lightboxImages: [
                "img/Organizational/CHECKERAPP.png",
                "img/Organizational/CHECKERAPP.png",
                "img3.jpg",
                "img4.jpg"
            ]
        },
        {
            title: "OLDTRAIN",
            imgSrc: "img/Organizational/OLDTRAIN.png",
            filter: "filter-1",
            lightboxImages: [
                "img/Organizational/OLDTRAIN.png",
                "img/Organizational/OLDTRAIN2.png",
                "img3.jpg",
                "img4.jpg"
            ]
        },
        {
            title: "train app",
            imgSrc: "img/Organizational/train app.png",
            filter: "filter-1",
            lightboxImages: [
                "img/Organizational/train app.png",
                "img/Organizational/train app new.png",
                "img3.jpg",
                "img4.jpg"
            ]
        },
        {
            title: "SelfCare Application Version",
            imgSrc: "img/Government/SelfCare Application Version.png",
            filter: "filter-2",
            lightboxImages: [
                "img/Government/SelfCare Application Version.png",
                "img/Government/Aapplications.png",
                "img3.jpg",
                "img4.jpg"
            ]
        },

        {
            title: "NEXTWEB",
            imgSrc: "img/Personal/NEXTWEB.png",
            filter: "filter-3",
            lightboxImages: [
                "img/Personal/NEXTWEB.png",
                "img/Personal/NEXTWEB2.png",
                "img/Personal/NEXTWEB3.png",
                "img4.jpg"
            ]
        },

        {
            title: "SHOP APP",
            imgSrc: "img/Personal/Shop app.png",
            filter: "filter-3",
            lightboxImages: [
                "img/Personal/Shop app.png",
                "img/Personal/Shop app2.png",
                "img3.png",
                "img4.jpg"
            ]
        },

        {
            title: "WEBAPP",
            imgSrc: "img/Personal/WEBAPP.png",
            filter: "filter-3",
            lightboxImages: [
                "img/Personal/WEBAPP.png",
                "img/Personal/WEBAPP2.png",
                "img3.png",
                "img4.jpg"
            ]
        },


    ];

    portfolioItems.forEach(function(item) {
        var lightboxData = item.lightboxImages.join(',');

        var portfolioCard = `
            <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item ${item.filter} wow fadeInUp" data-wow-delay="0.0s">
                <div class="portfolio-wrap">
                    <div class="portfolio-img">
                        <img src="${item.imgSrc}" alt="Image">
                    </div>
                    <div class="portfolio-text">
                        <h3>${item.title}</h3>
                        <a class="btn" href="${item.imgSrc}" data-lightbox="portfolio" data-images="${lightboxData}">
                            <i class="fa-solid fa-eye fa-sm"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;

        $('#portfolio-container').append(portfolioCard);
    });


    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

});



$(function() {
    $('a.btn[data-lightbox]').on('click', function(event) {

        var images = $(this).data('images').split(',');

        $('.image-grid img').each(function(index){
            console.log(this)
            $(this).attr('src', images[index]);
          });
        // Prevent the default action of the link (e.g., navigating to href)
        event.preventDefault();
        $('.lightboxOverlay, .lightbox').toggle();
    });
});

$(function() {
    $('#lightboxOverlay').on('click', function(event) {
        // Prevent the default action of the link (e.g., navigating to href)
        event.preventDefault();
        $('.lightboxOverlay, .lightbox').toggle();
    });
});

$(function() {
    $('.lb-close').on('click', function(event) {
        // Prevent the default action of the link (e.g., navigating to href)
        event.preventDefault();
        $('.lightboxOverlay, .lightbox').toggle();
    });
});
