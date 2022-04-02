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
            let modifyButton = $("<td class='fa-solid fa-pen-to-square modifyIcon'>");

            //Intitulé campagne
            nomCampagne.append(resultat.libelle);

            //Ajout des exploitants
            while (resultat.exploitants[indexExploitant] != null) {
                exploitant.append(resultat.exploitants[indexExploitant].toString + "<br>");
                indexExploitant++;
            }     
            
            //Ajout affichage
            campagne.append(nomCampagne)
                    .append(exploitant)
                    .append(modifyButton);

            modifyButton.on("click", () => {
                window.location.href = "/pages/campagne.html";
            });

            //Ajout de la campagne
            listeCampagnes.append(campagne);

            //Incrémentation de l'index de la campagne
            indexCampagne++;
        }
    })
    .fail(function (error) {
        console.log("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })
});