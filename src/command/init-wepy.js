import program from 'commander'
import inquirer from 'inquirer'
import gitCtrl from '../utils/gitCtrl'
// 初始化git操作类
let git = new gitCtrl('user', 'YufJi');

program
	.command( 'init-wepy' )
	.description( 'install github project to local' )
	.action( async ( options ) => { //list命令的实现体
    try {
      let result = await git.downloadGitRepo('WepyWithSaga')
  		console.log( result ? 'SUCCESS' : result )
    } catch (e) {
      console.log(e);
    }

	} );
program.parse( process.argv );
