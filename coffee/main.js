// Generated by CoffeeScript 1.6.3
var main, writeMainContent, writeTitle;

$(window).ready(function() {
  return main();
});

main = function() {
  return writeTitle();
};

writeTitle = function() {
  var animate_gravatar, gravatar, gravatar_target_dim, header_container, title, title_container;
  header_container = $('.header-container');
  title_container = $('<div class="title-container"></div>');
  header_container.append(title_container);
  gravatar = "https://en.gravatar.com/userimage/57761015/498a8426b0a71be4ec288f36ae26eb79.jpeg";
  gravatar = $('<img class="animated pulse" id="gravatar" src="' + gravatar + '" />');
  gravatar.width('0');
  gravatar.height('0');
  gravatar_target_dim = 5;
  animate_gravatar = function() {
    return gravatar.animate({
      top: gravatar_target_dim / 2,
      left: gravatar_target_dim / 2,
      width: gravatar_target_dim,
      height: gravatar_target_dim
    }, 2000);
  };
  title_container.append(gravatar);
  title = $('<h1 id="my-name" class="animated fadeInDown">David Adler</h1>');
  title_container.append(title);
  return header_container.delay(1000).animate({
    height: '30%'
  }, {
    duration: 700,
    complete: function() {
      return animate_gravatar();
    }
  });
};

writeMainContent = function() {
  return console.log('not');
};
