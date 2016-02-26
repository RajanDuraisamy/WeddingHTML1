function bindEventToNavigation() {
    $.each($("#navigation_links > li > a"), function (index, element) {
        $(element).click(function (event) {
            breadcrumbStateSaver($(this).attr('href'), $(this).text());
            showBreadCrumb();
        });
    });
}

function showBreadCrumb() {
    $("#breadcrumb").html(sessionStorage.breadcrumb);
}

function breadcrumbStateSaver(link, text) {
    if (typeof (Storage) != "undefined") {
        if (sessionStorage.breadcrumb) {
            var breadcrumb = sessionStorage.breadcrumb;
            sessionStorage.breadcrumb = breadcrumb + " >> <a href='" + link + "'>" + text + "</a>";
        } else {
            sessionStorage.breadcrumb = "<a href='" + link + "'>" + text + "</a>";
        }
    }
}