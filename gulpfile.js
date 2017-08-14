const gulp        = require('gulp');
const plumber     = require('gulp-plumber');
const gutil       = require('gulp-util');
const sass        = require('gulp-sass');
const prefix      = require('gulp-autoprefixer');
const cssnano     = require('gulp-cssnano');
const concat      = require('gulp-concat');
const uglify      = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const child       = require('child_process');
const sourcemaps  = require('gulp-sourcemaps');
const imagemin    = require('gulp-imagemin');

const siteRoot = '_site';
const cssFiles = 'assets/css/**/*.?(s)css';

gulp.task('css', () => {
  gulp.src('src/scss/style.scss')
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

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  gulp.watch(cssFiles, ['css']);
});

gulp.task('default', ['css', 'js', 'imagemin', 'fonts', 'jekyll', 'serve']);