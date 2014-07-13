/*
 Gulp modules
 */
var gulp = require('gulp');

/*
 Utility modules
 path
 */
var fs = require('fs');
var path = require('path');
var gutil = require('gulp-util');
var rimraf = require('gulp-rimraf');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
var watch = require('gulp-watch');
var ignore = require('gulp-ignore');
var del = require('del');


/*
  Js
 */

var concat = require('gulp-concat');

/*
 Task
 1. create a folder "src"
 2. create  couple of files file-1,file-2 in the folder "src"
 3. create a folder "dist" , if not exists
 4. delete any contents in folder "dist"
 5. move file-1 to dist
 */

function createFolder(folderName) {
    fs.mkdir(folderName, 0777, function (err) {
        if (err && err.code === 'EEXIST') {
            console.log(folderName + '-exists');
            return;
        }
        console.log(folderName + '-created');
    });
}

gulp.task('create-folders', function () {
    gutil.log(gutil.colors.white("creating src/dist folder"));
    ["src", "dist"].forEach(createFolder);
});

gulp.task('delete-folders', function () {
    gutil.log(gutil.colors.white("deleting src/dist folder"));

    del(['dist'], function (err) {
        console.log("folder deleted");
    });
});

gulp.task('move-files', function () {
    gulp.src('src/*.js')
        .pipe(ignore.exclude(/file-2.js/))
        .pipe(gulp.dest('dist/'))
        .on('error', gutil.log);
});

gulp.task('default', function () {
    console.log('gulp default task');
});



