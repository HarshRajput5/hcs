function scrollGallery(direction) {
    const gallery = document.getElementById('imageGallery');
    const scrollStep = 200; // Set the scroll step

    if (direction === 'left') {
        gallery.scrollLeft -= scrollStep; // Scroll left
    } else if (direction === 'right') {
        gallery.scrollLeft += scrollStep; // Scroll right
    }
}