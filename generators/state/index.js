var mkdirp = require('mkdirp');

var Generator = require('yeoman-generator');
module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname // Default to current folder name
      }
    ]).then(answers => {
      this.proName = answers.name;
    });
  }

  writing() {
    let dirList = ['img/', 'js/', 'js/states'];

    // The part of make directories
    dirList.forEach(dir => {
      mkdirp(dir);
    });

    this.fs.copyTpl(this.templatePath('index.html'), this.destinationPath('index.html'), {
      title: this.proName
    });


    let pathList = [
      'img/happy.png',
      'img/angry.png',
      'js/phaser.min.js',
      'js/app.js',
      'js/states/state1.js',
      'js/states/state2.js',
      'js/states/state3.js',
    ];

    pathList.forEach(path => {
      this.fs.copy(this.templatePath(path), this.destinationPath(path));
    });
  }
};
