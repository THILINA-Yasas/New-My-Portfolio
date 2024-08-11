$(function() {
    $('a.btn[data-lightbox]').on('click', function(event) {
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