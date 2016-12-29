const gulp=require('gulp');
const uglify=require('gulp-uglify');
const cleanCss=require('gulp-clean-css');
const pump = require('pump');
const clean=require('gulp-clean');
const concat=require('gulp-concat');
const connect=require('gulp-connect');
const rename=require('gulp-rename');
const rev=require('gulp-rev');
//删除任务
gulp.task('del1',function(){
	return gulp.src('./dist/js')
			.pipe(clean())
})
gulp.task('del2',function(){
	return gulp.src('./dist/css')
			.pipe(clean())
})


//压缩js
gulp.task('compressJS', function (){
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({
        	suffix:".min",
        	prefix:"js"
        }))
    	.pipe( gulp.dest('./dist/js'))

});
//压缩css
gulp.task('compressCSS', function (){
    gulp.src('./src/css/*.css')
        .pipe(cleanCss())
        .pipe(rename({
        	suffix:".min",
        	prefix:"css"
        }))
    	.pipe( gulp.dest('./dist/css'))

});

//合并并压缩js：
gulp.task('mergeJS',['del1'],function(){
	gulp.src('./src/js/*.js')
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
})
//合并并压缩css：
gulp.task('mergeCSS',['del2'],function(){
	gulp.src('./src/css/*.css')
		.pipe(concat('all.min.css'))
		.pipe(cleanCss())
		.pipe(gulp.dest('./dist/css'))
})

//监测
gulp.task('watch',function(){
	gulp.watch(['./src/js/*.js'],['./src/css/*.css'],['mergeJS'],['mergeCSS'])
})

//启动环境：
gulp.task('server',function(){
	connect.server({
		port:9999,
		livereload:true
	})
})

//创建md5文件
gulp.task('hash',['del'],function(){
	return gulp.src('./src/js/*.js')
			.pipe(rev())
			.pipe(gulp.dest('./dist/js'))
			.pipe(rev.manifest())
			.pipe(gulp.dest('./rev'))
})