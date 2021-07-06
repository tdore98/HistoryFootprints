var drawer = $("#drawer-nav");

// open navigation drawer
$("#menu").click(function() {
    drawer.css("left", "0");
});

// close navigation drawer
$("#close-menu").click(function() {
    drawer.css("left", "-100%");
});

// if click outside of drawer --> close it
$('html').click(function() {
    if (drawer.position().left == 0) {
        drawer.css("left", "-100%");
    }
});