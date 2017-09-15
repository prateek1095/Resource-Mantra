    //closing the alert bar automatically after 4 seconds
      $("#myAlert").fadeTo(8000, 500).slideUp(500, function(){
      $("#myAlert").alert('close');
    });

      $('#number').on("keyup", action);

      function action(){
        if($('#number').val().length > 0){
        $('.budget').prop('disabled', false);
        }else{
          $('.budget').prop('disabled', true);
        }
      }
