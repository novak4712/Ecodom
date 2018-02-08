$(document).ready(function () {

    $(".menu__icon").on("click", function () {
        $(this).closest(".menu").toggleClass("menu_state_open");
    });

    $(".form-section").on("click", ".prepend-icon", function () {
        $(".prepend-icon").each(function () {
            $(this).removeClass("select_input")
        });
        $(this).toggleClass("select_input");
    });

    $('#popup__toggle').click(function () {
        var popup_id = $('#' + $(this).attr("rel"));
        $(popup_id).show();
        $('.overlay_form').show();
    });
    $('.overlay_form').click(function () {
        $('.overlay_form, .modal-form').hide();
    });



        $('.flexslider').flexslider({
            animation: "slide"
        });

});



