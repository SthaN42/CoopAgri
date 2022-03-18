

     $.getJSON("http://vps.e-mingo.net/coopagri/app/index.php?c=api&n=campagne", function(response){
      let data = JSON.stringify(response);
      console.log(data);
  })
  .fail(function(error){
      console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
  })

$(function(){
  $('#btnSub').on('click',creationIndividu)
})

function creationIndividu() {
 // console.log($('#username').val());
  $.ajax({
    url:'http://vps.e-mingo.net/coopagri/app/index.php?c=CompteIndividu&a=enregistrer&entId=0&login='+$('#username').val()+'&pass='+$('#password').val(),
    method:"POST",
    datatype:"json",
    
  })
  .done(function(){
    console.log($('#username').val());
  })
  .fail(function(error){
    console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
  })
} 







$(function verifPassword(username,password) {
  $.ajax({
    url:`http://vps.e-mingo.net/coopagri/app/index.php?c=api&n=campagne&a=set&o=auth&name=${username}&val=${password}`,
    method:"POST",
    datatype:"json",
    
  })
  
  .fail(function(error){
    console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
  })
})


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
    
    
});