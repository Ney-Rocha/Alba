
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
});
