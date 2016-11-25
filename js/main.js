// FitText plugin, enlarge heading text with window resize
$('#name').fitText();

//Tooltipster plugin, displays message when hovered over the image
$(document).ready(function () {
    $('.tooltip').tooltipster();
});

//jQuery to change the color of heading when clicked
$(document).ready(function () {
    $('h1').click(function () {
        $('h1').css('color', '#5f5f5f');
    });
});
