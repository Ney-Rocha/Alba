
$(document).ready(function(){
    
    // exibir/ esconder parte do form limpando campos
    $('input[type="radio"][name="cadEdit"]').on('change', function(){
        var editCadastro = $('input[name="cadEdit"]:checked').val();
        if(editCadastro == 'data-yes'){
            $('#add-data').removeClass('animate__fadeInUp')
            $('#add-data').addClass('hide')                     
            $('#add-data .form-control').each(function (index){
                ($(this).val(" "))
            })
        } else if (editCadastro == 'data-no'){  
            $('#add-data').removeClass('hide')
            $('#add-data').addClass('animate__fadeInUp')
        } 
    })

       // mask
       $('.cpf').mask('000.000.000-00');
       $('.cnpj').mask('00.000.000/0000-00');
       $('.percent').mask('##0%', {reverse: true});
       $('.celphones').mask(CelMaskBehavior, spOptions);
       $('.cep').mask('00000-000');
       $('.date').mask('00/00/0000');
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