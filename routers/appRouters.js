define(['app'], function (app) {
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.when('', 'home');// 默认路由
        $stateProvider// 全部路由
            .state('home', {//路由状态
                url: '/home',//路径
                templateUrl: 'template/home/home.html',
                controller: 'HomeCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'template/about/about.html',
                controller: 'AboutCtrl'
            })
    }]);
});