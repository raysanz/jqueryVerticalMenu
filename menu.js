$('.strip').click(function () {
    debugger
    $(this).css("z-index", "110");
    $(this).toggleClass('strip-active');
    $(this).siblings().toggleClass('strip-hidden');
    $('p').toggleClass('p-active');
});