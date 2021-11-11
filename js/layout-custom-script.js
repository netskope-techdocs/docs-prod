// Original JavaScript code by Netskope
$(document).ready(function() {

  var icon1 = "icon/ReleaseNotesIcon.png";
  var icon2 = "icon/GettingStartedIcon.png";
  var icon3 = "icon/NetworkSecurityIcon.png";
  var icon4 = "icon/TrafficManagementIcon.png";
  var icon5 = "icon/IntegrationsIcon.png";
  var icon6 = "icon/AdminConsoleIcon.png";
  var icon7 = "icon/ApplianceIcon.png";
  var icon8 = "icon/VideosIcon.png";

  $(".cat-panel-1").closest("a").prepend("<img src='" + icon1 + "'></img>");
  $(".cat-panel-2").closest("a").prepend("<img src='" + icon2 + "'></img>");
  $(".cat-panel-3").closest("a").prepend("<img src='" + icon3 + "'></img>");
  $(".cat-panel-4").closest("a").prepend("<img src='" + icon4 + "'></img>");
  $(".cat-panel-5").closest("a").prepend("<img src='" + icon5 + "'></img>");
  $(".cat-panel-6").closest("a").prepend("<img src='" + icon6 + "'></img>");
  $(".cat-panel-7").closest("a").prepend("<img src='" + icon7 + "'></img>");
  $(".cat-panel-8").closest("a").prepend("<img src='" + icon8 + "'></img>");

$(".publication-icon").remove();
$("#email-feedback a").text("Click to send us feedback.")
$("#email-feedback a").before('<i class="fa fa-pencil-square-o-feedback feedbackicon aria-hidden="true""></i>')

document.getElementsByClassName("section-toc-title")[0].firstChild.nodeValue = "Related Articles";
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
