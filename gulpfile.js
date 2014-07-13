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
 Assumption:
 There are 3 main folders  src, vendor and spec
 src/js - all your app specific files are kept
 vendor/js - all your third party modules are kept
 spec - all your spec files are kept

 Task

 Development:
 ------------------------------------------
 Concat all vendor files
 Concat all src files
 move all files to "development" as app.js

 what should happen during development mode?
 -------------------------------------------
 watch for changes in src/vendor/spec folders

 run jsHint during development
 run code coverage during development
 run specs during development

 Production/dist
 -------------------------------------------
 Concat vendor and src files
 Uglify app.js
 move to "dist/js" as app.js

 what should happen during development mode?
 -------------------------------------------
 on demand execute the following task

 run jsHint
 run code coverage
 run specs

 */



