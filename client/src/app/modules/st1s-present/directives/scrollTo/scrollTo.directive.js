/**
 * @ngdoc object
 * @name appfy.presentation.directive:scrollTo
 **/
(function () {
    'use strict';
    angular.module('st.1.s.present').directive('scrollTo', /*@ngInject*/ function ($rootScope, $timeout) {
        return {
            scope: {
            },
            controller: /*@ngInject*/ function ($scope) {
                var vm = this;
                //ctrl code
            },
            link: function ($scope, $elem, $attr) {

                //link code
                $($elem).click(function () {
                    var scrollTo = $attr.scrollTo || '.hero';
                    $("html, body").animate({ scrollTop: $(scrollTo).offset().top }, 1000);
                })
            }
        }
    });
})();