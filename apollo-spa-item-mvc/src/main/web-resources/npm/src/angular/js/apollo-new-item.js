/**
 * @license Inertia v1.0
 * 
 * Inertia, Inc. 
 * License: MIT
 */


apolloItemServices.factory('ApolloNewItem', [ '$resource', function($resource) {
	return $resource('http://localhost:8888/api/apollospaitems/spaitem', {id:'@id'}, {
		head : {
			url : 'http://localhost:8888/api/apollospaitems/metadata',
			method: 'GET'
		},
		find : {
			method: 'GET'
		},
		submit : {
			method : 'POST'
		}
	});
}]);


apolloMaintenanceControllers.controller('ApolloNewItemController', [
		'$scope', 'ApolloNewItem', function($scope, ApolloNewItem) {
			var vm = this;
			vm.apolloItem = {};
			
			vm.submit = function() {
				$.blockUI({ message: '<h1><img src="images/busy.gif" /> Just a moment...</h1>' }); 
				ApolloNewItem.submit({id:vm.apolloItem.id}, vm.apolloItem).$promise.then(
						function(successResult) {
							vm.apolloItem.id = successResult._id;
					    }, function(errorResult) {
					        alert(errorResult);
					    });
				
				 setTimeout(function(){
	 					 $.unblockUI(); 
	 				  }, 1000);
			}
			
			 $scope.loadProperties = function() {
				 ApolloNewItem.head().$promise.then(
						 function( head ){
							 vm.formFields = apollo.generateFields(head);
							 });
			 };
				 
			
		}]);