const program = require('commander')
const inquirer = require('inquirer')
const { gitCtrl } = require('../utils/gitCtrl')
// 初始化git操作类
let git = new gitCtrl('user', 'YufJi');

program
	.command( 'init-next' )
	.description( 'install github project to local' )
	.action( async ( options ) => { //list命令的实现体
    try {
      console.log('loading...')
      let result = await git.downloadGitRepo('react-webpack');
  		console.log( result ? 'SUCCESS' : result )
    } catch (e) {
      console.log('fail');
    }

	} );
program.parse( process.argv );
