$(document).ready(function(){
    $("#toggle-btn").click(function () {
        $("#list-div").toggle(280);
        $("#toggle-btn").toggleClass("btn-clicked")
    });
    var MAX_WIDTH = 819, $window = $(window), toggleEnabled = true;

$window.on('resize', function() {
    if ($window.width() > MAX_WIDTH) {
        $("#toggle-btn").hide();
        $("#list-div").show();
    } else {
        
        $("#toggle-btn").show();
     
        $('#list-div').hide();

        toggleEnabled = true;
    }
    if($window.width()<MAX_WIDTH){
        $("#toggle-btn").click(function () {
            $(".href").addClass("link");
          
            $(".list").addClass("list-border");
            $("#list-div").removeClass("all-lists");
            $("#list-div").addClass("dropdown-list");
        });
    }
   
});
$window.trigger('resize');
});