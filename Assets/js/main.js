
$(document).ready(function(){
    $("#sidebar_control").on("click", function(){
        $("#sidebar").toggleClass("show")
        window.scrollTo(0, 0);
       
    })

    $('#sidebar_menu a').on('click', function (e) {
        
        if ($(window).width() < 575) {
            e.preventDefault();
            $('#sidebar').removeClass("show");
        }
    });

    $('ul.progressbar-step li a').on('click', function(event) {
        const parentListItem = $(this).parent('li');
        if (!parentListItem.hasClass('active')) {
            event.preventDefault();
        }
    });
   
});

