$(document).ready(function() {


// D.R.Y. click function
  $("h3.vocab").click(function(){
    $("span").removeClass("active");
    $("span." + this.id).addClass("active");
    $("span.active").siblings().hide();
    $("span.active").show();
  });
// End

  $("#loopbtn").click(function() {
    var looping = ['I', 'Love', 'Loops!']
    looping.forEach(function(looping) {
      alert(looping);
    });
  });

  $("form#form1").submit(function(event) {
    var nameInput = $("input#person").val();
    $(".person1").text(nameInput);
    $("#formGreet").show();
    event.preventDefault();
  });
});


// Enlongated click function


  // $("h3#markdown").click(function(){
  //   $("span").removeClass("active");
  //   $("span.markdown").addClass("active");
  //   $("span").siblings().hide();
  //   $("span.active").show();
  // });
  //
  // $("h3#looping").click(function(){
  //   $("span").removeClass("active");
  //   $("span.looping").addClass("active");
  //   $("span.active").siblings().hide();
  //   $("span.active").show();
  // });
  //
  // $("h3#forms").click(function(){
  //   $("span").removeClass("active");
  //   $("span.forms").addClass("active");
  //   $("span.active").siblings().hide();
  //   $("span.active").show();
  // });
  //
  // $("h3#css").click(function(){
  //   $("span").removeClass("active");
  //   $("span.css").addClass("active");
  //   $("span.active").siblings().hide();
  //   $("span.active").show();
  // });
  //
  // $("h3#bootstrap").click(function(){
  //   $("span").removeClass("active");
  //   $("span.bootstrap").addClass("active");
  //   $("span.active").siblings().hide();
  //   $("span.active").show();
  // });
  //
  // $("h3#divspan").click(function(){
  //   $("span").removeClass("active");
  //   $("span.divs").addClass("active");
  //   $("span.active").siblings().hide();
  //   $("span.active").show();
  // });
  //
  // $("h3#floats").click(function(){
  //   $("span").removeClass("active");
  //   $("span.floats").addClass("active");
  //   $("span.active").siblings().hide();
  //   $("span.active").show();
  // });
  //
  // $("h3#box").click(function(){
  //   $("span").removeClass("active");
  //   $("span.box").addClass("active");
  //   $("span.active").siblings().hide();
  //   $("span.active").show();
  // });
