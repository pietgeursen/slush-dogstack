var gulp = require('gulp')
var install = require('gulp-install')
var conflict = require('gulp-conflict')
//var template = require('gulp-template')
var {template} = require('lodash')
var rename = require('gulp-rename')
var inquirer = require('inquirer')
var licenses = require('osi-licenses')

var pull = require('pull-stream')
var onEnd = require('pull-stream/sinks/on-end')
var fromPromise = require('pull-promise')
var task = require('pull-task')
var vinyl = require('pull-vinyl')

gulp.task('default', function (done) {
  pull(
    fromPromise.source(prompt()),
    pull.filter(answers => answers.moveon),
    pull.asyncMap((answers, cb) => {
      pull(
        // Note use of __dirname to be relative to generator
        vinyl.src(__dirname + '/template/**/*.*', {
          // Include dotfiles
          dot: true
        }),
        // Rename dotfiles
        pull.map(file => {
          if (file.basename[0] === '_') {
            file.basename = '.' + file.basename.slice(1)
          }
          return file
        }),
        pull.map(file => {
          if(!file.isNull()){
            var tpl = template(file.contents.toString());
            file.contents = new Buffer(tpl(Object.assign({}, file.data, answers)));
          }
          return file
        }),
        vinyl.dest(null, cb)
      )
      // Confirms overwrites on file conflicts
      //  .pipe(conflict('./'))
      // Without __dirname here = relative to cwd
      //  .pipe(gulp.dest('./'))
      // Run `bower install` and/or `npm install` if necessary
      //  .pipe(install())
    }),
    onEnd(done)
  )
})

function prompt() {
  return inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'Give your app a name',
    // Get app name from arguments by default
    default: gulp.args.join(' ')
  }, {
    type: 'input',
    name: 'description',
    message: 'How would you describe the app?',
    default: "it's a real sweet app"
  }, {
    type: 'input',
    name: 'author',
    message: 'What is your name on GitHub?',
    default: 'author'
  }, {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: Object.keys(licenses),
    default: 'ISC'
  }, {
    type: 'confirm',
    name: 'moveon',
    message: 'Continue?'
  }])
}
