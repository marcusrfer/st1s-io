/**
 * @ngdoc object
 * @name appfy.theme.directive:coverTypingTyped
 **/
(function () {
    'use strict';
    angular.module('st.1.s.present').directive('coverTypingTyped', /*@ngInject*/ function ($rootScope, $timeout) {
        return {
            scope: {
                strings: '='
            },
            templateUrl: "app/modules/st1s-present/directives/coverTypingTyped/coverTypingTyped.html",
            bindToController: true,
            controllerAs: 'vm',
            controller: /*@ngInject*/ function ($scope) {
                var vm = this;
                //ctrl code
            },
            link: function ($scope, $elem, $attr) {
                $(function () {
                    $($elem).typed({
                        strings: $scope.vm.strings || ['enter', 'your', 'awesome', 'text'],
                        typeSpeed: 100,
                        backDelay: 1000,
                        loop: true
                    });
                });
            }
        }
    });
})();