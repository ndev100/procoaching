// on mouse out 'Roni' text changes color to red

function func() {
    $('#name').css('color','red');
    
}
$('#name').on('blur', func);

function func2() {
    $('.giora').css('background-color', 'teal');
}

setTimeout(func2, 5000);