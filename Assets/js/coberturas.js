
$(document).ready(function(){
    //troca de tipo de perfil (uniforme/ Escalonável)
    $('ul.type-profile li a').click(function(i){
        $(this).parent().siblings().children().removeClass('active');
        $(this).parent().parent().parent().siblings().children().removeClass('active');
        $(this).addClass('active');
        var id = $(this).data('id');    
        var content = $(this).parent().parent().parent().siblings().children().filter(function() { 
            return $(this).data("id") == id 
        });    
        content.addClass('active');
    });

    

    // Select prêmio
    $(document).ready(function(){
        $('.calc-btn-group li').on('click', function(){
            $(this).siblings().removeClass('active')
            $(this).addClass('active')
        })
    });

});

//  SWIRCHERY
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

elems.forEach(function(html) {
    var switchery = new Switchery(html,  {color: '#00A651' });
});

