const program = require('commander')
const inquirer = require('inquirer')
const { gitCtrl } = require('../utils/gitCtrl')
// 初始化git操作类
let git = new gitCtrl('user', 'YufJi');

program
	.command('init-wepy')
	.description('install github project to local')
	.action(async (options) => { //list命令的实现体
    try {
      console.log('loading...')
      let result = await git.downloadGitRepo('WepyWithSaga')
  		console.log(result ? 'SUCCESS' : result)
    } catch (e) {
      console.log(e);
    }
	});
program.parse(process.argv);
