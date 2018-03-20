$(document).ready(function() {
    $("button#dark").click(function(){
      $(".wrapper").removeClass("light-scheme");
      $(".profile").removeClass("light-scheme");
      $(".wrapper").addClass("dark-scheme");
      $(".profile").addClass("dark-scheme");
    });

    $("button#light").click(function() {
      $(".wrapper").removeClass("dark-scheme");
      $(".profile").removeClass("dark-scheme");
      $(".wrapper").addClass("light-scheme");
      $(".profile").addClass("light-scheme");
  });
});
