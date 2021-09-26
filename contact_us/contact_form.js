$(document).ready(function(){
    $("#ajax-contact-form").submit(function(){
    //alert();
    var str = $(this).serialize();
    
       $.ajax({
       type: "POST",
       url: "contact_form/contact.php",
       data: str,
       success: function(msg){
        //alert(msg);
            
    
            if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
            {
            var result = '<div class="bg-success text1">Your message has been sent. Thanks!</div>';
            $("#note1").html(result);
            //$("#fields1").html(result);
            }
            else
            {
                //$("#fields1").html('');
                $("#note1").html(msg);
            //var result = msg;
            }
    
            /*$(this).hide();
            $(this).html(result).slideDown("slow");
    
            $(this).html(result);*/
    
            
            }
    
     });
    
    return false;
    
    });
    
    });
    