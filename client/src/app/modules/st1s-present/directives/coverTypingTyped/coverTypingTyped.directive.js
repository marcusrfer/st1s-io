/**
 * @ngdoc object
 * @name appfy.theme.directive:coverTypingTyped
 **/
(function () {
    'use strict';
    angular.module('st.1.s.present').directive('coverTypingTyped', /*@ngInject*/ function ($rootScope, $timeout) {
        return {
            scope: {
                ngModel: '='
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
                        strings: [
                            "Hi!",
                            "my name is Stewan",
                            "but some people call me ' is ti won es '",
                            "do not ask me why O.o",
                            "I like to code",
                            "design",
                            "think differently",
                            "build incredible things",
                            'coffee',
                            "solve problems",
                            'coffee',
                            "automate tasks",
                            'did i say coffee?',
                            '...',
                            "I'm currently",
                            "hard working with",
                            "angular",
                            "node",
                            "html5",
                            "css",
                            "firebase",
                            "mongo.db",
                            "all involving",
                            "open source culture",
                            "and s2 javascript",
                            "Thanks for reading",
                            "if you liked",
                            "follow me",
                            "and keep up to date",
                            "(#"
                        ],
                        typeSpeed: 100,
                        backDelay: 1000,
                        loop: true
                    });
                });
            }
        }
    });
})();