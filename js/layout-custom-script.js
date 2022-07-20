// Original JavaScript code by Netskope
$(document).ready(function() {

  var icon1 = "icon/Release-Notes.png";
  var icon2 = "icon/Private-Access.png";
  var icon3 = "icon/Secure-Web-Gateway.png";
  var icon4 = "icon/Public-Cloud-Security.png";
  var icon5 = "icon/API-Protection.png";
  var icon6 = "icon/API-Protection.png";
  var icon7 = "icon/Cloud-Exchange.png";
  var icon8 = "icon/Advanced-Analytics.png";

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

/*Collapse sidebar after page loads
$(".site-body-row").toggleClass("collapse-sidebar-nav");*/

var scripts = document.getElementsByTagName( "script" );
    for ( var i = 0; i < scripts.length; ++ i )
    {
       if ( scripts[i].src == "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/highlight.min.js" )
       {
          scripts[i].src = "js/mathjs.js";
       }
       if ( scripts[i].src == "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML" )
       {
          scripts[i].src = "../js/mathjs.js";
       }
    }


/* document.getElementsByClassName("section-toc-title")[0].firstChild.nodeValue = "Related Articles"; */
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
