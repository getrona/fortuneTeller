
$(document).ready(function(){
  $("form#fortune_survey").submit(function(event){
    event.preventDefault();
    $("#goodLuck").show();
    $("input:checkbox[name=goodFortune]:checked").each(function(){
      var goodFortuneMode = $(this).val();
      $('#goodLuck').append(goodFortuneMode + "<br>");
    });
    $("#badLuck").show();
    $("input:checkbox[name=badFortune]:checked").each(function(){
      var badFortuneMode = $(this).val();
      $('#badLuck').append(badFortuneMode + "<br>");
    });
    $('#fortune_survey').hide();
  });
});
