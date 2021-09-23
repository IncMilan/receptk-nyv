var receptek=[];
$(function(){
    

    $.ajax(
        {url: "etelek.json",
        success: function(result){
        console.log(result);
        receptek=result.receptkonyv;
        console.log(receptek);
        megjelenit();

    }}
    );

});
function megjelenit(){
    $("article").append("<table>");
    var txt ="<tr><th>Név</th><th>Elkészítési idő</th><th>Kép</th><th>Leírás</th><th>Hozzávalók</th></tr>";
    for (var i= 0; i < receptek.length; i++) {
        txt += "<tr id='" + i + "'>";
        
    
    for (var item in receptek[i] ) {
        txt += "<td>" + receptek[i][item] + "</td>";
        
    }

    txt += "</tr>";
    }
    $("article table").append(txt);
    $("article table tr").click(kattint);
    $("article table tr").hover(hatter);
    $("#jobb").click(etelkivalasztas);
    $("#bal").click(etelkivalasztas);


    
}
function kattint(){
    var id = $(this).attr("id");
    console.log($(this).attr("id"));
    $("#kozep").html("<img src='"+receptek[id]["kep"]+"'>");
    $("#kozep").append("<h3>"+ receptek[id]["nev"] +"</h3>");
    $("#kozep").append("<h4>Hozzávalók</h4>" + receptek[id]["hozzavalok"]);
}
function hatter(){
    $("article table tr").hover(function(){
        $(this).css("background-color", "red");
        }, function(){
        $(this).css("background-color", "darkgrey");
      });
}
function etelkivalasztas(){
    if($(this).attr("id") !== "fejlec"){
        sorID = Number($(this).attr("id"));
        console.log(receptek[sorID].kep);
        $("kep img").attr("src",receptek[sorID].kep);
        $("kep img").attr("src",receptek[sorID].nev);

    }
    
}

