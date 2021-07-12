var countCompare = 1;

$(document).ready(function() {
    setupVerticalMarkers();

    $(".img-col .placeholder-img").click(function() {
        if ($(this).hasClass("image-selected")) {
            $(this).removeClass("image-selected");
            updateCompareBtn(countCompare--);
        } else {
            $(this).addClass("image-selected");
            updateCompareBtn(countCompare++);
            $(".nav-compare-btn").css("visibility", "visible");

        }
    });

    $(".filter-wrapper").click(function() {
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected");
            updateCompareBtn(countCompare--);
        } else {
            $(this).addClass("selected");
            updateCompareBtn(countCompare++);
            $(".nav-compare-btn").css("visibility", "visible");
        }
    })

    $(".marker").click(function() {
        $(".marker").removeClass("marker-active");
        $(this).addClass("marker-active");
    })
});

function clearOpacity() {
    $(".img-col .placeholder-img").removeClass("image-selected");
}

function clearSelected() {
    $(".filter-wrapper").removeClass("selected");
}

function updateCompareBtn(items) {
    if (items > 0) {
        var staticString = "Compare (";
        console.log(staticString);
        var updateString = staticString + items.toString() + ")";
        console.log(items.toString());
        console.log(updateString);
        $(".nav-compare-btn").text(updateString);
    }
}

function setupVerticalMarkers() {
    // storing each "content-wrapper" in an array
    var sections = $(".content-wrapper");
    var markerStart = '<a href="#';
    var markerEnd = '"aria-label="vertical page marker"> <div class="marker"></div></a>';
    var marker;
    var sectionId;

    // for the number of sections create a vertical marker
    for (let i = 0; i < sections.length; i++) {
        sectionId = sections[i].id;
        marker = markerStart.concat(sectionId);
        marker = marker.concat(markerEnd);
        console.log(marker);
        $(".vertical-marker").append(marker);
    }

    // assign marker-active class to the first marker
    if ($(".marker").length > 0) {
        $(".marker").first().addClass("marker-active");
    }

    var currentHash = window.location.hash;
    var marker = $(".marker").parent();

    for (let i = 0; i < marker.length; i++) {
        if (marker[i].hash == currentHash) {
            $(".marker").removeClass("marker-active");
            $(marker[i]).children().addClass("marker-active");

            console.log(currentHash);
        }
    }
}