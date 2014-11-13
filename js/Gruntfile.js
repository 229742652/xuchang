module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
          fangchan: { //�ϲ�
              files: {
                  'main.js': ["commom.js", "index.js"]
              }
          }
      },
    uglify: {//ѹ��
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
    //���ز��
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Default task(s).
    //���ò��
  grunt.registerTask('default', ["concat", "uglify", "cssmin"]);
  
};