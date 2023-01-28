
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
     
});
