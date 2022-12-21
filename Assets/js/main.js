
$(document).ready(function(){
    $("#sidebar_control").on("click", function(){
        $("#sidebar").toggleClass("show")
    })

    $('#sidebar_menu a').on('click', function (e) {
        e.preventDefault();
        if ($(window).width() < 575) {
            $('#sidebar').removeClass("show");
        }
    });
});