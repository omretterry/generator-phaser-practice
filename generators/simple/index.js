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
    this.fs.copyTpl(this.templatePath('index.html'), this.destinationPath('index.html'), {
      title: this.proName
    });

    mkdirp('img/');
    mkdirp('js/');

    this.fs.copy(
      this.templatePath('js/phaser.min.js'),
      this.destinationPath('js/phaser.min.js')
    );

    this.fs.copy(
      this.templatePath('img/angry.png'),
      this.destinationPath('img/angry.png')
    );

    this.fs.copy(
      this.templatePath('img/happy.png'),
      this.destinationPath('img/happy.png')
    );
  }
};
