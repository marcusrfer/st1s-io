/**
 * @ngdoc object
 * @name st.1.s.present.component:socialShare
 **/
(function () {
    'use strict';
    angular.module('st.1.s.present').component('socialShare', {
        bindings: {
            sectionClass: '=',
            url: '=',
            text: '=',
            media: '='
        },
        templateUrl: "app/modules/st1s-present/components/socialShare/socialShare.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;

        }
    });
})();