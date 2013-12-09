// Dynamic date in header
function date_onload(){
  var months = ['January','February','March','April','May','June','July',
  'August','September','October','November','December'];
  var tomorrow = new Date();
  tomorrow.setTime(tomorrow.getTime() + (1000*3600*24));
  document.getElementById("spanDate").innerHTML = months[tomorrow.getMonth()] + " " + tomorrow.getDate()+ ", " + tomorrow.getFullYear();
}

$(document).ready(function()
{
        $('.img:gt(0)').hide();
        setInterval(function() {
                $(".img:first-child").fadeOut(6000).next(".img").fadeIn(6000).end().appendTo("#show-case")
}, 7000);

});