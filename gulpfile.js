const gulp        = require('gulp');
const plumber     = require('gulp-plumber');
const gutil       = require('gulp-util');
const sass        = require('gulp-sass');
const prefix      = require('gulp-autoprefixer');
const cssnano     = require('gulp-cssnano');
const concat      = require('gulp-concat');
const uglify      = require('gulp-uglify');
const browserSync = require('browser-sync');
const cp          = require('child_process');
const sourcemaps  = require('gulp-sourcemaps');
const imagemin    = require('gulp-imagemin');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('css', () => {
  gulp.src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('js', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'))
});

gulp.task('imagemin', () => {
  return gulp.src('src/img/**/*')
    .pipe(plumber())
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('assets/img/'));
});

gulp.task('fonts', function() {
  return gulp.src([
    'src/fonts/**'])
    .pipe(gulp.dest('assets/fonts/'));
});

/**
 * Monta o site do Jekyll
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
      .on('close', done);
});

/**
* Refaz o site e atualiza a página
*/
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

/**
* Espera até que o jekyll-build seja executado e então levanta o
* servidor utilizando o _site como pasta raiz
*/
gulp.task('browser-sync', ['jekyll-build'], function() {
  browserSync({
      server: {
          baseDir: '_site'
      }
  });
});

gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', ['css', 'jekyll-rebuild']);
  gulp.watch('src/js/**/*.js', ['js', 'jekyll-rebuild']);
  gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin', 'jekyll-rebuild']);
  gulp.watch('src/fonts/**/*.{eot,svg,ttf, woff}', ['fonts', 'jekyll-rebuild']);
  gulp.watch(['index.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['css', 'js', 'imagemin', 'fonts', 'browser-sync', 'watch']);
