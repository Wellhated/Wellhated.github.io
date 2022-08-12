$(document).ready(() => {
    if(window.matchMedia("(max-width: 767px)").matches){
        $(".card").css("overflow", "scroll");
        $(".card-header").css("width", "68rem");
    }

    // view-classes.html only
    $(".classes .dataTable-wrapper .dataTable-top").html("");

    // view-record.html only
    $(".records .dataTable-wrapper .dataTable-top .dataTable-dropdown").html("");
    
    // view-faculty.html only
    if(window.matchMedia("(max-width: 767px)").matches){
        // $(".records .dataTable-wrapper .dataTable-top .dataTable-search .dataTable-input").css("width", "17.5rem");
        $(".faculty .dataTable-wrapper .dataTable-top .dataTable-dropdown").html("");
    }

    // E-Class Record
    $(".e-class-event tbody tr").on("click", (e) => {
        console.log((e.currentTarget.id).slice(3));
    });
})

