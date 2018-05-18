// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

 /* function giphyURLWithSearchTerm(searchTerm) {
    // write a function that will return a url for the giphy API with
    // the searchTerm provided in the parameters
    var input = $("#input").val();
    var newUrl = "https://api.giphy.com/v1/stickers/search?q=" + input + "&api_key=dc6zaTOxFJmzC";
	return newUrl;

}

function appendImageToBody(srcURL) {
    // write a function that will append an <img> to the body with the
    // URL provided in the parameters
    $('body').append('<img src=' + srcURL + '>');
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: giphyURLWithSearchTerm(searchTerm),
      method: "GET",
      success: function(response) {
           
           var url = response.data[0].images.original.url;
         //  $(document.body).append("<img src='" + url + "'>");
        var imageHtml = "<div>" + "<img src=' " + url + "'>"+ "</div>";
      },
    }); 
} */

$(document).ready(function(){


//Add a click handler beloe to call the function when the button is clicked
$("#button").click(function() {
    $("#text").hide();
    var searchTerm = $("#searchTerm").val().toLowerCase();
    
    var giphyUrl = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
    
    $.ajax({
          url: giphyUrl,
          method: "GET",
          success: function(response) {
              var imageSrc = response.data[0].images.original.url;
              var imageHtml = "<div>" + "<img id='"+ "image" +"' src=' " + imageSrc + "'>"+ "</div>";
              
              // STEP 3: Get the image src of the gif
              // reference: https://docs.google.com/presentation/d/1wXLyXW-xN64zUnK1forP7MGewFEev5PmJ73ia8qmQQo/edit#slide=id.g3910f2de88_0_33
              
              // STEP 4: Generate the HTML for the img tag (using the image src from step3)
              
              // STEP 5: Append the image to the page
              $("#x").html(imageHtml);
    if (searchTerm === "wario") {
        $("#title").html("WAHfinder");
        $("body").css({
             "background-image": 'url("https://i.ytimg.com/vi/rJfX4JukOMc/maxresdefault.jpg")',
             "background-size": "cover",
             "background-repeat": "no-repeat"
             });
            var mp3Link = "./Music/Greenhorn_Forest.mp3"; 
             
             
           var WAH = " <audio src='" + mp3Link + "' autoplay='autoplay'></audio> "  ;
             
         $("#image").append(WAH);  
    
            
/*    <audio src="./Music/Greenhorn_Forest.mp3" autoplay="autoplay" loop="loop"></audio>*/
    }
    
    else {
        $("#title").html("Giffinder");
        $("body").css({
             "background-image": 'url("https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg")',
             "background-size": "cover",
             "background-repeat": "no-repeat"
             
            
            
        });
        
        
        
    }
              
          },
        });
  
});

});