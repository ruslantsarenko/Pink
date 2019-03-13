var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');
    browserSync = require('browser-sync');
    del = require('del');
    imagemin = require('gulp-imagemin');
    cssmin = require('gulp-cssmin');
    uglify = require('gulp-uglify');

gulp.task('scss', () => {
  return gulp.src('app/sass/style.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))

    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
  gulp.watch('app/sass/**/*.scss', gulp.parallel('scss'))
  gulp.watch('app/*.html').on('change', browserSync.reload)
});


gulp.task('default', gulp.series('watch'), () => { });

gulp.task('clean', (cb)=> 
    del(['dist/**/*', '!dist/_static', '!dist/_static/**/*'], cb)
);

 gulp.task('html:build', ()=>
gulp.src('app/*.html')
.pipe(gulp.dest('dist/'))
  );

 gulp.task('fonts:build', ()=>
gulp.src('app/fonts/')
.pipe(gulp.dest('dist/fonts/'))
  );

 gulp.task('img:build', () =>
    gulp.src('app/img/**/*')
        .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 2}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
]))
        .pipe(gulp.dest('dist/img/'))
);

 gulp.task('css:build', ()=> 
    gulp.src('app/css/style.css')
        .pipe(cssmin())
        //.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css/'))
);

  gulp.task('js:build', ()=> 
    gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
);

  gulp.task('build', gulp.series('clean', gulp.parallel('html:build', 'fonts:build', 'img:build', 'css:build', 'js:build')));