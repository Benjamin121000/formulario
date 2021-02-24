$(document).ready(function(){

     $('#btnSend').click(function(){

         var errores = '';

         //    Validando el Nombre ===========
         if( $('#names').val() == '' ){
             errores += '<p>Escriba un nombre</p>';
             $('#names').css("border-bottom-color", "#f14b4b")
         }   else{
            $('#names').css("border-bottom-color", "#d1d1d1")
         }

          //    Validando el Correo ===========

         if( $('#email').val() == '' ){
             errores += '<p>Ingrese un correo</p>'; 
             $('#email').css("border-bottom-color", "#f14b4b")
         }   else{
            $('#email').css("border-bottom-color", "#d1d1d1")
         }

          //    Validando el Mensaje ===========

         if( $('#mensaje').val() == '' ){
             errores += '<p>Escriba un mensaje</p>'; 
             $('#mensaje').css("border-bottom-color", "#f14b4b")
         }   else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
         }

        //  Enviando Mensaje
         if( errores == '' == false){
             var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                 '<h3>Errores Encontrados</h3>'+
                                 errores+
                                 '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                  '</div>'

              $('body').append(mensajeModal);
         }

        //  CERRANDO MODAL ====
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });

     });

});