class window.Gravatar
    constructor: (@src) ->
        @el = $('<img class="" id="gravatar" src="' + @src + '" />')
        @el.position().top
        css_params = 
            position: 'absolute'
            cursor: 'pointer'
            top: '4em'
            left: '-4em'
            opacity: 0
            width: 0
            height: 0 
        @el.css(css_params)
        @el.hover(
            (e) ->
                $('#my-name').addClass('hover')
            (e) ->
                $('#my-name').removeClass('hover')
        )   
        @el.click(
            (e) ->
                e.preventDefault()
                location.reload()
        )

    show: (onComplete)->
        dim =  90
        @el.animate(
                top:    @el.position().top - dim/2
                left:   @el.position().left - dim/2
                width:  dim
                opacity: 1
                height: dim
            duration: 200
            complete: () ->
                onComplete())
