// Generated by CoffeeScript 1.10.0
(function() {
  $(function() {
    $('.show-more-button').each((function(_this) {
      return function(index, element) {
        return $(element).on('click tap', function(event) {
          var excerpt_div, show_more_div_id;
          element = $(event.target);
          excerpt_div = element.parent('div').each(function() {
            $(this).toggleClass('b-topic__hidden');
            return $(this).toggleClass('hidden');
          });
          show_more_div_id = "#" + excerpt_div.attr('id').replace("excerpt", "full");
          $(show_more_div_id).toggleClass('b-topic__hidden');
          return $(show_more_div_id).toggleClass('hidden');
        });
      };
    })(this));
    return $('.show-less-button').each((function(_this) {
      return function(index, element) {
        return $(element).on('click tap', function(event) {
          var excerpt_div, show_more_div_id;
          element = $(event.target);
          excerpt_div = element.parent('div').each(function() {
            $(this).toggleClass('b-topic__hidden');
            return $(this).toggleClass('hidden');
          });
          show_more_div_id = "#" + excerpt_div.attr('id').replace("full", "excerpt");
          $(show_more_div_id).toggleClass('b-topic__hidden');
          return $(show_more_div_id).toggleClass('hidden');
        });
      };
    })(this));
  });

}).call(this);
