class window.Section
    constructor: (@icon, @title, @description, @content) ->
        section = @
        section.content_open = false
        section.el = $("""
        <section class="section">
            <div class="item">
                <div class="centered">
                    <a><span class="fill"></span></a>
                    <div class="icon fa-stack fa-4x">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa """ + @icon + """ fa-stack-1x fa-inverse"></i>
                    </div>
                    <div class="description">
                        <h2>""" + @title + """</h2> 
                        <p>""" + @description + """</p>
                    </div>
                </div>
            </div>
            <div class="content">
                """ + window.converter.makeHtml(@content) + """
            </div>
        </section>
        """)
        section.content = section.el.find('div.content').css(clear:'both').hide()
        section.item = section.el.find('.item')
        section.item.width(ITEM_WIDTH)
        section.icon = section.el.find('.icon')
        section.el.find('span.fill').on('click'
            () ->
                section.toggle_content()
        )
        $(window).resize(() -> section.resize())


    resize: () ->
        section = @
        if ITEM_WIDTH >= $('.main').width()
            section.shrink_icon()
            window.is_wide = false
        else
            window.is_wide = true
            if !section.content_open
                section.grow_icon()

    shrink_icon: () ->
        section = @
        section.icon.animate({fontSize: '2em'}, 'fast')
        section.item.animate(
            width:'100%'
            height: '7em').find('.description p').hide('fast')

    grow_icon: () ->
        section = @
        section.icon.animate({fontSize: '4em'}, 'fast')
        section.item.animate(
            width: ITEM_WIDTH
            height: '13em').find('.description p').show('fast')

    render: () ->
        @.resize()
        return @.el

    toggle_content: () ->
        section = @
        section.content_open = !section.content_open
        window.el = section.el
        section.resize()

        section.content.delay(0).slideToggle('slow')
        if section.content_open
            section.shrink_icon()            
            # scroll
            window.setTimeout(
                () ->
                    $('body, html').animate({ scrollTop: section.item.offset().top}, 'slow', 'swing');
                500
            )
        else 
            if window.is_wide
                section.grow_icon()
            # scroll
            window.setTimeout(
                () ->
                    $('body, html').animate({ scrollTop: section.item.offset().top}, 'slow', 'swing');
                500
            )