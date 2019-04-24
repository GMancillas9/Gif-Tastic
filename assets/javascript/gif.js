

// 1. Initial array of topics that I like
var topics = ["Mermaids", "Moon", "Lilith", "Goddess"];
console.log(topics);

// 2. Your app should take the topics in this array and dynamically create buttons in your HTML.
// Why is it enough to create a for loop here and not necessary to store in a function?

for (var i = 0; i < topics.length; i++) {
    // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    var newButton = $("<button>" + topics[i] + "</button>");
    $("#buttons-view").append(newButton);
}


// 3. When the user clicks on a button, the page should grab 10 static, 
// non-animated gif images from the GIPHY API and place them on the page.

$("buttons-view").on("click", function () {
    var chosenTopic = $(this).val();
    console.log(chosenTopic);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        chosenTopic + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;

            // 4. Under every gif, display its rating (PG, G, so on).

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var topicImage = $("<img>");
                topicImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(personImage);

                $("#gifs-view").prepend(gifDiv);
            }
        });
});
//  <--- Why do my buttons disappear when I remove this in line 47?


// This function handles events where one button is clicked
$("#add-topic").on("click", function (event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var topic = $("#topic-input").val().trim();
    // The topic from the textbox is then added to our array
    topics.push(topic);

// I need to walk through this assignment with a TA to piece it together

