var gulp            = require('gulp'),
    shell           = require('gulp-shell'),
    rename          = require('gulp-rename'),
    browserSync     = require('browser-sync').create();

/* dirs */
var	assetsDir			= 'assets',
    bowerDir			= 'bower_components',
    targetSass			= '_sass',
    targetCSS			= 'css',
    targetFont			= assetsDir + '/fonts',
    targetJs			= assetsDir + '/js';

// Task for building blog when something changed:
gulp.task('build', shell.task(['jekyll build --watch']));
// Or if you don't use bundle:
// gulp.task('build', shell.task(['jekyll build --watch']));

// Task for serving blog with Browsersync
gulp.task('serve', function () {
    browserSync.init({
        server: {baseDir: '_site/'}
    });
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['build', 'serve']);


