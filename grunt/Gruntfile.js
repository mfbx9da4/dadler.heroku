module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ''
            },
            libs: {
                src: [
                    "../static/js/vendor/Markdown.Converter.js",
                    "../static/js/vendor/Markdown.Sanitizer.js",
                    "../static/js/vendor/jquery-1.10.1.min.js",
                    "../static/js/vendor/lightbox-2.6.min.js",
                    "../static/js/vendor/jqueryui.js"
                ],
                dest: '../static/output/libs.js'
            },
            app: {
                // the files to concatenate
                src: [
                    "../static/js/fixture_data.js",
                    "../static/js/plugins.js",
                    "../static/js/Gravatar.js",
                    "../static/js/Section.js",
                    "../static/js/main.js"
                ],
                dest: '../static/output/app.js'
            },
            css: {
                src: [
                    "../static/css/jqueryui.css",
                    "../static/css/justin.animations.css",
                    "../static/css/animate.css",
                    "../static/css/normalize.min.css",
                    "../static/css/font-awesome.min.css",
                    "../static/css/output.css",
                    "../static/css/main.css",
                    "../static/css/lightbox.css"
                ],
                dest: "../static/output/output.css"
            }
        },
        csslint: {
            strict: {
                options: {
                    import: false
                },
                src: ['../static/output/output.min.css']
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            app: {
                src: '../static/output/app.js',
                dest: '../static/output/app.min.js'
            },
            libs: {
                src: '../static/output/libs.js',
                dest: '../static/output/libs.min.js'
            }
        },
        cssmin: {
            combine: {
                options: {
                    keepSpecialComments: 0
                },
                files: {
                    '../static/output/output.min.css': ["../static/css/output.css"]
                }
            }
        },
        jshint: {
            // define the files to lint
            files: ['<%= concat.app.src %>', 'Gruntfile.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        coffee: {
            compile: {
                files: {
                    "../static/js/fixture_data.js": "../static/coffee/fixture_data.coffee",
                    "../static/js/Gravatar.js": "../static/coffee/Gravatar.coffee",
                    "../static/js/Section.js": "../static/coffee/Section.coffee",
                    "../static/js/main.js": "../static/coffee/main.coffee"
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>', '../static/coffee/*.coffee'],
            tasks: ['coffee', 'concat', 'uglify', 'cssmin']
        }

    });

    // Default task(s).
    grunt.registerTask('default', ['coffee', 'concat', 'uglify', 'watch']);


    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

};