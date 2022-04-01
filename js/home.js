$(function () {

    $.getJSON("http://vps.e-mingo.net/coopagri/app/index.php?c=api&n=Campagne", function (response) {
        let indexCampagne = 0;
        
        //Récupération de toutes les campagnes
        while (response.result[indexCampagne] != null){
            let resultat = response.result[indexCampagne];
            let listeCampagnes = $("#listeCampagnes");
            let campagne;
            if (indexCampagne%2 == 0) {
                campagne = $("<tr class='campagne grey'>");
            } else {
                campagne = $("<tr class='campagne green'>");
            }
            let nomCampagne = $("<td class='titreCampagne'>");
            let exploitant = $("<td class='exploitant'>");
            let indexExploitant = 0;
            let boutons = $("<td class='icons'>");
            let modifyButton = $("<i class='fa-solid fa-pen-to-square modifyIcon'>");
            let deleteButton = $("<i class='fa-solid fa-trash-can deleteIcon'>");

            //Intitulé campagne
            nomCampagne.append(resultat.libelle);

            //Ajout des exploitants
            while (resultat.exploitants[indexExploitant] != null) {
                exploitant.append(resultat.exploitants[indexExploitant].toString + " ");
                indexExploitant++;
            }     
            
            //Création des boutons
            boutons.append(modifyButton).append(deleteButton);
            
            //Ajout affichage
            campagne.append(nomCampagne)
                    .append(exploitant)
                    .append(boutons);
            
            //Ajout de la campagne
            listeCampagnes.append(campagne);

            //Incrémentation de l'index de la campagne
            indexCampagne++;
        }
    })
    .fail(function (error) {
        console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })

    let deleteButton = $(".deleteIcon");

    //Ecoute pour chaque bouton Delete
    deleteButton.each(function (index, element) {
        $(element).on("click", function () {
            $(element).closest(".campagne").remove()
        })
    })
});