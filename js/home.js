$(function () {

    $.getJSON("http://vps.e-mingo.net/coopagri/app/index.php?c=api&n=Campagne&where=id|1", function (response) {
        let quantiteMax = JSON.stringify(response.result[0].previsions[0].campagne.previsions[0].quantite);
        let valeurActuelle = "450";
        let pourcent = (quantiteMax * 100) / valeurActuelle;
        //let campagne = JSON.stringify(response.result[0].previsions[0].campagne);
        console.log(quantite1);
        //console.log(campagne.previsions[0].quantite);
        /*for (let i = 0; i < previsions.length; i++) {
            console.log(previsions[i].quantite);
        }
        previsions.forEach(prevision => {
            console.log(prevision.quantite);
        });*/
        $('.campagne').find(".progressBar").append("<p class='contenant'>");
        $('.contenant').append("<span class='barValue'>" + valeurActuelle + "</span>T/<span class='maxBar'>" + quantiteMax + "</span>T");
        $(".progressBar").each(function (index, element) {
            $(element).css("--progress", pourcent.toString());    
        });
    })
        .fail(function (error) {
            console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

    let progressBar = $(".progressBar");
    let deleteButton = $(".deleteIcon");

    /*progressBar.each(function (index, element) {
        let barValue = $(element).find(".barValue").text();
        let maxBar = $(element).find(".maxBar").text();
        let value = (barValue * 100) / maxBar + "%";
        $(element).css("--progress", value.toString());
    });*/

    deleteButton.each(function (index, element) {
        $(element).on("click", function () {
            $(element).closest(".campagne").remove()
        })
    })

});