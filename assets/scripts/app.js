(function() {
	var app = angular.module('gemStore', ['store-directives']);

	app.controller('StoreController', ['$http', function($http) {
    	var store = this;
    	store.products = [];
    	$http.get('/products.json').success(function(data) {
      		store.products = data;
      	});
    }]);
})();
