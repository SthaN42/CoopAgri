jQuery(function () {
    // tableau des éléments de la campagne
    let elements = [];

    // bouton d'ajout d'éléments de campagne
    $("#addElementBtn").on("click", () => {
        let product = prompt("Nom du produit :");
        if (product) {
            let quantity = prompt("Quantité (en tonnes) :");
            if (isNumber(quantity)) {
                let element = {
                    product: product,
                    quantity: quantity,
                };
                addElement(element);
            }
        }
        return false;
    });

    // ajout d'éléments dans la campagne
    function addElement(element) {
        let newElem = $("<div/>");
        newElem
            .append($("<p/>", { text: element.product }))
            .append(
                $("<p/>", { text: element.quantity }).append(
                    $("<span/>", { text: " Tonnes" })
                )
            )
            .addClass("campain-element");
        $("#elements-container").append(newElem);
        elements.push(element);
    }

    // permet de vérifier si la quantité de l'élément à ajouter est bien un entier
    function isNumber(str) {
        if (typeof str != "string") return false;
        return !isNaN(str) && !isNaN(parseFloat(str));
    }

    $("#addCampainForm").on("submit", (e) => {
        e.preventDefault();

        let data = $("#addCampainForm").serializeArray();
        data.push({
            name: "elements",
            value: elements,
        });

        console.table(data);
    });
});
