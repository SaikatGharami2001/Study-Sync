$("#hamburger-icon").click(function () {
    $("#mobile-menu").toggleClass("show");
});

$("#dark-bhai").click(() => {
    $("body").addClass("dark-mode");
    $("body").removeClass("light-mode");
});

$("#light-bhai").click(() => {
    $("body").addClass("light-mode");
    $("body").removeClass("dark-mode");
});
