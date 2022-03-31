jQuery(function () {

    // créer une nouvelle campagne
    $("#addCampainForm").on("submit", (e) => {
        e.preventDefault();
        
        let campain = {
            debut: new Date($("#debut").val()),
            fin: new Date($("#fin").val()),
            libelle: $("#libelle").val(),
            description: $("#description").val(),
        }
        
        if (campain.fin > campain.debut) {
            let data = $.param(campain);
            
            let url = "http://vps.e-mingo.net/coopagri/app/index.php?c=api&a=set&n=Campagne&entId=0&" + data;
            
            $.ajax({
                method: "POST",
                url: url,
                success: () => {window.location.href = "../pages/home.html"},
                fail: () => {alert("Erreur lors de l'envoi du formulaire")},
            });
        } else {
            $(".error").remove();
            $("#fin").parent().append($("<strong class='error'> La date de fin doit être supérieure à la date de début.</strong>"))
        }
    });
});
