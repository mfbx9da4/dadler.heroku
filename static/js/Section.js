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
      section.item.width(ITEM_WIDTH);
      section.icon = section.el.find('.icon');
      section.el.find('span.fill').on('click', function() {
        return section.toggle_content();
      });
      $(window).resize(function() {
        return section.resize();
      });
    }

    Section.prototype.resize = function() {
      var section;
      section = this;
      if (ITEM_WIDTH + 150 >= $('.main').width()) {
        section.shrink_icon();
        return window.is_wide = false;
      } else {
        window.is_wide = true;
        if (!section.content_open) {
          return section.grow_icon();
        }
      }
    };

    Section.prototype.shrink_icon = function() {
      var section;
      section = this;
      section.icon.animate({
        fontSize: '2em'
      }, 'fast');
      section.item.animate({
        width: '100%',
        height: '7em'
      }).find('.description p').hide();
      return section.item.find('.description').width('13em');
    };

    Section.prototype.grow_icon = function() {
      var section;
      section = this;
      section.icon.animate({
        fontSize: '4em'
      }, 'fast');
      section.item.animate({
        width: ITEM_WIDTH,
        height: '13em'
      }).find('.description p').show('fast');
      return section.item.find('.description').width('20em');
    };

    Section.prototype.render = function() {
      this.resize();
      return this.el;
    };

    Section.prototype.toggle_content = function() {
      var section;
      section = this;
      section.content_open = !section.content_open;
      window.el = section.el;
      section.resize();
      section.content.delay(0).slideToggle('slow');
      if (section.content_open) {
        section.shrink_icon();
        return window.setTimeout(function() {
          return $('body, html').animate({
            scrollTop: section.item.offset().top
          }, 'slow', 'swing');
        }, 500);
      } else {
        if (window.is_wide) {
          section.grow_icon();
        }
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
