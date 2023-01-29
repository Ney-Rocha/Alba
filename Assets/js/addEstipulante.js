
$(document).ready(function(){
    $(document).ready(function() {
           
        Swal.fire({
            title: '<h3 class="text-danger text-uppercase">Atenção!</h3>',
            html: '<p> O subestipulante de número <span> 2 </span>, <strong> CNPJ <span>41.618.079/0001-04</span> </strong> está com restrição. Para continuar, exclua o estipulante ou mude o CNPJ.</p>',
            imageUrl: '../Assets/img/icons/Error.png',
            imageHeight:80,
            imagewidht:80,
            imageAlt: 'Exclamação de alerta!',
            allowOutsideClick: false,
            allowEscapeKey: false
        })
       
    });

    // on / off select congenere
    $('input[type="radio"][name="typesecurity"]').on('change', function(){
        var typeSecurity = $('input[name="typesecurity"]:checked').val()
        if ( typeSecurity == 'newCongenere'){
            $('#selectCongenere').removeClass('hide')
            $('#selectCongenere').addClass('animate__fadeInRight')
        } else {
            $('#selectCongenere').addClass('hide')
            $('#selectCongenere').removeClass('animate__fadeInRight')
        }
    })
     
});