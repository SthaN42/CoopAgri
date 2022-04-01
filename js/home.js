$(function () {

    $.getJSON("http://vps.e-mingo.net/coopagri/app/index.php?c=api&n=Campagne&where=id|1", function (response) {
        let indexCampagne = 0;
        
        while (response.result[indexCampagne] != null){
            let resultat = response.result[indexCampagne];
            let listeCampagnes = $("#listeCampagnes");
            let campagne = $("<tr class='campagne grey'>");
            let nomCampagne = $("<td class='titreCampagne'>");
            let exploitant = $("<td class='exploitant'>");
            let indexExploitant = 0;
            /*let progressBar = $("<div class='progressBar'>");
            let contenant = $("<p class='contenant'>");
            let indexPrevisions = 0;
            let quantiteMax = 0;        
            let valeurActuelle = "450";
            let pourcent = 0;*/
            let boutons = $("<td class='icons'>");
            let modifyButton = $("<i class='fa-solid fa-pen-to-square modifyIcon'>");
            let deleteButton = $("<i class='fa-solid fa-trash-can deleteIcon'>");

            //Intitulé campagne
            nomCampagne.append(resultat.libelle);

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
            
            listeCampagnes.append(campagne);
            
            //Valeur de la barre de progression
            /*while (response.result[0].previsions[indexPrevisions] != null) {
                let valeur = response.result[0].previsions[indexPrevisions].quantite;
                quantiteMax += valeur;
                indexPrevisions++;
            }
            contenant.append("<span class='barValue'>" + valeurActuelle + "</span>T/<span class='maxBar'>" + quantiteMax + "</span>T");
            progressBar.append(contenant);*/

            //Calcul de la barre de recherche
            /*pourcent = (valeurActuelle * 100) / quantiteMax;;
            progressBar.each(function (index, element) {
                $(element).css("--progress", pourcent.toString() + "%");    
            });*/ 

            indexCampagne++;
        }
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