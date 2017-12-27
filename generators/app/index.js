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
    let dirList = ['.vscode/', 'bin/', 'bin/assets/', 'bin/js/', 'defs/', 'src/'];

    // The part of make directories
    dirList.forEach(dir => {
      mkdirp(dir);
    });

    this.fs.copyTpl(
      this.templatePath('bin/index.html'),
      this.destinationPath('bin/index.html'),
      {
        title: this.proName
      }
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        title: this.proName
      }
    );

    let pathList = [
      '.vscode/tasks.json',
      'bin/assets/happy.png',
      'bin/assets/angry.png',
      'bin/js/phaser.min.js',
      'defs/p2.d.ts',
      'defs/phaser.d.ts',
      'defs/pixi.d.ts',
      'src/game.ts',
      'tsconfig.json'
    ];

    pathList.forEach(path => {
      this.fs.copy(this.templatePath(path), this.destinationPath(path));
    });
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
