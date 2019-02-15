requirejs.config({
    paths: {
        'jquery': 'https://code.jquery.com/jquery.js',
        angular: '../../libs/angular.min',
        domReady: '../../libs/domReady',
        router: 'https://cdn.bootcss.com/angular-ui-router/1.0.14/angular-ui-router',

        routerList: '../../routers/appRouters',
        app: './app',

        HomeCtrl: '../../template/home/home',
        AboutCtrl: '../../template/about/about'
    },
    shim: { //配置不兼容的模块,为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置。
        angular: {
            exports: 'angular'//导出模块名称
        },
        'router': {
            deps: ['angular']//依赖什么模块
        }
    }
});


// 引入主模块，对应各自文件
require([
    'angular', 'domReady', 'router',
    'app', 'routerList',
    'HomeCtrl','AboutCtrl'  
], 
function(){
    angular.bootstrap(document, ['myApp']);
});