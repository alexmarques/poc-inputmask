(function($) {
  var regex = new RegExp(/\D/);
  var regex_number = new RegExp(/^\D/);
  var tamanhoDaMascara;
  $.fn.mask = function(options) {
    var elemento = $(this);
    var value = options.mask.replace(regex, '');
    tamanhoDaMascara = value.length;
    $(elemento).keydown(function() {
      if(regex_number.test($(this).val()) == true) {
        return false;
      }
    });
  };
})(jQuery);
