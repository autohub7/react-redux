// including plugins
var gulp = require('gulp')
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var gp_concat = require('gulp-concat')
var gp_rename = require('gulp-rename')
var gp_uglify = require('gulp-uglify')
var path = require('path')

gulp.task('css-main', function(){
    return gulp.src(
            [
                './public/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
                './public/css/main.css',
                './public/css/animate.css'
            ]
        )
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gp_concat('style.min.css'))
        .pipe(gulp.dest('./public/dist/css/'))
})


gulp.task('css-vendor', function(){
    return gulp.src(
            [
                './public/vendor/bootstrap/css/bootstrap.min.css',
                './public/vendor/revolution/css/layers.css',
                './public/vendor/revolution/css/navigation.css',
                './public/vendor/revolution/css/settings.css',
                './public/vendor/css-hamburgers/hamburgers.min.css',
                './public/vendor/select2/select2.min.css',
                './public/vendor/daterangepicker-bootstrap/daterangepicker.css',
                './public/vendor/animsition/dist/css/animsition.min.css'
            ]
        )
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gp_concat('vendor.min.css'))
        .pipe(gulp.dest('./public/dist/vendor/css/'))
})

gulp.task('copy-fonts', function(){
    return gulp.src(
            ['./public/fonts/**']
        )
        .pipe(gulp.dest('./public/dist/fonts/'))
})

gulp.task('style', ['css-main', 'css-vendor', 'copy-fonts'], function(){})



