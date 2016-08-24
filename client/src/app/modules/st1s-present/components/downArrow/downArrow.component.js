/**
 * @ngdoc object
 * @name appfy.presentation.component:downArrow
 **/
(function () {
    'use strict';
    angular.module('st.1.s.present').component('downArrow', {
        bindings: {
            place: '='
        },
        templateUrl: "app/modules/st1s-present/components/downArrow/downArrow.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;
        }
    });
})();