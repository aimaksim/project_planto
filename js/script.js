//JavaScript


//jQuery
// Top Selling Start
// Add to cart
$(document).ready(function() {
    // Subscribe Button Functionality
    $('#cu-icon-button').on('click', function() {
        var email = $('#cart').val();
        if (email) {
            alert('Thank you for Add to Cart!');
        } else {
            alert('Please Add to Cart!');
        }
    });
});

// Customer Reviews Start
$(document).ready(function () {
    $(".cure_card").hover(
        function () {
            $(this).addClass("shadow-lg").css("transform", "scale(1.05)");
        },
        function () {
            $(this).removeClass("shadow-lg").css("transform", "scale(1)");
        }
    );
});

//Footer
$(document).ready(function() {
    // Subscribe Button Functionality
    $('#subscribe-btn').on('click', function() {
        var email = $('#email').val();
        if (email) {
            alert('Thank you for subscribing!');
        } else {
            alert('Please enter a valid email.');
        }
    });
});
