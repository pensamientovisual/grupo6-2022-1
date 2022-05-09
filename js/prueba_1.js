let dataprecios = ["$13600","$15000","$22200","$34000"]

function verprecio(){
    $(".fprecios").toggle(400);
}
function vercondiciones(){
    $(".fcondiciones").toggle(400);
}
function verdesperdicios(){
    $(".fdesperdicios").toggle(400);
}
function vertransparencia(){
    $(".ftransparencia").toggle(400);
}

$(document).ready(function(){
    $("ul.tabs li:first").addClass("active");
    $("main section").hide();
    $("main section:first").show();

    $("ul.tabs li").click(function(){
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $("main section").hide();

        var activetab=$(this).attr("href");
        $(activetab).show();

    });

});

$(document).ready(function(){
 var selected=$(".filtro");
 selected.click(function(){
     var color = $(this).css('color')
     if (color=="rgb(0, 0, 0)") {
         $(this).css("background","#F9B792");
         $(this).css("color","#fff");
     } else{
         $(this).css("background","#fff");
         $(this).css("color","black");
     };
     
  });
});
