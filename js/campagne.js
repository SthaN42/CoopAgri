jQuery(function () {
    const urlParams = new URLSearchParams(window.location.search);

    $.getJSON(
        "http://vps.e-mingo.net/coopagri/app/index.php?c=api&n=Campagne&a=get&v=id|" +
        urlParams.get("id"),
        (response) => {
            //Affichage du titre de la campagne
            const campagne = response.result[0];
            $("h1").append(
                campagne.libelle
            );

            //Affichage de la jauge de progression
            let sumsAmount = 0;
            let maxAmount = 0;

            for (const [key, value] of Object.entries(campagne.exploitants)) {
                for (let i = 0; i < value.categPrevisions.length; i++) {
                    sumsAmount += value.categPrevisions[i].quantite;
                }
            }
            for (const [key, value] of Object.entries(campagne.previsions)) {
                maxAmount += value.quantite;
            }

            if (sumsAmount <= maxAmount) {
                let pourcentAmout = (sumsAmount / maxAmount) * 100;
                $("#gauge_icon").prepend(
                    `<div id="gauge" style="--progress:` + pourcentAmout + `%;"></div>`
                );
            } else {
                $("#gauge_icon").prepend(
                    `<p id="error">ERREUR : Le nombre a été dépassé</p>`
                );
            }

            //Affichage des exploitants
            let exploitants = ""
            let i = 0
            for (const [key, value] of Object.entries(campagne.previsions)) {
                maxAmount = value.quantite
                exploitants += value.campagne.exploitants[i].toString + ": "
                    + campagne.exploitants[i].categPrevisions[0].quantite + " / "
                    + maxAmount + "<br/>";

                i++
            }

            //Affichage des ressources
            let libelle = ""
            let prevision = 0
            let quantite = 0
            i = 0

            for (const [key, value] of Object.entries(campagne.previsions)) {
                libelle = value.produit.categorie.libelle
                prevision = value.quantite
                quantite = campagne.exploitants[i].categPrevisions[0].quantite

                $("body").append(
                    `<div>
                        <div id="ressources">
                            <div class="ressource" title="ress">
                                <strong>` + libelle + `</strong> </br>
                                <p> `+ quantite + ` / ` + prevision + ` </p>
                                <p>TONNES</p>
                            </div>
                        </div>
                    </div> </br>`
                );
                i++
            }

            //Affichage des détails
            /*
            xOffset = 10;
            yOffset = 10;
            var texte;
            i = 0

            for (const [key, value] of Object.entries(campagne.previsions)) {
                console.log(value.campagne.exploitants[i].toString)
                if (value.campagne.exploitants[i].toString == ) {

                }
                i++
            }

            $(".ressource").hover(
                function (e) {
                    texte = $(this).attr("title");
                    $(this).attr("title", "");

                    $("body").append(
                        `<p id='details'> Exploitant(s) <br/>` + exploitants + `</p>`
                    );
                    $("#details")
                        .css("top", e.pageY - xOffset + "px")
                        .css("left", e.pageX + yOffset + "px")
                        .fadeIn("slow");
                },
                function () {
                    $(this).attr("title", texte);
                    $("#details").remove();
                }
            );

            $(".ressource").mousemove(function (e) {
                $("#details")
                    .css("top", e.pageY - xOffset + "px")
                    .css("left", e.pageX + yOffset + "px");
            });
            */
        }
    );

    //Suppression campagne
    let deleteButton = $(".fa-solid fa-trash-can deleteIcon")
    deleteButton.on("click", function () {
        $.getJSON(
            "http://vps.e-mingo.net/coopagri/app/index.php?c=api&a=del&n=Campagne&v=" + urlParams.get("id"),
            () => {
                let deleteButton = $(".fa-solid fa-trash-can deleteIcon")
                deleteButton.on("click", function () {
                    console.log("it worked")
                });
            }
        );
    });
});
