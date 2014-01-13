'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ConfiguratorComponentGenerator = module.exports = function ConfiguratorComponentGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    // this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ConfiguratorComponentGenerator, yeoman.generators.Base);

ConfiguratorComponentGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'name',
    message: 'Come si chiama questo configuratore? Es: tmagent, home, network'
  }];

  this.prompt(prompts, function (props) {
    this.name = props.name.toLowerCase();

    cb();
  }.bind(this));
};

ConfiguratorComponentGenerator.prototype.app = function app() {
  this.mkdir(this.name);
  this.mkdir(this.name + '/controllers');
  this.mkdir(this.name + '/views');

  this.template('skeleton/bootstrap.coffee',        this.name + '/bootstrap.coffee');
  this.template('skeleton/_gitignore',              this.name + '/.gitignore');
  this.template('skeleton/controllers/main.coffee', this.name + '/controllers/main.coffee');
  this.template('skeleton/views/main.html',         this.name + '/views/main.html');
};

ConfiguratorComponentGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', this.name + '/.editorconfig');
  this.copy('jshintrc', this.name + '/.jshintrc');
};