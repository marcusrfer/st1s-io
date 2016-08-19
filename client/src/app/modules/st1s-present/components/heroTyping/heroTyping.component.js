/**
 * @ngdoc object
 * @name st.1.s.present.component:heroTyping
 **/
(function () {
    'use strict';
    angular.module('st.1.s.present').component('heroTyping', {
        bindings: {
            string: '='
        },
        templateUrl: "app/modules/st1s-present/components/heroTyping/heroTyping.html",
        controller: /*@ngInject*/ function ($scope, setting) {
            var vm = this;
            vm.strings = function () { return setting.st1s.about };

        }
    });
})();