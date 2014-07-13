gulp-examples
=============


Install Gulp Js
------------------


>npm install gulp -g


>➜  ~  gulp -v
[09:35:46] CLI version 3.8.6
[09:35:46] Local version undefined


As per documentation, you should save the gulp to project dependencies

>npm install gulp --save-dev


if npm throws an error due to sudo access,run the following command

>sudo chown -R `whoami` ~/.npm


Gulp Basics
------------

#Whats is gulp?

Gulp is a streaming build system or  build orchestration tool.


    input -------> gulp ( run  task(s) ) -----------> output
    |                                                       |
    ------------------>   Watch -------------------------->


Simplified working of gulp

gulp.src      : takes a glob and represents a file structure

gulp.task    : runs specific task(s)

gulp.dest    :  represents the output file structure , creates files/folder , if doesn't exist.

gulp.watch : watch files and emit change events.


Getting started
----------------

1.  create  gulpfile.js with following contents

>var gulp=require('gulp');
>
>
>gulp.task('default',function(){
>  console.log('gulp default task');
>});

2.  run gulp


     ➜  gulp_examples  gulp
    [10:42:19] Using gulpfile ~/projects/gulp_examples/gulpfile.js
    [10:42:19] Starting 'default'...
    gulp default task
    [10:42:19] Finished 'default' after 98 μs


When you run gulp, it always looks for a task called "default" and try to run it..


3. create new custom task 

>gulp.task('my-custom-task',function(){
    console.log('my custom task');
});

then you can run the custom task by running 

    ➜  gulp_examples  gulp my-custom-task
    [10:45:22] Using gulpfile ~/projects/gulp_examples/gulpfile.js
    [10:45:22] Starting 'my-custom-task'...
    my custom task
    [10:45:22] Finished 'my-custom-task' after 87 μs
    ➜  gulp_examples


4. Run dependent task before default task

>var gulp=require('gulp');
    
>gulp.task('my-custom-task',function(){
  console.log('my custom task');
});
    
>gulp.task('default',['my-custom-task'],function(){
  console.log('gulp default task');
});

you can mention dependent tasks as an array like above 

if you run gulp, you should see the following..

    ➜  gulp_examples  gulp 
    [10:50:32] Using gulpfile ~/projects/gulp_examples/gulpfile.js
    [10:50:32] Starting 'my-custom-task'...
    my custom task
    [10:50:32] Finished 'my-custom-task' after 84 μs
    [10:50:32] Starting 'default'...
    gulp default task
    [10:50:32] Finished 'default' after 37 μ










