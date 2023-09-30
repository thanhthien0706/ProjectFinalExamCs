const {
  generatorComponent,
  generatorModule,
  generatorPage,
} = require('./plop/action');

module.exports = (plop) => {
  plop.setGenerator('component', generatorComponent);
  plop.setGenerator('module', generatorModule);
  plop.setGenerator('page', generatorPage);
};
