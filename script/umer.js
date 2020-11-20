$(document).ready(function(){
    $("#fed").click(function(){
        $("#fedmodal").modal();
    });
    $("#feda").click(function(){
        $("#loginModal").modal();
    });
    $("#mycarousel").carousel( { interval: 3000 } );

    $("#cb").click(function(){
        if ($("#cb").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#cb").children("span").removeClass('fa-pause');
            $("#cb").children("span").addClass('fa-play');
        }
        else if ($("#cb").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#cb").children("span").removeClass('fa-play');
            $("#cb").children("span").addClass('fa-pause');                    
        }
    });
});