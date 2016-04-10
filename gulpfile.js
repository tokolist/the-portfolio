var gulp = require('gulp');
var path = require('path');
var compass = require('gulp-compass');
var postcss = require("gulp-postcss");
var stylelint = require("stylelint");
var scss = require('postcss-scss');

gulp.task('styles', function(){
  gulp.src('./sass/**/*.scss')
  	.pipe(postcss([
  		stylelint({
  			"extends": "stylelint-config-standard",
			"rules": {
				"indentation": "tab",
				"no-missing-eof-newline": null,
				"selector-list-comma-newline-after": null,
				"number-leading-zero": "never",
				"comment-whitespace-inside": null,
				"comment-empty-line-before": null,
				"at-rule-empty-line-before": null,
				"selector-pseudo-element-colon-notation": "single"
			}
  		})
  	], {
  		syntax: scss
  	}))
    .pipe(compass({
	    css: 'css',
	    sass: 'sass',
	    image: 'img',
	    javascript: 'js',
	    font: 'fonts'
    }));
});

gulp.task('default', ['styles']);

gulp.task('live', function(){
	gulp.watch('./sass/**/*.scss', ['styles']);
});