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

$(document).ready(function() {
    var currentPage = window.location.pathname.split("/").pop().split(".")[0];
    // console.log(currentPage);

    var arr = [];
    var currentPageIndex;
    var pages = document.getElementsByClassName("drawer-link");
    for (let i = 0; i < pages.length; i++) {
        arr.push(pages[i].text.toLowerCase());
        // console.log(arr[i]);
    }

    if (arr.includes(currentPage)) {
        // console.log("success");
        currentPageIndex = arr.indexOf(currentPage);
        $(pages[currentPageIndex]).addClass("drawer-nav-item-active");
    } else if (currentPage == "index") {
        currentPageIndex = arr.indexOf("home");
        $(pages[currentPageIndex]).addClass("drawer-nav-item-active");
    }
})

// detecting click of the caret in the question container
// toggling answer in question containers
$(document).ready(function() {
    $(".question-container .icon").click(function() {
        // passing the top of the div
        // toggleQuestionAnswer($(this).parents().parents().get(0));
    });

    $(".question-container .question").click(function() {
        // passing the top of the div
        toggleQuestionAnswer($(this).parents().get(0));
    });
});

function toggleQuestionAnswer(x) {
    var answer = $(x).find(".answer").get(0);
    var answerDisplay = $(answer).css("display");
    // console.log(x);

    if (answerDisplay == "block") {
        $(answer).css("display", "none");
        $(x).removeClass("question-active");
    } else {
        $(answer).css("display", "block");
        $(x).addClass("question-active");
    }
}

$(document).ready(function() {
    addSpacerToGrid();
})

function addSpacerToGrid() {
    $("card-wrapper").clone().appendTo("body");
    console.log('ran');
}