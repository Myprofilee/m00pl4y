$(document).ready(function () {
    $("#MooPlay").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".mooplay-search li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$(document).ready(function () {
    $("#MooPlay-Artist").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".mooplay-search-artists li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

function handleTagRemove() {
    $('.remove-tag').on('click', function () {
        $(this).parent().remove();
    })
}
handleTagRemove();
$('.main-in').on('keypress', function (e) {
    if (e.which == 13 && $(this).val().length > 0) {
        var x = $(this).val();
        $('.badge-area').append("<span class='btn tag-btn'>" + x + "<i class='fa-solid fa-xmark remove-tag cross'></i></span>");
        $(this).val(null);
        handleTagRemove();
    }
});