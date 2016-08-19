(function () {
    'use strict';
    /**
    * @ngdoc object
    * @name st.1.s.present
    **/
    angular.module('st.1.s.present', [
        //module dependencies goes here
    ]);
})();
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
        controller: /*@ngInject*/ function ($scope, setting) { 
            var vm = this;
            vm.strings = $scope.$ctrl.strings;
        }
    });
})();
/**
 * @ngdoc object
 * @name st.1.s.present.component:heroTyping
 **/
(function () {
    'use strict';
    angular.module('st.1.s.present').component('heroTyping', {
        bindings: {
            strings: '=',
            social: '=' //social object
        },
        templateUrl: "app/modules/st1s-present/components/heroTyping/heroTyping.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;          
            vm.strings = $scope.$ctrl.strings;
        }
    });
})();
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
angular.module('st.1.s.present').run(['$templateCache', function($templateCache) {$templateCache.put('app/modules/st1s-present/components/coverTyping/coverTyping.html','<div class=cover-typing><span class=bash>$</span><cover-typing-typed strings=$ctrl.strings></cover-typing-typed></div>');
$templateCache.put('app/modules/st1s-present/components/heroTyping/heroTyping.html','<div class=hero-typing><section class="hero is-medium is-primary is-bold is-fullheight"><div class=hero-body><div class="container has-text-centered"><cover-typing strings=$ctrl.strings></cover-typing></div></div><div class=hero-foot><div class=nav-center><a class=nav-item href={{$ctrl.social.github.profile}}><span class="icon is-medium"><i class="fa fa-github"></i> </span></a><a class=nav-item href={{$ctrl.social.twitter.profile}}><span class="icon is-medium"><i class="fa fa-twitter"></i> </span></a><a class=nav-item href={{$ctrl.social.google.profile}}><span class="icon is-medium"><i class="fa fa-google-plus"></i> </span></a><a class=nav-item href={{$ctrl.social.facebook.profile}}><span class="icon is-medium"><i class="fa fa-facebook-official"></i></span></a></div></div></section></div>');
$templateCache.put('app/modules/st1s-present/directives/coverTypingTyped/coverTypingTyped.html','<div class=cover-typing-typed></div>');}]);