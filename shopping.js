$(".shopping-list").on("click", ".shopping-item-toggle span", function() {
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
});

$(".shopping-list").on("click", '.shopping-item-delete', function(){
    $(this).parent().parent().remove();
});

let buttons = "<div class='shopping-item-controls'>   <button class='shopping-item-toggle'>\<span class='button-label'>check</span></button>\
    <button class='shopping-item-delete'><span class='button-label'>delete</span> </button>\
</div>";

$('#js-shopping-list-form').on('submit', function(event){
    event.preventDefault();
    var text = $('#shopping-list-entry').val();
    $('.shopping-list').append('<li>' + "<span class='shopping-item'>" + text + '</span>' + buttons + '</li>');
    $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');

});

