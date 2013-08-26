'use strict';


var BranchStatusController = function($scope) {
  $scope.branches = [{
    title: 'master',
    cards: [
      new CardViewData('build', 'OK', '*3 days* since the last failure', ['build-card', 'build-card-ok']),
      new CardViewData('*google*3', '23', 'shas behind', ['google3-card']),
      new CardViewData('there have been', '85', 'shas since the last release', ['sha-count-card'])
    ]
  }, {
    title: 'stable/1.0',
    cards: [
      new CardViewData('build', 'broken', 'for the past *2 hours and 15 minutes*', ['build-card', 'build-card-broken']),
      new CardViewData('*google*3', '22', 'shas behind', ['google3-card', 'google3-card-far-behind']),
      new CardViewData('there have been', '233', 'shas since the last release', ['sha-count-card'])
    ]
  }];
};
