/**
 * @license Inertia v1.0
 * 
 * Inertia, Inc. 
 * License: MIT
 */

apolloItemServices.factory('ApolloHistory', [ '$resource', function($resource) {
	return $resource('http://localhost:8888/api/apollospaitems/history', {itemId : '@historyItemId'}, {
		query : {
			method : 'GET',
			isArray : true
		}
	});
} ]);

apolloMaintenanceControllers.controller('ApolloHistoryController', [ '$scope', '$stateParams', 'ApolloHistory', 
        function($scope, $stateParams, ApolloHistory) {
			$scope.historyItemId=$stateParams.itemId;
			$scope.itemHistory=ApolloHistory.query({itemId:$scope.historyItemId});

		} ]);

