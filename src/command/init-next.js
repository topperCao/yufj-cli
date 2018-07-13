import program from 'commander'
import inquirer from 'inquirer'
import gitCtrl from '../utils/gitCtrl'
// 初始化git操作类
let git = new gitCtrl('user', 'YufJi');

program
	.command( 'init-next' )
	.description( 'install github project to local' )
	.action( async ( options ) => { //list命令的实现体
    try {
      console.log('loading...')
      let result = await git.downloadGitRepo('nextapp')
  		console.log( result ? 'SUCCESS' : result )
    } catch (e) {
      console.log('fail');
    }

	} );
program.parse( process.argv );
