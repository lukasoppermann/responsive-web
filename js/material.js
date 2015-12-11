(function (window, $) {
  $(function() {
    $('.o-button--ripple').on('click', function (event) {
      event.preventDefault();

      var   $button = $(this),
            $div = $('<div/>'),
            btnOffset = $button.offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;

      $div
        .addClass('js-circle')
        .css({
          top: yPos - 15,
          left: xPos - 15
        })
        .appendTo($button);

      window.setTimeout(function(){
        $div.remove();
      }, 2000);
    });

  });

})(window, jQuery);
