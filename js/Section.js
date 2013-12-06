// Generated by CoffeeScript 1.4.0
(function() {

  window.Section = (function() {

    function Section(icon, title, description, content) {
      var section;
      this.icon = icon;
      this.title = title;
      this.description = description;
      this.content = content;
      section = this;
      section.content_open = false;
      section.el = $("<section class=\"section\">\n    <div class=\"item\">\n        <div class=\"centered\">\n            <a><span class=\"fill\"></span></a>\n            <div class=\"icon fa-stack fa-4x\">\n              <i class=\"fa fa-circle fa-stack-2x\"></i>\n              <i class=\"fa " + this.icon + " fa-stack-1x fa-inverse\"></i>\n</div>\n<div class=\"description\">\n    <h2>" + this.title + "</h2> \n<p>" + this.description + "</p>\n        </div>\n    </div>\n</div>\n<div class=\"content\">" + window.converter.makeHtml(this.content) + "    </div>\n</section>");
      section.content = section.el.find('div.content').css({
        clear: 'both'
      }).hide();
      section.item = section.el.find('.item');
      section.icon = section.el.find('.icon');
      section.el.find('span.fill').on('click', function() {
        return section.toggle_content();
      });
    }

    Section.prototype.render = function() {
      return this.el;
    };

    Section.prototype.toggle_content = function() {
      var section;
      section = this;
      section.content_open = !section.content_open;
      window.el = section.el;
      section.content.delay(0).slideToggle();
      if (section.content_open) {
        section.icon.animate({
          fontSize: '2em'
        }, 'fast');
        section.item.animate({
          width: '100%',
          height: '7em'
        }).find('.description p').hide('fast');
        return window.setTimeout(function() {
          return $('body, html').animate({
            scrollTop: section.item.offset().top
          }, 'slow', 'swing');
        }, 500);
      } else {
        section.icon.animate({
          fontSize: '4em'
        }, 'fast');
        section.item.animate({
          width: '30em',
          height: '13em'
        }).find('.description p').show('fast');
        return window.setTimeout(function() {
          return $('body, html').animate({
            scrollTop: section.item.offset().top
          }, 'slow', 'swing');
        }, 500);
      }
    };

    return Section;

  })();

}).call(this);
