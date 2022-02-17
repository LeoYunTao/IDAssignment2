function cardMouseHover() {
    $(".card-full").mouseenter(event => {
        if (!$(event.currentTarget).find("button").is(':animated')) 
        {
            $(event.currentTarget).find("button").slideDown();
        }
    }).mouseleave(event => {
        $(event.currentTarget).find("button").slideUp();
    });
}

cardMouseHover();
$("#explore").bind("DOMSubtreeModified", () => {
    cardMouseHover();
});