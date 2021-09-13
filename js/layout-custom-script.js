// Original JavaScript code by Netskope
$(document).ready(function() {

var icon1 = "icon/AdminConsoleIcon.png";
var icon2 = "icon/NetworkSecurityIcon.png";
var icon3 = "icon/TrafficManagmentIcon.png";
var icon4 = "icon/IntegrationsIcon.png";
var icon5 = "icon/ApplianceIcon.png";
var icon6 = "icon/ReleaseNotesIcon.png";

$(".cat-panel-1").closest("a").prepend("<img src='" + icon1 + "'></img>");
$(".cat-panel-2").closest("a").prepend("<img src='" + icon2 + "'></img>");
$(".cat-panel-3").closest("a").prepend("<img src='" + icon3 + "'></img>");
$(".cat-panel-4").closest("a").prepend("<img src='" + icon4 + "'></img>");
$(".cat-panel-5").closest("a").prepend("<img src='" + icon5 + "'></img>");
$(".cat-panel-6").closest("a").prepend("<img src='" + icon6 + "'></img>");

$(".publication-icon").remove();

});
$(document).ready(function () {
    setWelcomeText();
    $(document).ajaxComplete(function () {
    setWelcomeText();
    });
});

function setWelcomeText(){
    for (var key in welcomeTextDict) {
        var element = $("header.portal-header[data-portal-language=" + key +"] h1");
        element.text(welcomeTextDict[key])
    }
}
var welcomeTextDict = { "en" : "Knowledge Portal"};
