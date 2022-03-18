let ressources = {
    ble: "Blé",
    pomme: "Pomme",
    porc: "Porc"
}
let maxAmount = 0


let exploitants = {
    ble: [
        {
            maxAmount: 100
        },
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
    ],
    pomme: [
        {
            maxAmount: 70
        },
        {
            name: "Pom yeet",
            amount: 20
        },
        {
            name: "Pomme d'or",
            amount: 30
        },
        {
            name: "Gaple",
            amount: 10
        }
    ],
    porc: [
        {
            maxAmount: 80
        },
        {
            name: "Peppa",
            amount: 20
        },
        {
            name: "Pigguard",
            amount: 30
        },
        {
            name: "Porc no",
            amount: 10
        }
    ]
}

this.gaugeStatus = function () {
    let sumsAmount = 0

    for (const [key, value] of Object.entries(exploitants)) {
        for (let i = 1; i < value.length; i++) {
            sumsAmount += value[i].amount;
        }
        maxAmount += value[0].maxAmount
    }

    if (sumsAmount <= maxAmount) {
        let pourcentAmout = sumsAmount / maxAmount * 100
        $("#gauge_icon").prepend(
            `<div id="gauge" style="--progress:` + pourcentAmout + `%;"></div>`
        )
    }
    else {
        $("#gauge_icon").prepend(
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
                showExploitants() + `</p>`
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

this.showExploitants = function () {
    if (exploitants.ble.length != 0) {
        let exploitant = ''

        for (const [key, value] of Object.entries(exploitants)) {
            for (let i = 1; i < value.length; i++) {
                exploitant = exploitant + (value[i].name + ': '
                    + value[i].amount + ' / ' + value[0].maxAmount + '<br/>');
            }
        }
        return exploitant
    }

}

this.showRessources = function () {
    for (const [key, value] of Object.entries(ressources)) {
        $("body").append(
            `<div>
            <div id="ressources">
                <div class="ressource" title="ress">
                    <p>`+ value + `</p>
                    <p> 60 / 100 </p>
                    <p>TONNES</p>
                </div>
            </div>
        </div>`
        )
    }
}

// this.showRessources = function () {
//     for (const [key, name] of Object.entries(ressources)) {
//         $("body").append(
//             `<div>
//                 <div id="ressources">
//                     <div class="ressource" title="ress">
//                         <p id="name">`+ name + `</p>`
//         )
//         for (const [key, value] of Object.entries(exploitants)) {
//             console.log(value)
//             $("#name").append(
//                 `<p id="goal"> /` + value[0].maxAmount + ` </p>`
//             )
//             for (let i = 1; i < value.length; i++) {
//                 $("#goal").prepend(
//                      value[i].amount
//                 )
//                 .append(+ value[0].maxAmount + ` </p>
//                 <p>TONNES</p>
//             </div>
//         </div>
//     </div>`)
//             }
//         }
//     }
// }

this.deleteButton = function () {
    let deleteButton = $(".deleteIcon");

    deleteButton.each(function (index, element) {
        $(element).on("click", function () {
            $(element).closest(".campagne").remove()
        })
    })
}

$(document).ready(function () {
    gaugeStatus();
    showRessources();
    deleteButton();
    details();
});