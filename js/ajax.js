var animals = ['cats', 'dogs', 'birds', 'horses', 'chickens', 'mouse', 'pigs', 'fish', 'giraffes', 'lions'];
var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=GIrOZj09NaiRq20vuzsB3xRXw9YbLo5J&limit=10&rating=g&q=horses'; 

function displayGiphy() {


$.ajax({
 url: queryURL,
 method: 'GET'
}).then(function(response) { 
var result = response.data;
    console.log(response.data);

    for (var j = 0; j < result.length; j++) {

    var giphy = $('<img>');
    giphy.attr('data-name', 'animate');
    giphy.attr('src', result[j].images.fixed_width.url);
    giphy.text(result[j].rating);
    $('#show-giphy').append(giphy);
    
    }

});


}
//displayGiphy();

$('#add-giphy').on('click', function(event) {
    event.preventDefault();

    var myGiphy = $('#myGiphy').val().trim();

    //myGiphy.push();

});

function renderButtons() {

    for (var i = 0; i < animals.length; i++) {
    
        var animalBtn = $('<button>');
        animalBtn.addClass('animal-btn');
        animalBtn.attr('data-name', animals[i]);
        animalBtn.text(animals[i]);
        $('#show-buttons').append(animalBtn);

    }

}
renderButtons();


// https://api.giphy.com/v1/gifs/search
// api_key:  GIrOZj09NaiRq20vuzsB3xRXw9YbLo5J
//q= search
// limit = 10