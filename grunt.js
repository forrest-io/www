module.exports = function(grunt) {
  grunt.initConfig({
    cucumberjs: {
      features: "features",
      steps: "features/steps"
    }
  });

  grunt.loadNpmTasks('grunt-cucumber');

  grunt.registerTask('default', 'cucumberjs');
};
