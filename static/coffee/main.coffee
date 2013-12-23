# coffee -o js/ -cw coffee/
$(window).ready ->
    main()

main = () ->
    window.container = $ '.container'
    writeTitle()

writeTitle = () ->
    header_container = $ '.header-container'
    title_container = $('<div class="centered title-container"></div>').appendTo header_container

    # append gravatar
    gravatar = new window.Gravatar("/static/img/da-gravatar.jpg");
    title_container.append gravatar.el

    # append title
    title = $ '<h1 id="my-name" class="animated title fadeInDown">David Adler</h1>'
    title.on('click', (event) -> event.preventDefault(); location.reload();)
    title.hover(
        (e) ->
            $('#gravatar')
        )
    title_container.append title

    # animate header
    header_container.delay(1000)
        .animate(
            {height:'10em'}, 
            duration: 700, 
            complete:() -> 
                gravatar.show(writeMain)
            )


writeMain = () ->
    main_container = """
            <div class="animated fadeInUpBig main-container">
                <div class="main wrapper clearfix ">
                </div>
            </div>
    """
    window.converter = new Markdown.Converter()
    window.converter.hooks.chain("preConversion",  (text) ->
        return text.replace(/(\w*)-(\w*)\[(.*)]/gi, "<$1 class='$2'>$3</$1>")
    )
    window.converter.hooks.chain("preConversion",  (text) ->
        return text.replace(/graph-(\d\d\d?)%/gi, '<div class="graph-container" style="width:30em"><div class="animated stretchRight graph" style="width: $1%;"></div></div>')
    )
    window.ITEM_WIDTH = 480
    window.container.append(main_container)
    cv_sections = []
    for data in window.cv_sections
        sect = new Section(data.icon, data.title, data.description, data.content)
        cv_sections.push(sect.render())
    $('.main').append(cv_sections)
    $('span.fill').hover(
        (e) ->
            $(e.target).parent().parent().parent().css({backgroundColor: 'rgba(128, 128, 128, 0.1)', opacity: 0.8})
        (e) ->
            $(e.target).parent().parent().parent().css({backgroundColor: 'transparent', opacity: 1})
    )
    $(window).scroll(() ->
        wind = $ @
        for elem in $ '.responsive, .graph-container'
            if $(elem).width() >= wind.width()
                $(elem).width('100%')   
    )