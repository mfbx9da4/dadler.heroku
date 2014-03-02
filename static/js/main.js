(function() {
  var main, writeMain, writeTitle;

  $(window).ready(function() {
    return main();
  });

  main = function() {
    window.ITEM_WIDTH = 480;
    window.container = $('.container');
    return writeTitle();
  };

  writeTitle = function() {
    var gravatar, header_container, title, title_container, title_resize;
    header_container = $('.header-container');
    title_container = $('<div class="centered title-container"></div>').appendTo(header_container);
    gravatar = new window.Gravatar("/static/img/da-gravatar.jpg");
    title_container.append(gravatar.el);
    title = $('<h1 id="my-name" class="animated title fadeInDown">David Adler</h1>');
    title.on('click', function(event) {
      event.preventDefault();
      return location.reload();
    });
    title.hover(function(e) {
      return $('#gravatar');
    });
    title_container.append(title);
    $(window).resize(title_resize);
    title_resize = function() {
      if (ITEM_WIDTH + 150 >= $('.main').width()) {
        title_container.width('19em');
        return window.is_wide = false;
      } else {
        window.is_wide = true;
        return title_container.width('25em');
      }
    };
    title_resize();
    return header_container.delay(1000).animate({
      height: '7em'
    }, {
      duration: 700,
      complete: function() {
        return gravatar.show(writeMain);
      }
    });
  };

  writeMain = function() {
    var cv_sections, data, main_container, sect, _i, _len, _ref;
    main_container = "<div class=\"animated fadeInUpBig main-container\">\n    <div class=\"main wrapper clearfix \">\n    </div>\n</div>";
    window.converter = new Markdown.Converter();
    window.converter.hooks.chain("preConversion", function(text) {
      return text.replace(/(\w*)-(\w*)\[(.*)]/gi, "<$1 class='$2'>$3</$1>");
    });
    window.converter.hooks.chain("preConversion", function(text) {
      return text.replace(/graph-(\d\d\d?)%/gi, '<div class="graph-container" style="width:30em"><div class="animated stretchRight graph" style="width: $1%;"></div></div>');
    });
    window.container.append(main_container);
    cv_sections = [];
    _ref = window.cv_sections;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      data = _ref[_i];
      sect = new Section(data.icon, data.title, data.description, data.content);
      cv_sections.push(sect.render());
    }
    $('.main').append(cv_sections);
    $('span.fill').hover(function(e) {
      return $(e.target).parent().parent().parent().css({
        backgroundColor: 'rgba(128, 128, 128, 0.1)',
        opacity: 0.8
      });
    }, function(e) {
      return $(e.target).parent().parent().parent().css({
        backgroundColor: 'transparent',
        opacity: 1
      });
    });
    return $(window).scroll(function() {
      var elem, wind, _j, _len1, _ref1, _results;
      wind = $(this);
      _ref1 = $('.responsive, .graph-container');
      _results = [];
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        elem = _ref1[_j];
        if ($(elem).width() >= wind.width()) {
          _results.push($(elem).width('100%'));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    });
  };

}).call(this);
