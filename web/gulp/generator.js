'use strict';

var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer'),
    path = require('path');

function format(string) {
    var username = string.toLowerCase();
    return username.replace(/\s/g, '');
}

gulp.task('generator', function (done) {
    var prompts = [{
        name: 'module',
        message: 'What is the name of your module (api-*, web-*, admin-*) ?',
        default: ''
    }];
    //Ask
    inquirer.prompt(prompts).then(function (answers) {
            answers.appNameSlug = _.slugify(answers.appName);
            answers.users = ['fred', 'barney'];
            gulp.src(BASE_PATH + '/gulp/templates/**')
                .pipe(template(answers))
                .pipe(rename(function (file) {
                    if (file.basename[0] === '_') {
                        file.basename = '.' + file.basename.slice(1);
                    }
                }))
                //.pipe(conflict('./'))
                .pipe(gulp.dest(BASE_PATH + '/app/modules'))
                //.pipe(install())
                .on('end', function () {
                    console.log('done generator');
                    done();
                });
        }).catch(function(err){
            console.log(err);
        })
});
