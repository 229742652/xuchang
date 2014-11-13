module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
          fangchan: { //合并
              files: {
                  'main.js': ["commom.js", "index.js"]
              }
          }
      },
    uglify: {//压缩
        fangchan: {
            files: {
                "index.min.js": ["main.js"],
		        "linten-touch.min.js":["linten-zepto.touch.js"]
            }
        }
    },
    watch: {
        fangchan: {
            files: ['Gruntfile.js', '**/*.js'],
            dateFormat: function (time) {
                grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                grunt.log.writeln('Waiting for more changes...');
            },
            tasks: ['jshint']

        }
    },
    cssmin: {
        combine: {
            files: {
                '../css/index.min.css': ['../css/index.css']
            }
        }
    }
  });
    //加载插件
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Default task(s).
    //调用插件
  grunt.registerTask('default', ["concat", "uglify", "cssmin"]);
  
};