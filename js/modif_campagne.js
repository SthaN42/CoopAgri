jQuery(function () {
    const urlParams = new URLSearchParams(window.location.search);

    //récupération des données de la campagne
    $.getJSON(
        "http://vps.e-mingo.net/coopagri/app/index.php?c=api&n=Campagne&a=get&v=id|" +
            urlParams.get("id"),
        (response) => {
            const campagne = response.result[0];

            $("#debut").val(campagne.debut.split(" ")[0]);
            $("#fin").val(campagne.fin.split(" ")[0]);
            $("#libelle").val(campagne.libelle);
            $("#description").val(campagne.description);
        }
    );

    // initialisation du bouton de retour
    $(".back-button").attr(
        "href",
        "/pages/campagne.html?id=" + urlParams.get("id")
    );

    // modifier une campagne
    $("#modifyCampainForm").on("submit", (e) => {
        e.preventDefault();

        let campain = {
            debut: new Date($("#debut").val()),
            fin: new Date($("#fin").val()),
            libelle: $("#libelle").val(),
            description: $("#description").val(),
        };

        if (campain.fin > campain.debut) {
            let data = $.param(campain);

            let url =
                "http://vps.e-mingo.net/coopagri/app/index.php?c=api&a=set&n=Campagne&entId=" +
                urlParams.get("id") +
                "&" +
                data;

            $.ajax({
                method: "POST",
                url: url,
                success: () => {
                    window.location.href = "../pages/home.html";
                },
                fail: () => {
                    alert("Erreur lors de l'envoi du formulaire");
                },
            });
        } else {
            $(".error").remove();
            $("#fin")
                .parent()
                .append(
                    $(
                        "<strong class='error'> La date de fin doit être supérieure à la date de début.</strong>"
                    )
                );
        }
    });
});
