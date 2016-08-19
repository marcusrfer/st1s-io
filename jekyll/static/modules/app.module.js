(function () {
    'use strict';
    /**
     * @ngdoc overview
     * @name st1s-io
     * @requires appfy.core
     * @description
     * The app modules
     **/
    angular.module('st1s-io', [
        'ngAnimate',
        'st.1.s.present'
    ], function ($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    })
        .controller('$AppCtrl', function ($scope, setting) {
            this.setting = function () {
                return setting;
            }
        })
        .directive('changeLogo', function ($rootScope, $timeout) {
            return {
                scope: {
                    showLogo: '='
                },
                link: function ($scope, $elem, $attr) {
                    var elem = $($elem);
                    $timeout(function () {
                        var hero = elem.parents('section.hero');
                        var map = {
                            'is-danger': 'st1s-logo-h-pink.svg',
                            'is-warning': 'st1s-logo-h-dark.svg'
                        };

                        for (var k in map) {
                            if ($(hero[0]).hasClass(k)) {
                                elem.attr('src', '/static/images/' + map[k]);
                            }
                        }
                        $timeout(function () {
                            $rootScope.showLogo = true;
                        }, 750);
                    });
                }
            }
        });
})();