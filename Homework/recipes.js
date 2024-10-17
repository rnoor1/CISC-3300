
function loadRecipes() {
    $.ajax({
        url: 'http://localhost:3000/recipes', 
        method: 'GET',
        success: function(data) {
            $('#recipes').empty(); 

         
            if (data.length === 0) {
                $('#recipes').append('<p>No recipes found.</p>');
                return;
            }

         
            data.forEach(function(recipe) {
                $('#recipes').append(`
                    <div class="recipe">
                        <h3>${recipe.title}</h3>
                        <p>${recipe.description}</p>
                    </div>
                `);
            });
        },
        error: function() {
            $('#recipes').text('Error loading recipes. Please try again later.');
        }
    });
}


$(document).ready(function() {
    loadRecipes();

  
    $('#recipe-form').submit(function(event) {
        event.preventDefault(); 

       
        const title = $('#title').val();
        const description = $('#description').val();

        
        $.ajax({
            url: 'http://localhost:3000/recipes',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                title: title,
                description: description
            }),
            success: function() {
                
                loadRecipes();
                $('#title').val(''); 
                $('#description').val(''); 
            },
            error: function() {
                alert('Error saving recipe. Please try again.');
            }
        });
    });
});
