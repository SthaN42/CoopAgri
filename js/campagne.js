this.zoom_image = function () {
    xOffset = 10;
    yOffset = 10;
    var texte;
    let exploitants = ["Blé dine : 20/100","Blé dine : 20/100","Blé dine : 20/100"]
    $(".ressource").hover(
        function (e) {
            texte = $(this).attr('title');
            $(this).attr('title', '');
            $("body").append(
                `<p id='details'> Exploitant(s) <br/>` + showExploiters(exploitants) + `</p>`
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

this.showExploiters = function (exploitants) {
    exploitants = this.exploitants
    for (let position = 0; position < exploitants.length; position++) {
        return exploitants[position];
    }
}

$(document).ready(function () {
    zoom_image();
});