$(document).ready(function() {
 try {
  $.browserSelector();
  if ($("html").hasClass("chrome")) {
   $.smoothScroll();
  }
 } catch (err) {

 };

});
$(document).ready(function() {
 $("a.fancyimage").fancybox();
});

$("form").submit(function(e) {
 var formID = $(this).attr('id');
 var formNm = $('#' + formID);
 var postData = $(this).serializeArray();
 var formURL = 'form.php';
 hash_length = postData.length;
 for (var i = 0; i < hash_length; i++) {
  if (!postData[i].value) {
   $('.modal-body p').html("Ошибка! Не все поля заполнены");
   e.preventDefault();
   return;
  }
 }
 $.ajax({
  url: formURL,
  type: "POST",
  data: postData,
  success: function(data) {
   $('.modal-body p').html('Ваша заявка успешно отправлена!');
  },
  error: function() {

  }
 });
 e.preventDefault();
});

jQuery(function($) {
 $("input[type=tel]").mask("+7 (999) 999-9999");
});

$(document).ready(function() {
 $('a[href*=#].href').bind("click", function(e) {
  var anchor = $(this);
  $('html, body').stop().animate({
   scrollTop: $(anchor.attr('href')).offset().top
  }, 1000);
  e.preventDefault();
 });
 return false;
});

$(document).ready(function() {
 var text = 'Click';
 var text2 = 'Close';
 var word;
 $("body").find("#btn-1").click(function() {
  word = $("#formmail-1").attr("class");
  if (word == 'hidden') {
   $('#formmail-1').removeClass('hidden');
   $('#formmail-2').addClass('hidden');
   $('#formmail-3').addClass('hidden');
   $('#formmail-4').addClass('hidden');
  }
 });
 $("body").find("#btn-2").click(function() {
  word = $("#formmail-2").attr("class");
  if (word == 'hidden') {
   $('#formmail-2').removeClass('hidden');
   $('#formmail-1').addClass('hidden');
   $('#formmail-3').addClass('hidden');
   $('#formmail-4').addClass('hidden');
  }
 });
 $("body").find("#btn-3").click(function() {
  word = $("#formmail-3").attr("class");
  if (word == 'hidden') {
   $('#formmail-3').removeClass('hidden');
   $('#formmail-2').addClass('hidden');
   $('#formmail-1').addClass('hidden');
   $('#formmail-4').addClass('hidden');
  }
 });
 $("body").find("#btn-4").click(function() {
  word = $("#formmail-4").attr("class");
  if (word == 'hidden') {
   $('#formmail-4').removeClass('hidden');
   $('#formmail-2').addClass('hidden');
   $('#formmail-3').addClass('hidden');
   $('#formmail-1').addClass('hidden');
  }
 });
});
