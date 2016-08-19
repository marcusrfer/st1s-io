/**
 * @ngdoc object
 * @name appfy.theme.component:coverTyping
 **/
(function () {
    'use strict';
    angular.module('st.1.s.present').component('coverTyping', {
        bindings: {
            strings: '='
        },
        templateUrl: "app/modules/st1s-present/components/coverTyping/coverTyping.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;
            vm.strings = $scope.$ctrl.strings;
        }
    });
})();