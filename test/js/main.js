$(document).ready(function() {
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  };

});
$(document).ready(function() { 
	$("a.fancyimage").fancybox(); 
}); 

$(document).ready(function () {
    $("form").submit(function () {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        $.ajax({
            cache: false,
            type: "POST",
            url: 'form.php',
            data: formNm.serialize(),
            success: function (data) {
                $('.modal-body p').html('Ваша заявка отправлена!')
                $('.modal-body p').fadeIn(1500); 
                $('#' + formID).find('input[type=text], input[type=tel], input[type=email]').val('');
                setTimeout(function() {
                   $('.modal-body p').fadeOut(1000);
               }, 6000);
            },
            error: function (jqXHR, text, error) {
                $('.modal-body p').html('Ваша заявка не отправлена, попробуйте еще раз!');         
            }
        });
        return false;
    });
});