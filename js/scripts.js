$(document).ready(function() {

  $("h3#markdown").click(function(){
    $("p").removeClass("active");
    $("p.markdown").addClass("active");
    $("p.active").siblings().hide();
    $("p.active").show();
  });

  $("h3#looping").click(function(){
    $("p").removeClass("active");
    $("p.looping").addClass("active");
    $("p.active").siblings().hide();
    $("p.active").show();
  });

  $("h3#forms").click(function(){
    $("p").removeClass("active");
    $("p.forms").addClass("active");
    $("p.active").siblings().hide();
    $("p.active").show();
  });

  $("h3#css").click(function(){
    $("p").removeClass("active");
    $("p.css").addClass("active");
    $("p.active").siblings().hide();
    $("p.active").show();
  });

  $("h3#bootstrap").click(function(){
    $("p").removeClass("active");
    $("p.bootstrap").addClass("active");
    $("p.active").siblings().hide();
    $("p.active").show();
  });

  $("h3#divspan").click(function(){
    $("p").removeClass("active");
    $("p.divs").addClass("active");
    $("p.active").siblings().hide();
    $("p.active").show();
  });

  $("h3#floats").click(function(){
    $("p").removeClass("active");
    $("p.floats").addClass("active");
    $("p.active").siblings().hide();
    $("p.active").show();
  });

  $("h3#box").click(function(){
    $("p").removeClass("active");
    $("p.box").addClass("active");
    $("p.active").siblings().hide();
    $("p.active").show();
  });
});
