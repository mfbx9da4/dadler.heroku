class window.Gravatar
    constructor: (@src) ->
        gravatar = @
        gravatar.el = $('<img class="" id="gravatar" src="' + gravatar.src + '" />')
        gravatar.el.position().top
        css_params = 
            position: 'absolute'
            cursor: 'pointer'
            top: '3.1em'
            left: '-4em'
            opacity: 0
            width: 0
            height: 0 
        gravatar.el.css(css_params)
        gravatar.el.hover(
            (e) ->
                $('#my-name').addClass('hover')
            (e) ->
                $('#my-name').removeClass('hover')
        )   
        gravatar.el.click(
            (e) ->
                e.preventDefault()
                location.reload()
        )
        $(window).resize(() -> gravatar.resize())

    resize: () ->
        gravatar  = @
        if gravatar.el.offset().left < 20
            gravatar.el.hide()
        else
            gravatar.el.show()

    show: (onComplete)->
        dim =  80
        @el.animate(
                top:    @el.position().top - dim/2
                left:   @el.position().left - dim/2
                width:  dim
                opacity: 1
                height: dim
                display: 'block'
            duration: 200
            complete: () ->
                onComplete())
