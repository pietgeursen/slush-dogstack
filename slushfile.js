var gulp = require('gulp')
var install = require('gulp-install')
var conflict = require('gulp-conflict')
var template = require('gulp-template')
var rename = require('gulp-rename')
var inquirer = require('inquirer')
var licenses = require('osi-licenses')
var i = require('i')()

gulp.task('default', function (done) {
  promptProject()
    .then(function (answers) {
      if (!answers.moveon) {
        return done()
      }
      // Note use of __dirname to be relative to generator
      gulp.src(__dirname + '/template/**', {
        // Include dotfiles
        dot: true
      })
        // Lodash template support
        .pipe(template(answers, {interpolate: /<%=([\s\S]+?)%>/g }))
        // Rename dotfiles
        .pipe(rename(function (file) {
          if (file.basename[0] === '_') {
            file.basename = '.' + file.basename.slice(1)
          }
        }))
        // Confirms overwrites on file conflicts
        .pipe(conflict('./'))
        // Without __dirname here = relative to cwd
        .pipe(gulp.dest('./'))
        // Run `bower install` and/or `npm install` if necessary
        .pipe(install())
        .on('finish', function () {
          done() // Finished!
        })
    })
})


gulp.task('action', function (done) {
  promptAction()
    .then(function(answers) {
      const { actionName, domainName } = answers
      answers.ACTION_NAME = actionName.toUpperCase()
      answers.ActionName = titleCase(actionName) 
      answers.DOMAIN_NAME = domainName.toUpperCase()

      gulp.src(__dirname + '/template/action/**', {
      })
        // Lodash template support
        .pipe(template(answers))
        // Confirms overwrites on file conflicts
        .pipe(conflict(`./${domainName}/actions`))
        // Without __dirname here = relative to cwd
        .pipe(gulp.dest(`./${domainName}/actions`))
        .on('finish', function () {
          done() // Finished!
      })
  })
})

gulp.task('domain', function (done) {
  promptDomain()
    .then(function(answers) {
      const names = answers.name 
      answers.names = i.pluralize(names)
      answers.name = i.singularize(names)
      answers.Name = i.titleize(answers.name)
      answers.Names = i.titleize(answers.names)
      answers.NAME = answers.name.toUpperCase()
      answers.NAMES = answers.names.toUpperCase()

      gulp.src(__dirname + '/template/domain/**', {
      })
        // Lodash template support
        .pipe(template(answers))
        // Confirms overwrites on file conflicts
        .pipe(conflict(`./${answers.names}`))
        // Without __dirname here = relative to cwd
        .pipe(gulp.dest(`./${answers.names}`))
        .on('finish', function () {
          done() // Finished!
      })
  })
})

function promptDomain() {
  return inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'What is the name of your doman, should be pluralised eg: cats',
    // Get app name from arguments by default
    default: gulp.args.join(' ')
  }])
}

function promptAction() {
  return inquirer.prompt([{
    type: 'input',
    name: 'domainName',
    message: 'What domain do you want to create this action in',
    default: 'dogs' 
  },{
    type: 'input',
    name: 'actionName',
    message: 'What do you want to call your action',
    default: 'update' 
  }])
}
function promptProject() {
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
