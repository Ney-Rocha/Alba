
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

    // mask
    $('.cpf').mask('000.000.000-00');
    $('.cnpj').mask('00.000.000/0000-00');
    $('.percent').mask('##0%', {reverse: true});
    $('.celphones').mask(CelMaskBehavior, spOptions);
    $('.cep').mask('00000-000');
    $('.date').mask('00/00/0000');

    //  chosen plugin
    $(".chosen-select").chosen({disable_search_threshold: 2});
});

//   MASk
var CelMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
spOptions = {
    onKeyPress: function (val, e, field, options) {
        field.mask(CelMaskBehavior.apply({}, arguments), options);
    }

};