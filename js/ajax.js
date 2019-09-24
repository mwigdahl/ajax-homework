var animals = ['cats', 'dogs', 'birds', 'horses', 'chickens', 'mouse', 'pigs', 'fish', 'giraffes', 'lions'];

function displayGiphy() {
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=GIrOZj09NaiRq20vuzsB3xRXw9YbLo5J&limit=10&rating=g&q=cats';

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        let result = response.data;
        console.log(response.data);

        for (var j = 0; j < result.length; j++) {
            
            var giphy = $('<img>');
            giphy.attr('data-state', 'still');
            giphy.attr('src', result[j].images.fixed_width_still.url);
            giphy.attr('data-still', result[j].images.fixed_width_still.url);
            giphy.attr('data-animate', result[j].images.fixed_width.url);
            giphy.attr('class', 'gif');
            //giphy.text(result[j].rating + giphy);
            $('#show-giphy').append(giphy);
            
            $('.gif').on('click', function(){
                var state = $(this).attr('data-state');
            
                if (state === 'still') {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                  } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            
              }); 
            
        }
        
    });
   



}
displayGiphy();

$('#add-giphy').on('click', function (event) {
    event.preventDefault();

    var myGiphy = $('#myGiphy').val().trim();

    animals.push(myGiphy);

    renderButtons();
});



function renderButtons() {

    $('#show-buttons').empty();

    for (var i = 0; i < animals.length; i++) {

        var animalBtn = $('<button>');
        animalBtn.addClass('animal-btn');
        animalBtn.attr('data-name', animals[i]);
        animalBtn.text(animals[i]);
        $('#show-buttons').append(animalBtn);

    }


}

$(document).on('click', 'animal-btn', displayGiphy);
 

// https://api.giphy.com/v1/gifs/search
// api_key:  GIrOZj09NaiRq20vuzsB3xRXw9YbLo5J
//q= search
// limit = 10