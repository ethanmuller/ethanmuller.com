const shell = require('shelljs');
const map = require('lodash/map');

console.log(`Starting site for ${process.env.NODE_ENV || 'development'}`);

const tasks = {
  production: ['copy', 'patterns', 'sass', 'server'],

  development: ['copy', 'patterns', 'sass', 'server', 'watch'],
};

function parallelTasks(env) {
  const list = map(tasks[env], task => `"npm run ${task}" `);

  return `parallelshell ${list.join('')}`;
}

if (process.env.NODE_ENV === 'production') {
  shell.exec(parallelTasks('production'));
} else {
  shell.exec(parallelTasks('development'));
}