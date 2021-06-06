/* global $ */

function makeGrid() {

  var rows = $("#inputHeight").val();
  var cols = $("#inputWeight").val();

  var table = $("#pixelCanvas");

  table.children().remove();

  //Create rows
  for (var i = 0; i < rows; i++) {
    table.append("<tr></tr>");
  
    //Create cols
    for (var j = 0; j < cols; j++) {
      table.children().last().append("<td></td>");
    }
  }

  table.on("click", "td", function() {
    var color = $("input[type='color']").val();
    $(this).attr("bgcolor", color);
  });
}


$("input[type='submit']").click(function(e) {
  e.preventDefault(); 
  makeGrid();
});