$(document).ready(function(){
  var skillBar = $('.skill_bar');
  var Bar_width = ['80%', '80%', '65%', '70%', '20%', '30%', '30%', '20%'];


  skillBar.each(function(index){
    $(this).animate(
      {width: Bar_width[index]}, 5000, 'swing'
    );
    // $(this).css("width", Bar_width[index]);
  });

});

