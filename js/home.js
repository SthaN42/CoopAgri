$(function() {

    let progressBar = $(".progressBar");
    let deleteButton = $(".deleteIcon");

    progressBar.each(function(index, element) {     
        let barValue = $( element ).find(".barValue").text();
        let maxBar = $( element ).find(".maxBar").text(); 
        let value = (barValue*100)/maxBar + "%";
        $(element).css("--progress", value.toString());
    });  
      
    deleteButton.each(function(index, element) {
        $(element).on("click", function(){
            $(element).closest(".campagne").remove()
        })
    })
    
    
    $.getJSON("http://vps.e-mingo.net/coopagri/app/index.php?c=api&c=Campagne"), function(Campagnes){
        Campagnes.data.forEach( campagne => {
            console.log("Test");  
        })
    }
    
});