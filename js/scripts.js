// Najpierw przed zaladowaniem funkcji trzeba zaladowac DOM, 
//w tym celu uzywamy: 
$(function(){
    console.log('DOM loaded - you can have fun');
});
//lub wersja dluzsza:
//  $(document).ready(function(){
//    console.log('DOM loaded - you can have fun');
//    });

//Zadanie 10.2:

var span = $("span");
    span.each(function(index, element) {
    });
    span.each(function(index, element) {
        if(index % 2 == 0) {
            $(element).css('color', 'red');
        };
    });

var paragraphs = $('p');
paragraphs.each(function(index, element) {

    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
    $(element).append(button)

});
// Jak dodac nowy element> np. kolejny span 1 z buttonem czy 1?
$("button").click(function(){
    alert($(this).attr("data-tmp"));
});