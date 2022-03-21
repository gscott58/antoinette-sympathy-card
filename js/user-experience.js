var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("copyright-1").innerHTML = "<strong><mark>© Copyright " + d.getFullYear() + "</mark></strong>.";

$("#page-title").toggle(2000);
$("#photo").toggle(4000);
$("#greetings").toggle(2500);
$("#main-content").toggle(3000);
$("#signature").toggle(3500);
$("#copyright-1").toggle(4000);
$("#copyright-2").toggle(4500);
$("#email-contact-us").toggle(5000);
$("#email-address").toggle(5000);
                   
$("footer").hover(function() {
    $("#copyright-1").effect("shake");
    }, function() {
    $("#email-contact-us").effect("shake");
});
