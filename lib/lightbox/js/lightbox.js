$(function() {
    $('a.btn[data-lightbox]').on('click', function(event) {
        // Prevent the default action of the link (e.g., navigating to href)
        event.preventDefault();

        // Your code here
        alert('Link clicked!');

        return false
    });
});