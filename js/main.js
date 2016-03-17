$(document).ready(function() {

  $("span").click(function(event){
    var elementClicked = event.target;

    if ( $(elementClicked).html() === "C" ) {
      $("#screen").empty();
    }

}
    if ( $(elementClicked).html() === "=" ) {
      var total = eval("#screen");
      $("#screen").empty();
      $("#screen").append((total)
    }

    if ( $(elementClicked).html() === "x" ) {
      append("*");
    //



  });
});


// if button is a number or an opperator add it to the screen.
// if button is "C" clear the screen
// if button is "=" run the equation. eval(screen text)
// if x append "*"
// if
