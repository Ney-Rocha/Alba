
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

    //  chosen plugin
    $(".chosen-select").chosen({disable_search_threshold: 10});
});

//  SWIRCHERY
// var elem = document.querySelector('.js-switch');
// var switchery = new Switchery(elem, { color: '#00A651' });

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

elems.forEach(function(html) {
    var switchery = new Switchery(html,  {color: '#00A651' });
});