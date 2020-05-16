const { src, dest, parallel, series, watch } = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync');
const cp = require('child_process');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');

const messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

function css() {
  return src('src/scss/**/*.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'compressed'
  })
  .on('error', sass.logError))
  .pipe(concat('style.css'))
  .pipe(sourcemaps.write())
  .pipe(browserSync.reload({stream: true}))
  .pipe(dest('assets/css'));
}

function js() {
  return src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(dest('assets/js/'));
};

function imagens() {
  return src('src/img/**/*')
    .pipe(plumber())
    .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
    .pipe(dest('assets/img/'));
};

function fonts() {
  return src([
    'src/fonts/**'])
    .pipe(dest('assets/fonts/'));
};

// Monta o site do Jekyll
function jekyllBuild(done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
      .on('close', done);
};

// Refaz o site e atualiza a página
function jekyllRebuild() {
  return browserSync.reload();
};

/**
* Espera até que o jekyll-build seja executado e então levanta o
* servidor utilizando o _site como pasta raiz
*/
function browserJekyllSync() {
  return browserSync({
    server: {
      baseDir: '_site'
    }
  });
};

function watching() {
  watch('src/scss/**/*.scss', parallel(css))
  .on('change', series(jekyllBuild, jekyllRebuild()));
  watch('src/js/**/*.js', parallel(js))
  .on('change', series(jekyllBuild, jekyllRebuild()));
  watch('src/img/**/*.{jpg,png,gif}', parallel(imagens))
  .on('change', series(jekyllBuild, jekyllRebuild()));
  watch('src/fonts/**/*.{eot,svg,ttf, woff}', parallel(fonts))
  .on('change', series(jekyllBuild, jekyllRebuild()));
  watch(['*.md', '_includes/*.html', '_layouts/*.html', '_posts/*'])
  .on('change', series(jekyllBuild, jekyllRebuild()));
};

exports.css = css;
exports.js = js;
exports.imagens = imagens;
exports.fonts = fonts;
exports.default = series(parallel(css, js, imagens, fonts), series(jekyllBuild, browserJekyllSync), watching);
