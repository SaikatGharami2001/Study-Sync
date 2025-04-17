$("#hamburger-icon").click(function () {
    $("#mobile-menu").toggleClass("show");
});

// Upper Dark Button
$("#dark-bhai").click(() => {
    $("body").addClass("dark-mode");
    $("body").removeClass("light-mode");
});

// Upper Light Button
$("#light-bhai").click(() => {
    $("body").addClass("light-mode");
    $("body").removeClass("dark-mode");
});

// Lower Dark Button
$("#lower-dark-bhai").click(() => {
    $("body").addClass("dark-mode");
    $("body").removeClass("light-mode");
});

// Lower Light Button
$("#lower-light-bhai").click(() => {
    $("body").addClass("light-mode");
    $("body").removeClass("dark-mode");
});
