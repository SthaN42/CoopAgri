jQuery(function () {
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
    }

    function isNumber(str) {
        if (typeof str != "string") return false;
        return !isNaN(str) && !isNaN(parseFloat(str));
    }
});
