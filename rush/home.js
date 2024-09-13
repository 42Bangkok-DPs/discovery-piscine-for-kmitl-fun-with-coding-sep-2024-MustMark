$(document).ready(function() {
    
    $("#navbar").load("navbar.html");

    $(".logo").on("click", function() {
        window.location.href = "home.html";
    });

    $(".navbarItemClick").on("click", function() {
        var href = $(this).text().trim().toLowerCase() + ".html";
        window.location.href = href;
    });

    $("#home-scroll-down").on("click", function() {
        window.location.href = "#selectPortfolioSection";
    });

    $(".PingkhasPortButton").on("click", function() {
        window.location.href = "pingkhas.html";
    });

    $(".EmchowPortButton").on("click", function() {
        window.location.href = "emchow.html";
    });
});