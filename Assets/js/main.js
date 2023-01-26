
$(document).ready(function(){
    $("#sidebar_control").on("click", function(){
        $("#sidebar").toggleClass("show")
    })

    $('#sidebar_menu a').on('click', function (e) {
        
        if ($(window).width() < 575) {
            e.preventDefault();
            $('#sidebar').removeClass("show");
        }
    });

    //  chosen plugin
    $(".chosen-select").chosen({disable_search_threshold: 2});
});

