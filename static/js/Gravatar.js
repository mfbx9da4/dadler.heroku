(function() {
  window.Gravatar = (function() {
    function Gravatar(src) {
      var css_params, gravatar;
      this.src = src;
      gravatar = this;
      gravatar.el = $('<img class="" id="gravatar" src="' + gravatar.src + '" />');
      gravatar.el.position().top;
      css_params = {
        position: 'absolute',
        cursor: 'pointer',
        top: '3.1em',
        left: '-4em',
        opacity: 0,
        width: 0,
        height: 0
      };
      gravatar.el.css(css_params);
      gravatar.el.hover(function(e) {
        return $('#my-name').addClass('hover');
      }, function(e) {
        return $('#my-name').removeClass('hover');
      });
      gravatar.el.click(function(e) {
        e.preventDefault();
        return location.reload();
      });
      $(window).resize(function() {
        return gravatar.resize();
      });
    }

    Gravatar.prototype.resize = function() {
      var gravatar;
      gravatar = this;
      if (gravatar.el.offset().left < 20) {
        return gravatar.el.hide();
      } else {
        return gravatar.el.show();
      }
    };

    Gravatar.prototype.show = function(onComplete) {
      var dim;
      dim = 80;
      return this.el.animate({
        top: this.el.position().top - dim / 2,
        left: this.el.position().left - dim / 2,
        width: dim,
        opacity: 1,
        height: dim,
        display: 'block'
      }, {
        duration: 200,
        complete: function() {
          return onComplete();
        }
      });
    };

    return Gravatar;

  })();

}).call(this);
