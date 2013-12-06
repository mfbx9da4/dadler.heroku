window.cv_sections = [
    {
        'icon' : 'fa-book'
        'title' : 'Education'
        'description' : 'Graduated from the University of Manchester in Neuroscience. Strongest in maths and sciences.'
        'content' : """
<hr/>

span-date[2009–2013]
###2:1 (69%) BSc Honours Neuroscience, span-discrete[University of Manchester, UK.]
- Averaged 1st in core neuroscience modules.
- Demonstrated drive and creativity by designing my own ﬁnal year project *de novo*.
- Project (awarded 1st): Disproved validity of a pioneering artiﬁcial intelligence algorithm. Created my own computational model of learning networks of the brain. Gained experience in computational modelling and machine learning.

<hr/>

span-date[2007–2009]
###A levels, span-discrete[Ibstock Place School, London, UK.]
- Physics (B), Maths (B), Biology (B). 
- AS level: French (B).

<hr/>

span-date[2004–2006]
###GCSEs, span-discrete[Ibstock Place School, London, UK.]
- 1A*, 5As, 4Bs .
- Plus triple science award.

<hr/>

###Languages
- English (native).
- French (proﬁcient), ~ 2 years living in France.
- Spanish (intermediate), 1 year living in Spain.
- Portuguese (intermediate).

<hr/>

###Academic Honours
- Featured in the University of Manchester Undergraduate Prospectus.
- Silver Award in UK National Mathematics Challenge.
- Advanced one year for academic attainment in primary school.
"""
    }, {
        'icon' : 'fa-briefcase'
        'title' : 'Experience'
        'description' : 'From sales, to science, to code.'
        'content' : """
<hr/>

span-date[Autumn 2013] 

###Web developer, span-discrete[SuperAwesome, London, UK.]
- Developed multiple mini-games using HTML5 canvas and javascript.
- Innovated and developed a front-end automator which automated front-end
build timefor commercial campaigns from 5 hours to 1 minute.
- Made multiple presentations on the above front-end automator.
- Became familiar with git branching, merging and collaboration.
- Maintained front and backend of webstites. The web stack included django, heroku and amazon storage.

<hr/>

span-date[Summer 2013]

###Marketing analyst, span-discrete[SportPursuit, London, UK.]
- Innovated and developed a script which optimized marketing campaign launch
time from 1 hour to 10 minutes.
- Performed data analysis of facebook and google advertisement campaigns.

<hr/>

span-date[2011–2012] 
###Neuroscience Research Placement, span-discrete[Laboratory of Functional Neuroanatomy, IkerBasque, Spain.]
- Developed methodical approach and attention to detail by conducting unsupervised
scientiﬁc experiments.
- Developed presentation skills in regular boardroom meetings.
- Project: Investigated changes in cell morphology of astrocytes in the triple
transgenic mouse model of Alzheimer’s disease. Developed skills in data analysis,
ﬂuorescence microscopy and immunohistochemistry.

<hr/>

span-date[Summer 2011]

###Estate Agent, span-discrete[Imperial Homes, Kensington, London, UK.]
- Property negotiator in high-proﬁle sales and lettings. Thrived in high-pressure
negotiation situations and maintained composure in precarious deals.
- Demonstrated competency in customer relations when conducting viewings and
conversing with high net worth clients.
- Gained experience in corporate etiquette when conducting phone and email
conversations in a professional manner.

<hr/>

span-date[Summer 2010]

###Private beach waiter, span-discrete[Plage Rive Gauche, Juan Les Pins, France.]
- Working 84 hours per week gave me a sharp introduction to what a "proper day's work" really is.

"""
    }, {
        'icon' : 'fa-code'
        'title' : 'Portfolio'
        'description' : 'Weekend proejcts and things that I\'m proud of.'
        'content' : """
###Front-end automator
- Automates CSS positioning and sprite cropping using image detection algorithms and HTML5 canvas.

###Youtube playlist manager
- Contributed to open source youtube playlist manager.

###Mini-games
- Puzzle game

span-date[2012-2013]

###Artiﬁcial neuron-astrocyte network
- Final year project

###Google docs referencing system
- Small project but neat solution. Using google apps script.

###Project Euler
- Various mathematical and computational problems

"""
    }, {
        'icon' : 'fa-sort-amount-desc'
        'title' : 'Skills'
        'description' : 'A breakdown of my technical skills.'
        'content' : """

**Likes:**

1. python
2. coffeescript
3. SASS
4. django   
5. ember.js


**Dislikes:**

1. php
2. internet explorer
3. flash
4. windows


<hr>
###Technologies by color:

<div style="width:50em; line-height:2em;">

span-pro[python]
span-nov[ruby]
span-nov[node.js]
span-med[C]
span-nov[java]
span-nov[android]
span-pro[django]
span-nov[go]
span-nov[ember.js]
span-nov[backbone.js]
span-med[git]
span-pro[linux]
span-med[windows]
span-med[mac os]
span-pro[heroku]
span-pro[google app engine]
span-pro[javascript]
span-pro[jquery]
span-pro[jqueryUI]
span-pro[HTML5 canvas]
span-pro[CSS3 animations]
span-pro[SASS]
span-pro[neural networks]
span-pro[numpy]
span-pro[pybrain]
span-pro[matplotlib]


</div>

Legend:

span-pro[Advanced]
span-med[Intermediate]
span-nov[Novice]


<hr>
###Types of intelligence span-discrete[(influenced by [Howard Gardner's theory](http://skyview.vansd.org/lschmidt/Projects/The%20Nine%20Types%20of%20Intelligence.htm))]

- Innovativity                  graph-100%
- Interpersonal                 graph-82%
- Intrapersonal                 graph-70%
- Linguistic written            graph-35%
- Linguistic spoken             graph-75%
- Logical-mathematical          graph-85%
- Musical-rhythmic              graph-40%
- Bodily-kinesthetic            graph-75%
- Artistic                      graph-20%



<script>
    $(window).scroll(function() {
        $('.graph').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        var windowHeight = $(window).height();
            if (imagePos < topOfWindow+windowHeight) {
                $(this).addClass("stretchRight");
            }
        });
    });
</script>


"""
    }, {
        'icon' : 'fa-coffee'
        'title' : 'About me'
        'description' : 'A breif summary of my background, ethos and what I get up to when I\'m not coding.'
        'content' : """
- Born in London lived in London until. 
- Spent summers in France.
- University discovered a sense of self.
- Moved to Spain. Travelling, neuroscience, coding, slacklining. Learned a lot about myself.
- Moved to Brazil to:
    - learn Portuguese
    - improve coding
    - meet Brazilian family
    - ?bask? in the sun

Truth:
    adventure
    new experiences 
    learning
    being different
    travelling
    find work fulfilling but nothing more fulfilling than being with those that you love
    shoutout to family in london and photo

Aim:
    Demonstrate good morals
    Like learning

"""
    }, {
        'icon' : 'fa-phone'
        'title' : 'Contact'
        'description' : 'My personal details and references.'
        'content' : """ """
    }
]
