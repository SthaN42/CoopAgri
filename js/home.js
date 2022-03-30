$(function () {

    $.getJSON("http://vps.e-mingo.net/coopagri/app/index.php?c=api&n=Campagne&where=id|1", function (response) {
        let campagne = $(".campagne");
        let nomCampagne = $("<p class='titreCampagne'>");
        let progressBar = $("<div class='progressBar'>");
        let contenant = $("<p class='contenant'>");
        let quantiteMax = response.result[0].previsions[0].campagne.previsions[0].quantite;        
        let valeurActuelle = "450";
        let pourcent = (valeurActuelle * 100) / quantiteMax;
        let boutons = $("<div class='icons'>");
        let modifyButton = $("<i class='fa-solid fa-pen-to-square modifyIcon'>");
        let deleteButton = $("<i class='fa-solid fa-trash-can deleteIcon'>");

        //Intitulé campagne
        nomCampagne.append(response.result[0].libelle);

        //Valeur de la barre de progression
        contenant.append("<span class='barValue'>" + valeurActuelle + "</span>T/<span class='maxBar'>" + quantiteMax + "</span>T");
        progressBar.append(contenant);

        //Création des boutons
        boutons.append(modifyButton).append(deleteButton);

        //Ajout affichage
        campagne.append(nomCampagne);
        campagne.append(progressBar);
        campagne.append(boutons);

        //Calcul de la barre de recherche
        progressBar.each(function (index, element) {
            $(element).css("--progress", pourcent.toString() + "%");    
        });
    })
        .fail(function (error) {
            console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

    let deleteButton = $(".deleteIcon");

    deleteButton.each(function (index, element) {
        $(element).on("click", function () {
            $(element).closest(".campagne").remove()
        })
    })

});