jQuery(function () {
    $( window ).on( "load",function() {
        console.log("test");
        let progressbar = $( ".progressBar" );
        progressbar.css("--progress", "70%");
    });
});