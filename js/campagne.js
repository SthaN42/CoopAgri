let ressources = [
    {
        name: "Blé"
    }
]
const maxAmount = 100
let exploitants = [
    {
        name: "Blé dine",
        amount: 20
    },
    {
        name: "Or J",
        amount: 30
    },
    {
        name: "Blé ro",
        amount: 10
    }
]

this.gaugeStatus = function (exploitants) {
    let sumsAmount = 0

    for (let index = 0; index < exploitants.length; index++) {
        sumsAmount = sumsAmount + exploitants[index].amount
    }

    if (sumsAmount <= maxAmount) {
        $("h1").append(
            `<div id="gauge" style="--progress:` + sumsAmount + `%;"></div>`
        )
    }
    else {
        $("h1").append(
            `<p id="error">ERREUR : Le nombre a été dépassé</p>`
        )
    }

}

this.details = function () {
    xOffset = 10;
    yOffset = 10;
    var texte;
    $(".ressource").hover(
        function (e) {
            texte = $(this).attr('title');
            $(this).attr('title', '');
            $("body").append(
                `<p id='details'> Exploitant(s) <br/>` +
                showExploitants(exploitants) + `</p>`
            );
            $("#details")
                .css("top", (e.pageY - xOffset) + "px")
                .css("left", (e.pageX + yOffset) + "px")
                .fadeIn("slow");
        },
        function () {
            $(this).attr('title', texte);
            $("#details").remove();
        }
    );

    $(".ressource").mousemove(function (e) {
        $("#details")
            .css("top", (e.pageY - xOffset) + "px")
            .css("left", (e.pageX + yOffset) + "px");
    });
};

this.showExploitants = function (exploitants) {
    if (exploitants.length != 0) {
        let exploitant = exploitants[0].name + ': '
            + exploitants[0].amount + ' / ' + maxAmount + '<br/>'

        for (let index = 1; index < exploitants.length; index++) {
            exploitant = exploitant + (exploitants[index].name + ': '
                + exploitants[index].amount + ' / ' + maxAmount + '<br/>');
        }
        return exploitant
    }

}

this.ressource = function () {
    $("body").append(
        `<div>
        <div id="ressources">
            <div class="ressource" title="ress">
                <p>`+ ressources[0].name + `</p>
                <p> 60 / 100 </p>
                <p>TONNES</p>
            </div>
        </div>
    </div>`
    )
}

this.getRessourceName = function () {

}

$(document).ready(function () {
    gaugeStatus(exploitants);
    details();
    ressource();
});