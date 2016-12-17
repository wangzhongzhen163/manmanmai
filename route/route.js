var myApp = angular.module('myApp', ['ngRoute']);
//路由
// function emailRouteConfig($routeProvider) {

//                     }
myApp.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/', {
                        controller: 'indexController',
                        templateUrl: './temp/index-tmp.html'
                    }).
                    when('/category', {
                        controller: 'categoryController',
                        templateUrl: './temp/category-tmp.html'
                    })
                    .when('/productlist/:categoryid/:pageid',{
                        controller:'productlistcontroller',
                        templateUrl:'./temp/productlist-tmp.html'
                    })
                    .when('/bijia/:productid',{
                        controller:'bijiaController',
                        templateUrl:'./temp/bijia-temp.html'
                    })
                    .when('/moneyctrl/:pageid?',{
                        templateUrl:'./temp/moneyctrl-temp.html',
                        controller:'moneyController'
                    })
                    .when('/gsproduct/:shopid/:areaid/:shopName/:areaName',{
                        controller:'gsproductController',
                        templateUrl:'./temp/gsproduct-temp.html'
                    })
                     .when('/gsproduct',{
                        controller:'gsproductController',
                        templateUrl:'./temp/gsproduct-temp.html'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
}]);
 //配置我们的路由
// function IndexController($scope) {
// }
// function CategoryController($scope) {
// }
// function productlistController($scope, $routeParams) {
//     $scope.categoryid=$routeParams.categoryid;
//     $scope.pageid=$routeParams.pageid;
// }
