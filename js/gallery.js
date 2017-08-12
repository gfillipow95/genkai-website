/**
 * Created by Gen on 7/22/2017.
 */
var folder = "./images/gallery/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
                $(".masonry").append( "<div class='masonry-item'><img src='"+ folder + val +"' class='img-responsive center-block' alt=''></div>" );
            }
        });
    }
});