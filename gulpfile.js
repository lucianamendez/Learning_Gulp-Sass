const gulp = require ('gulp');
const uglify = require ('gulp-uglify');
const sass = require ('gulp-sass');
/*
gulp.task define task
.src points to files to use
.dest points to folder to output (public)
.watch watch files and folders for changes
*/

gulp.task('message',function(){
	return console.log('tu vieja'); //gulp message
});

gulp.task('htmlfiles',function(){
	gulp.src('src/*.html').pipe(gulp.dest('dist')); //va a crear la carpeta dist y va a poner htmlfiles dentro
});

gulp.task('minify',function(){
	gulp.src('src/js/*.js').pipe(uglify()).pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function(){
	gulp.src('src/sass/style.scss').pipe(sass().on('error',sass.logError)).pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function(){
	gulp.watch('src/js/*.js',['minify']);
	gulp.watch('src/sass/*.scss',['sass']);
	gulp.watch('src/*.html',['htmlfiles']);
});